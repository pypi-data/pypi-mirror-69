from AoE2ScenarioParser.pieces import aoe2_piece
from AoE2ScenarioParser.helper.retriever import Retriever
from AoE2ScenarioParser.helper.datatype import DataType


class OptionsPiece(aoe2_piece.AoE2Piece):
    def __init__(self, parser_obj=None, data=None):
        retrievers = [
            Retriever("Per player number of disabled techs", DataType("u32", repeat=16), save_as="disabled_techs"),
            Retriever("Disabled technology IDs in player order", DataType("u32"), set_repeat="sum({disabled_techs})"),
            # Retriever("Per player extra number of disabled techs", DataType("u32", repeat=16)),  # Removed in DE?
            Retriever("Per player number of disabled units", DataType("u32", repeat=16), save_as="disabled_units"),
            Retriever("Disabled unit IDs in player order", DataType("u32"), set_repeat="sum({disabled_units})"),
            # Retriever("Per player extra number of disabled units", DataType("u32", repeat=16)),  # Removed in DE?
            Retriever("Per player number of disabled buildings",
                      DataType("u32", repeat=16), save_as="disabled_buildings"),
            Retriever("Disabled building IDs in player order",
                      DataType("u32"), set_repeat="sum({disabled_buildings})"),
            Retriever("Combat Mode", DataType("u32")),
            Retriever("Naval Mode", DataType("u32")),
            Retriever("All techs", DataType("u32")),
            Retriever("Per player starting age", DataType("u32", repeat=16)),  # 2: Dark 6 = Post | 1-8 players 9 GAIA
            Retriever("Unknown", DataType("36")),
        ]

        super().__init__("Options", retrievers, parser_obj, data=data)
