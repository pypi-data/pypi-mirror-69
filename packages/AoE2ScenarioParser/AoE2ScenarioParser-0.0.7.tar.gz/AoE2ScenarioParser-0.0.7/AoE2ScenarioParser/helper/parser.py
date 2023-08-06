import AoE2ScenarioParser.pieces.structs.aoe2_struct
from AoE2ScenarioParser.helper.bytes_to_x import *
from AoE2ScenarioParser.helper.generator import repeat_generator as r_gen

types = [
    "s",  # Signed int
    "u",  # Unsigned int
    "f",  # FloatingPoint
    "c",  # Character string
    "str",  # Variable length string
    "data",  # Data (Can be changed by used using bytes_to_x functions)
]


def vorl(var):
    """vorl stands for "Variable or List". This function returns the value if the list is a size of 1"""
    if type(var) is list:
        if len(var) is 1:
            return var[0]
        else:
            return var
    else:
        return var


def listify(var):
    """Always return item as list"""
    if type(var) is list:
        return var
    else:
        return [var]


class Parser:
    def __init__(self):
        self._saves = dict()

    def retrieve_value(self, generator, retriever, as_length=False):
        length = 0
        result = list()
        var_type, var_len = datatype_to_type_length(retriever.datatype.var)

        if retriever.set_repeat is not None:
            retriever.datatype.repeat = parse_repeat_string(self._saves, retriever.set_repeat)
        # try:
        for i in range(0, retriever.datatype.repeat):
            length += var_len

            if var_type == "struct":
                val = retriever.datatype.var(self)
                val.set_data_from_generator(generator)
                result.append(val)
                i = val.get_length()

                length += i
                continue
            if var_type == "u" or var_type == "s":
                val = bytes_to_int(r_gen(generator, var_len), signed=(var_type == "s"))
            elif var_type == "f":
                if var_len == 4:
                    val = bytes_to_float(r_gen(generator, var_len))
                else:  # Always 4 except for trigger version
                    val = bytes_to_double(r_gen(generator, var_len))
            elif var_type == "c":
                val = bytes_to_str(r_gen(generator, var_len))
            elif var_type == "data":
                val = r_gen(generator, var_len)
            elif var_type == "str":
                string_length = bytes_to_int(r_gen(generator, var_len), endian="little", signed=True)
                try:
                    data = r_gen(generator, string_length)
                    val = bytes_to_str(data)
                    length += string_length
                except StopIteration as e:
                    print(f"\n[StopIteration] Parser.retrieve_value: \n"
                          f"\tRetriever: {retriever}\n"
                          f"\tString length: {string_length}\n")
                    raise StopIteration(e)
            else:
                break

            result.append(val)
        # except StopIteration as e:
        #     print(repr(retriever) + "\n" +
        #           "var_type: " + var_type + "\n" +
        #           "var_len: " + str(var_len))
        #     print(e)
        #     exit()

        if retriever.on_success is not None:
            if type(result) is list:
                for x in range(0, len(result)):
                    result[x] = retriever.on_success(result[x])
            else:
                result = retriever.on_success(result)

        if retriever.save_as is not None:
            self.add_to_saves(retriever.save_as, vorl(result))

        if retriever.log_value:
            print(retriever, "retrieved:", vorl(result))

        return vorl(result) if not as_length else length

    def add_to_saves(self, name, value):
        self._saves[name] = value


def parse_repeat_string(saves, repeat_string):
    while True:
        start = repeat_string.find("{")
        end = repeat_string.find("}")

        if start is -1 and end is -1:
            break

        inclusive = repeat_string[start:end + 1]
        exclusive = repeat_string[start + 1:end]

        repeat_string = repeat_string.replace(inclusive, str(saves[exclusive]))
    return eval(repeat_string)


def calculate_length(generator, retriever_list):
    parser = Parser()
    total_length = 0

    for retriever in retriever_list:
        total_length += parser.retrieve_value(generator, retriever, as_length=True)

    return total_length


def datatype_to_type_length(var):
    try:
        if issubclass(var, AoE2ScenarioParser.pieces.structs.aoe2_struct.AoE2Struct):
            return "struct", 0
        else:  # Not possible at this time
            return "", 0
    except TypeError:
        pass

    var_type = ""
    var_len = ""

    for char in var:
        if char.isnumeric():
            var_len += char
        else:
            var_type += char

    if var_type == "":
        var_type = "data"

    if var_len == "":
        var_len = 0
    else:
        var_len = int(var_len)

    assert var_type in types

    if var_type != "c" and var_type != "data":
        var_len = int(var_len / 8)

    return var_type, var_len


def retriever_to_bytes(retriever):
    var_type, var_len = datatype_to_type_length(retriever.datatype.var)

    return_bytes = b''

    is_list = type(retriever.data) == list
    if is_list:
        retriever.datatype.repeat = len(retriever.data)

    try:
        for i in range(0, retriever.datatype.repeat):
            data = retriever.data[i] if is_list else retriever.data

            if data is None:
                print("No data found in retriever: " + str(retriever))
                return None

            if var_type == "struct":
                for struct_retriever in data.retrievers:
                    return_bytes += retriever_to_bytes(struct_retriever)
            if var_type == "u" or var_type == "s":
                return_bytes += int_to_bytes(data, var_len, signed=(var_type == "s"))
            elif var_type == "f":
                if var_len == 4:
                    return_bytes += float_to_bytes(data)
                else:  # Always 4 (float) except for trigger version (8: double)
                    return_bytes += double_to_bytes(data)
            elif var_type == "c":
                return_bytes += str_to_bytes(data)
            elif var_type == "data":
                return_bytes += data
            elif var_type == "str":
                return_bytes += int_to_bytes(len(data.encode('utf-8')), var_len, endian="little", signed=True)
                return_bytes += str_to_bytes(data)
    except (AttributeError, TypeError) as e:
        print("\n" + type(e).__name__ + " occurred in: " + retriever.name +
              "\n\tData: " + repr(retriever.data) + "\n\tDatatype: " + str(retriever.datatype))
        raise e

    if retriever.log_value:
        print(retriever, "returned", return_bytes)

    return return_bytes
