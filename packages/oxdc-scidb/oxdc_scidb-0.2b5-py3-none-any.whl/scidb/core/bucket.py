from .low.node import Node
from .data_set import DataSet
from .low.metadata import Metadata, Properties
from uuid import UUID
from typing import Set, Union


class Bucket(Node):
    def __init__(self,
                 bucket_name: str,
                 parent,
                 uuid: Union[None, str, UUID] = None,
                 deleted: Union[None, bool] = None,
                 metadata: Union[None, Metadata] = None,
                 properties: Union[None, Properties] = None,
                 protected_parent_methods: Union[None, dict] = None):
        self.__data_sets__ = set()
        super().__init__(
            node_name=bucket_name,
            node_type='Bucket',
            parent=parent,
            uuid=uuid,
            deleted=deleted,
            metadata=metadata,
            properties=properties,
            protected_parent_methods=protected_parent_methods
        )
        self.__protected_parent_methods__['increase_bucket_count']()
        self.init_data_sets()

    @property
    def database(self):
        return self.parent

    @property
    def db(self):
        return self.parent

    def init_data_sets(self):
        children = filter(lambda child: child.is_dir(), self.path.iterdir())
        for data_set in children:
            self.__data_sets__.add(DataSet(data_set.name, parent=self, bucket=self,
                                           protected_parent_methods=self.__protected_parent_methods__))

    def add_data_set(self, name: str) -> DataSet:
        if self.get_data_set(name, include_deleted=True) is not None:
            raise FileExistsError
        new_data_set = DataSet(data_set_name=name, parent=self,
                               bucket=self, protected_parent_methods=self.__protected_parent_methods__)
        self.__data_sets__.add(new_data_set)
        return new_data_set

    def insert_data_set(self, data_set: DataSet) -> DataSet:
        if data_set in self.__data_sets__ \
                or self.get_data_set(data_set.name, include_deleted=True) is not None \
                or self.get_data_set(data_set.uuid, include_deleted=True) is not None:
            raise FileExistsError
        if data_set.parent is not self:
            raise AssertionError
        self.__data_sets__.add(data_set)
        return data_set

    def get_data_set(self, name_or_uuid: str, include_deleted: bool = False) -> DataSet:
        target = None
        search_list = self.all_data_sets if include_deleted else self.data_sets
        for data_set in search_list:
            if data_set.name == name_or_uuid or data_set.uuid == name_or_uuid:
                target = data_set
        return target

    def touch_data_set(self, name: str) -> DataSet:
        target = self.get_data_set(name, include_deleted=True)
        if target is None:
            target = self.add_data_set(name)
        if target.deleted:
            raise AssertionError
        return target

    @property
    def data_sets(self) -> Set[DataSet]:
        return set(filter(lambda data_set: not data_set.deleted, self.__data_sets__))

    @property
    def trash(self) -> Set[DataSet]:
        return set(filter(lambda data_set: data_set.deleted, self.__data_sets__))

    @property
    def all_data_sets(self) -> Set[DataSet]:
        return self.__data_sets__

    def clear_trash(self, confirm: bool = True, feedback: bool = False):
        if confirm and not feedback:
            return
        for data_set in self.trash:
            data_set.purge_storage(confirm, feedback)
        for data_set in self.data_sets:
            data_set.clear_trash(confirm, feedback)
        self.__data_sets__ = set(self.data_sets)
