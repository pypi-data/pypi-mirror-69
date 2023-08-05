# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class BillEntryBodyLineChild(Model):
    """BillEntryBodyLineChild.

    :param value: The body line's numeric value
    :type value: float
    :param type: The body line's observation type
    :type type: str
    :param unit:
    :type unit: ~energycap.sdk.models.UnitChild
    """

    _attribute_map = {
        'value': {'key': 'value', 'type': 'float'},
        'type': {'key': 'type', 'type': 'str'},
        'unit': {'key': 'unit', 'type': 'UnitChild'},
    }

    def __init__(self, value=None, type=None, unit=None):
        super(BillEntryBodyLineChild, self).__init__()
        self.value = value
        self.type = type
        self.unit = unit
