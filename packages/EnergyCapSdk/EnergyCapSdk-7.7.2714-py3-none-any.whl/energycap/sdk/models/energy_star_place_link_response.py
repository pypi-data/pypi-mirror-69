# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class EnergyStarPlaceLinkResponse(Model):
    """EnergyStarPlaceLinkResponse.

    :param place:
    :type place: ~energycap.sdk.models.PlaceChild
    :param pm_property_id: The Portfolio Manager property identifier
    :type pm_property_id: long
    :param meters: List of meters for this place
    :type meters: list[~energycap.sdk.models.EnergyStarMeterLinkChild]
    """

    _attribute_map = {
        'place': {'key': 'place', 'type': 'PlaceChild'},
        'pm_property_id': {'key': 'pmPropertyId', 'type': 'long'},
        'meters': {'key': 'meters', 'type': '[EnergyStarMeterLinkChild]'},
    }

    def __init__(self, place=None, pm_property_id=None, meters=None):
        super(EnergyStarPlaceLinkResponse, self).__init__()
        self.place = place
        self.pm_property_id = pm_property_id
        self.meters = meters
