# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class TemplateChild(Model):
    """TemplateChild.

    :param template_id:
    :type template_id: int
    :param template_code:
    :type template_code: str
    :param template_info:
    :type template_info: str
    """

    _attribute_map = {
        'template_id': {'key': 'templateId', 'type': 'int'},
        'template_code': {'key': 'templateCode', 'type': 'str'},
        'template_info': {'key': 'templateInfo', 'type': 'str'},
    }

    def __init__(self, template_id=None, template_code=None, template_info=None):
        super(TemplateChild, self).__init__()
        self.template_id = template_id
        self.template_code = template_code
        self.template_info = template_info
