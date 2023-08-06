import pandas as pd

from .pandasdocument import PandasDocument
from mongoengine import *


class Group(PandasDocument):
    pass


class Symbol(PandasDocument):
    group = ReferenceField(Group, required=True)
    internal = StringField(max_length=200, required=False)
    webpage = URLField(max_length=200, nullable=True)

    @staticmethod
    def symbolmap(symbols=None):
        symbols = symbols or Symbol.objects
        return {asset.name: asset.group.name for asset in symbols}

    @classmethod
    def reference_frame(cls, products=None) -> pd.DataFrame:
        products = products or Symbol.objects
        frame = super().reference_frame(products)
        frame["Sector"] = pd.Series({symbol.name: symbol.group.name for symbol in products})
        frame["Internal"] = pd.Series({symbol.name: symbol.internal for symbol in products})
        return frame
