# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class BillActionExportHold(Model):
    """BillActionExportHold.

    :param ids:  <span class='property-internal'>Cannot be Empty</span> <span
     class='property-internal'>Required (defined)</span>
    :type ids: list[int]
    :param export_hold:  <span class='property-internal'>Required
     (defined)</span>
    :type export_hold: bool
    """

    _attribute_map = {
        'ids': {'key': 'ids', 'type': '[int]'},
        'export_hold': {'key': 'exportHold', 'type': 'bool'},
    }

    def __init__(self, ids=None, export_hold=None):
        super(BillActionExportHold, self).__init__()
        self.ids = ids
        self.export_hold = export_hold
