from AoE2ScenarioParser.helper.datatype import DataType
from AoE2ScenarioParser.helper.retriever import Retriever
from AoE2ScenarioParser.pieces.structs.aoe2_struct import AoE2Struct


class PlayerDataThreeStruct(AoE2Struct):
    def __init__(self, parser_obj=None, data=None):
        retrievers = [
            Retriever("Constant name", DataType("str16")),
            Retriever("Initial Camera, X", DataType("f32")),
            Retriever("Initial Camera, Y", DataType("f32")),
            Retriever("Unknown, similar to camera X", DataType("s16")),
            Retriever("Unknown, similar to camera Y", DataType("s16")),
            Retriever("[AOK] Allied Victory", DataType("u8")),
            Retriever("Player count for diplomacy", DataType("u16"), save_as="diplo_player_count"),
            Retriever("Diplomacy for interaction", DataType("u8"), set_repeat="{diplo_player_count}"),
            Retriever("Diplomacy for AI system", DataType("u32", repeat=9)),
            Retriever("Color", DataType("u32")),
            Retriever("Victory Version", DataType("f32"), save_as="vic_version"),
            Retriever("Unknown", DataType("u16"), save_as="unknown_DAT"),
            Retriever("Unknown (2)", DataType("u8"), set_repeat="8 if {vic_version} == 2 else 0"),
            Retriever("Unknown structure, (Grand Theft Empires)", DataType("44"), set_repeat="{unknown_DAT}"),
            Retriever("Unknown (3)", DataType("u8", repeat=7)),
            Retriever("Unknown (4)", DataType("s32")),
        ]

        super().__init__("Player Data #3", retrievers, parser_obj, data)
