# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SearchPlaceChildSearchPlaceChild(Model):
    """SearchPlaceChildSearchPlaceChild.

    :param place_id: The place identifier
    :type place_id: int
    :param place_code: The place code <span
     class='property-internal'>Required</span> <span
     class='property-internal'>Must be between 0 and 32 characters</span>
    :type place_code: str
    :param place_info: The place info <span
     class='property-internal'>Required</span> <span
     class='property-internal'>Must be between 0 and 50 characters</span>
    :type place_info: str
    :param place_type:
    :type place_type: ~energycap.sdk.models.PlaceTypeResponse
    :param address:
    :type address: ~energycap.sdk.models.AddressChild
    :param parent_path: The collection of places representing the path to its
     parent
    :type parent_path: list[~energycap.sdk.models.SearchParentPlaceChild]
    """

    _validation = {
        'place_code': {'required': True, 'max_length': 32, 'min_length': 0},
        'place_info': {'required': True, 'max_length': 50, 'min_length': 0},
    }

    _attribute_map = {
        'place_id': {'key': 'placeId', 'type': 'int'},
        'place_code': {'key': 'placeCode', 'type': 'str'},
        'place_info': {'key': 'placeInfo', 'type': 'str'},
        'place_type': {'key': 'placeType', 'type': 'PlaceTypeResponse'},
        'address': {'key': 'address', 'type': 'AddressChild'},
        'parent_path': {'key': 'parentPath', 'type': '[SearchParentPlaceChild]'},
    }

    def __init__(self, place_code, place_info, place_id=None, place_type=None, address=None, parent_path=None):
        super(SearchPlaceChildSearchPlaceChild, self).__init__()
        self.place_id = place_id
        self.place_code = place_code
        self.place_info = place_info
        self.place_type = place_type
        self.address = address
        self.parent_path = parent_path
