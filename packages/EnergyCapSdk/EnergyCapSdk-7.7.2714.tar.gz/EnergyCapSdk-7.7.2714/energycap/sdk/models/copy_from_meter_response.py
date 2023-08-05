# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class CopyFromMeterResponse(Model):
    """Defines an account and meter whose use or cost will be copied when
    calculating a bill.

    :param meter:
    :type meter: ~energycap.sdk.models.MeterChild
    :param percentage: Percentage of use or cost to copy
    :type percentage: float
    """

    _attribute_map = {
        'meter': {'key': 'meter', 'type': 'MeterChild'},
        'percentage': {'key': 'percentage', 'type': 'float'},
    }

    def __init__(self, meter=None, percentage=None):
        super(CopyFromMeterResponse, self).__init__()
        self.meter = meter
        self.percentage = percentage
