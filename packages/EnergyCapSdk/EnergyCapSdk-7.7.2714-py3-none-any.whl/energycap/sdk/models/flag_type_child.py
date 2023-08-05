# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class FlagTypeChild(Model):
    """FlagTypeChild.

    :param flag_type_id: The flag type identifier
    :type flag_type_id: int
    :param flag_type_info: Flag type information
    :type flag_type_info: str
    """

    _attribute_map = {
        'flag_type_id': {'key': 'flagTypeId', 'type': 'int'},
        'flag_type_info': {'key': 'flagTypeInfo', 'type': 'str'},
    }

    def __init__(self, flag_type_id=None, flag_type_info=None):
        super(FlagTypeChild, self).__init__()
        self.flag_type_id = flag_type_id
        self.flag_type_info = flag_type_info
