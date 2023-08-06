import abc


class AoE2Object:
    def __init__(self):
        pass

    @staticmethod
    @abc.abstractmethod
    def _parse_object(parsed_data, **kwargs):
        pass

    @staticmethod
    @abc.abstractmethod
    def _reconstruct_object(parsed_header, parsed_data, objects, **kwargs):
        pass

    def __repr__(self):
        return str(self.__class__.__name__) + ": " + str(self.__dict__)
