from __future__ import annotations

from typing import List

from AoE2ScenarioParser.helper import helper
from AoE2ScenarioParser.helper import parser
from AoE2ScenarioParser.helper.retriever import find_retriever
from AoE2ScenarioParser.objects.aoe2_object import AoE2Object
from AoE2ScenarioParser.objects.trigger_obj import TriggerObject
from AoE2ScenarioParser.objects.variable_obj import VariableObject


def _evaluate_index_params(trigger_id, display_index):
    if trigger_id is None and display_index is None:
        raise ValueError("Please choose 'trigger_id' or 'display_index' as identification for the wanted trigger")
    if trigger_id is not None and display_index is not None:
        raise ValueError("Please identify a trigger using 'trigger_id' or 'display_index' but not both")


class TriggersObject(AoE2Object):
    def __init__(self,
                 triggers,
                 trigger_display_order,
                 variables
                 ):

        self.triggers: List[TriggerObject] = parser.listify(triggers)
        self.trigger_display_order: List[int] = parser.listify(trigger_display_order)
        self.variables: List[VariableObject] = parser.listify(variables)

        super().__init__()

    def add_trigger(self, name) -> TriggerObject:
        new_trigger = TriggerObject(name=name, trigger_id=len(self.triggers))
        self.triggers.append(new_trigger)
        helper.update_order_array(self.trigger_display_order, len(self.triggers))
        return new_trigger

    def add_variable(self, variable_id, name) -> VariableObject:
        if not (0 <= variable_id <= 255):
            raise ValueError("Variable ID has to fall between 0 and 255 (incl).")

        new_variable = VariableObject(variable_id=variable_id, name=name)
        self.variables.append(new_variable)
        return new_variable

    def get_summary_as_string(self) -> str:
        return_string = "\nTrigger Summary:\n"

        triggers = parser.listify(self.triggers)
        display_order = parser.listify(self.trigger_display_order)

        if len(display_order) == 0:
            return_string += "\t<< No Triggers >>"

        longest_trigger_name = -1
        for trigger_id in display_order:
            trigger_name = helper.del_str_trail(triggers[trigger_id].name)
            longest_trigger_name = max(longest_trigger_name, len(trigger_name))

        longest_trigger_name += 3
        for display, trigger_id in enumerate(display_order):
            trigger = triggers[trigger_id]
            trigger_name = helper.del_str_trail(trigger.name)

            buffer = longest_trigger_name - len(trigger_name)
            return_string += "\t" + trigger_name + (" " * buffer)
            return_string += " [Index: " + str(trigger_id) + ", Display: " + str(display) + "]"

            return_string += "\t(conditions: " + str(len(parser.listify(trigger.conditions))) + ", "
            return_string += " effects: " + str(len(parser.listify(trigger.effects))) + ")\n"

        variables = parser.listify(self.variables)

        return_string += "\nVariables Summary:\n"
        if len(variables) == 0:
            return_string += "\t<< No Variables >>"

        longest_variable_name = -1
        for variable in variables:
            longest_variable_name = max(longest_variable_name, len(variable.name))

        longest_variable_name += 3
        for index, variable in enumerate(variables):
            var_name = variable.name
            buffer = " " * (longest_variable_name - len(var_name))
            return_string += f"\t{var_name}{buffer}[Index: {variable.variable_id}]\n"

        return return_string

    def get_content_as_string(self) -> str:
        return_string = "Triggers:\n"

        triggers = parser.listify(self.triggers)
        display_order = parser.listify(self.trigger_display_order)

        if len(triggers) == 0:
            return_string += "\t<<No triggers>>"

        for trigger_id in display_order:
            return_string += self.get_trigger_as_string(trigger_id) + "\n"

        return_string += "Variables:\n"

        if len(triggers) == 0:
            return_string += "\t<<No Variables>>"

        for variable in parser.listify(self.variables):
            return_string += f"\t'{variable.name}' [Index: {variable.variable_id}]\n"

        return return_string

    def get_trigger_as_string(self, trigger_id=None, display_index=None) -> str:
        _evaluate_index_params(trigger_id, display_index)

        if trigger_id is None:
            trigger_id = self._get_trigger_id_by_display_index(display_index)

        trigger: TriggerObject = parser.listify(self.triggers)[trigger_id]
        display = parser.listify(self.trigger_display_order).index(trigger_id)

        return_string = "\t'" + helper.del_str_trail(trigger.name) + "'"
        return_string += " [Index: " + str(trigger_id) + ", Display: " + str(display) + "]" + ":\n"

        return_string += trigger.get_content_as_string()

        return return_string

    def get_trigger(self, trigger_id=None, display_index=None) -> TriggerObject:
        _evaluate_index_params(trigger_id, display_index)

        if trigger_id is None:
            trigger_id = self._get_trigger_id_by_display_index(display_index)

        return parser.listify(self.triggers)[trigger_id]

    def get_variable(self, variable_id: int = None, variable_name: str = None) -> VariableObject:
        if variable_id is None and variable_name is None:
            raise ValueError("Select a variable using the variable_id or variable_name parameters")
        if variable_id is not None and variable_name is not None:
            raise ValueError("Select a variable using either the variable_id or variable_name parameters, not both.")

        for variable in self.variables:
            if variable.variable_id == variable_id or variable.name == variable_name:
                return variable

    def remove_trigger(self, trigger_id: int = None, display_index: int = None, trigger: TriggerObject = None) -> None:
        if trigger is None:
            _evaluate_index_params(trigger_id, display_index)
        else:
            trigger_id = trigger.trigger_id

        if trigger_id is None:
            trigger_id = self._get_trigger_id_by_display_index(display_index)
        else:
            display_index = self.trigger_display_order.index(trigger_id)

        del self.triggers[trigger_id]
        del self.trigger_display_order[display_index]

        self.trigger_display_order = \
            [x - 1 if x > trigger_id else x for x in self.trigger_display_order]

    def _get_trigger_id_by_display_index(self, display_index) -> int:
        return self.trigger_display_order[display_index]

    @staticmethod
    def _parse_object(parsed_data, **kwargs) -> TriggersObject:  # Expected {}
        display_order = parser.listify(
            find_retriever(parsed_data['TriggerPiece'].retrievers, "Trigger display order array").data)
        trigger_data = parser.listify(
            find_retriever(parsed_data['TriggerPiece'].retrievers, "Trigger data").data)
        var_data = parser.listify(
            find_retriever(parsed_data['TriggerPiece'].retrievers, "Variables").data)

        triggers = []
        for index, trigger in enumerate(trigger_data):
            triggers.append(TriggerObject._parse_object(parsed_data, trigger=trigger, trigger_id=index))

        variables = []
        for var in var_data:
            variables.append(VariableObject._parse_object(parsed_data, variable=var))

        return TriggersObject(
            triggers=triggers,
            trigger_display_order=display_order,
            variables=variables
        )

    @staticmethod
    def _reconstruct_object(parsed_header, parsed_data, objects, **kwargs) -> None:  # Expected {}
        number_of_triggers_retriever = find_retriever(parsed_data['TriggerPiece'].retrievers, "Number of triggers")
        trigger_data_retriever = find_retriever(parsed_data['TriggerPiece'].retrievers, "Trigger data")
        display_order_retriever = find_retriever(parsed_data['TriggerPiece'].retrievers, "Trigger display order array")
        display_order_retriever.data = parser.listify(display_order_retriever.data)
        file_header_trigger_count_retriever = find_retriever(parsed_header['FileHeaderPiece'].retrievers,
                                                             "Trigger count")

        number_of_variable_retriever = find_retriever(
            parsed_data['TriggerPiece'].retrievers, "Number of variables")
        variable_data_retriever = find_retriever(parsed_data['TriggerPiece'].retrievers, "Variables")

        trigger_data_retriever.data = []
        for trigger in objects["TriggersObject"].triggers:
            TriggerObject._reconstruct_object(parsed_header, parsed_data, objects, trigger=trigger)

        variable_data_retriever.data = []
        for variable in objects["TriggersObject"].variables:
            VariableObject._reconstruct_object(parsed_header, parsed_data, objects, variable=variable,
                                               variables=variable_data_retriever.data)

        assert len(trigger_data_retriever.data) == len(objects["TriggersObject"].triggers)
        trigger_count = len(trigger_data_retriever.data)
        number_of_triggers_retriever.data = trigger_count
        file_header_trigger_count_retriever.data = trigger_count
        number_of_variable_retriever.data = len(variable_data_retriever.data)
        # Currently not necessary due to the parser changing the 'repeated' value equal to the len(list)
        # trigger_data_retriever.datatype.repeat = trigger_count
        # display_order_retriever.datatype.repeat = trigger_count
        helper.update_order_array(display_order_retriever.data, trigger_count)
