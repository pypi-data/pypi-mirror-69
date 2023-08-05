from .constants import *
from .identified import Identified
from .location import OwnedLocation
from .property import OwnedObject, URIProperty


class SequenceAnnotation(Identified):

    def __init__(self, uri='example', version=VERSION_STRING):
        """Construct a SequenceAnnotation
        :param uri: A full URI including a scheme, namespace, and identifier.
        If SBOLCompliance configuration is enabled, then this argument
        is simply the displayId for the new object and a full URI
        will automatically be constructed.
        :param version: An arbitrary version string.
        If SBOLCompliance is enabled, this should be a Maven version string
        of the form "major.minor.patch".
        """
        super().__init__(SBOL_SEQUENCE_ANNOTATION, uri, version)
        self.component = None  # TODO support ReferencedObject
        self.locations = OwnedLocation(self, SBOL_LOCATIONS,
                                       '0', '*', [])
        self._roles = URIProperty(self, SBOL_ROLES, '0', '*', [])

    @property
    def roles(self):
        return self._roles.value

    @roles.setter
    def roles(self, new_roles):
        self._roles.set(new_roles)

    def addRole(self, new_role):
        self._roles.add(new_role)

    def removeRole(self, index=0):
        self._roles.remove(index)

    def precedes(self, comparand):
        """Tests if the comparand SequenceAnnotation precedes this one
        according to base coordinates

        :param comparand: Another SequenceAnnotation
        :return: true or false
        """
        raise NotImplementedError("Not yet implemented")

    def follows(self, comparand):
        """Tests if the comparand SequenceAnnotation follows this one
        according to base coordinates

        :param comparand: Another SequenceAnnotation
        :return: true or false
        """
        raise NotImplementedError("Not yet implemented")

    def contains(self, comparand):
        """Tests if the comparand SequenceAnnotation is contained within
        the same start and end base coordinates as this one.
        This is mutually exclusive with overlaps.

        :param comparand: Another SequenceAnnotation
        :return: true or false
        """
        raise NotImplementedError("Not yet implemented")

    def overlaps(self, comparand):
        """Tests if the comparand SequenceAnnotation overlaps with this one
        in the primary sequence

        :param comparand: Another SequenceAnnotation
        :return: true or false
        """
        raise NotImplementedError("Not yet implemented")

    def extract(self, start_reference=1):
        """Convert a SequenceAnnotation to a subcomponent

        :param start_reference:
        :return: A ComponentDefinition representing the subcomponent
        """
        raise NotImplementedError("Not yet implemented")

    def length(self):
        """

        :return: The length of a SequenceAnnotation in base coordinates.
        """
        raise NotImplementedError("Not yet implemented")
