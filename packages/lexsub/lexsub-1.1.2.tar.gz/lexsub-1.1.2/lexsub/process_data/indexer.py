"""
Defines an Indexer Object with different methods to index data, look up, add, remove etc
Extremely useful across all NLP tasks
Heavily based off 'Greg Durrett' NLP Class Code Distribution:
https://www.cs.utexas.edu/~gdurrett/courses/fa2019/cs388.shtml
"""


class Indexer(object):
    """
    Bijection between objects and integers starting at 0. Useful for mapping
    labels, features, etc. into coordinates of a vector space.
    Attributes:
        objs_to_ints
        ints_to_objs
    """

    def __init__(self):
        self.objs_to_ints = {}
        self.ints_to_objs = {}

    def __repr__(self):
        return str([str(self.get_object(i)) for i in range(0, len(self))])

    def __str__(self):
        return self.__repr__()

    def __len__(self):
        return len(self.objs_to_ints)

    def get_object(self, index):
        """
        :param index: integer index to look up
        :return: Returns the object corresponding to the particular index or None if not found
        """
        if index not in self.ints_to_objs:
            return None
        else:
            return self.ints_to_objs[index]

    def contains(self, obj):
        """
        :param obj: object to look up
        :return: Returns True if it is in the Indexer, False otherwise
        """
        return self.index_of(obj) != -1

    def index_of(self, obj):
        """
        :param obj: object to look up
        :return: Returns -1 if the object isn't present, index otherwise
        """
        if obj not in self.objs_to_ints:
            return -1
        else:
            return self.objs_to_ints[obj]

    def add_and_get_index(self, obj, add=True):
        """
        Adds the object to the index if it isn't present, always returns a nonnegative index
        :param obj: object to look up or add
        :param add: True by default, False if we shouldn't add the object. If False, equivalent to index_of.
        :return: The index of the object
        """
        if not add:
            return self.index_of(obj)

        if obj not in self.objs_to_ints:
            new_idx = len(self.objs_to_ints)
            self.objs_to_ints[obj] = new_idx
            self.ints_to_objs[new_idx] = obj

        return self.objs_to_ints[obj]