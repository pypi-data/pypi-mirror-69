from AoE2ScenarioParser.pieces import aoe2_piece
from AoE2ScenarioParser.helper.retriever import Retriever
from AoE2ScenarioParser.helper.datatype import DataType


class BackgroundImagePiece(aoe2_piece.AoE2Piece):
    def __init__(self, parser_obj=None, data=None):
        retrievers = [
            Retriever("ASCII, Background filename", DataType("str16")),
            Retriever("Picture Version", DataType("u32")),
            Retriever("Bitmap width", DataType("u32")),
            Retriever("Bitmap height", DataType("s32")),
            Retriever("Picture Orientation", DataType("s16")),
            # Retriever("	BITMAPINFOHEADER", DataType("u32")),
        ]

        super().__init__("Background Image", retrievers, parser_obj, data=data)
