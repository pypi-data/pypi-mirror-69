from psycopg2.sql import Composed, Literal, SQL

from estnltk.storage import postgres as pg


class WhereClause(Composed):
    def __init__(self,
                 collection,
                 query=None,
                 layer_query: dict = None,
                 layer_ngram_query: dict = None,
                 keys: list = None,
                 missing_layer: str = None,
                 seq=None,
                 required_layers=None):
        self.collection = collection

        if seq is None:
            seq = self.where_clause(collection,
                                    query=query,
                                    layer_query=layer_query,
                                    layer_ngram_query=layer_ngram_query,
                                    keys=keys,
                                    missing_layer=missing_layer)

        super().__init__(seq)

        # We omit layers inside a Text object.
        if required_layers is None:
            self._required_layers = sorted(set(layer_query or()) | set(layer_ngram_query or ()))
        else:
            self._required_layers = required_layers

    def __bool__(self):
        return bool(self.seq)

    @property
    def required_layers(self):
        return self._required_layers

    def __and__(self, other):
        if not isinstance(other, WhereClause):
            raise TypeError('unsupported operand type for &: {!r}'.format(type(other)))
        if self.collection is not other.collection:
            raise ValueError("can't combine WhereClauses with different collections: {!r} and {!r}".format(
                             self.collection.name, other.collection.name))

        if not other:
            return self
        if not self:
            return other

        seq = SQL(" AND ").join((self, other))
        required_layers = sorted(set(self.required_layers) | set(other.required_layers))
        return WhereClause(collection=self.collection, seq=seq, required_layers=required_layers)

    @staticmethod
    def where_clause(collection,
                     query=None,
                     layer_query: dict = None,
                     layer_ngram_query: dict = None,
                     keys: list = None,
                     missing_layer: str = None):
        sql_parts = []
        collection_name = collection.name
        storage = collection.storage

        if query is not None:
            # build constraint on the main text table
            sql_parts.append(query.eval(storage, collection_name))
        if layer_query:
            # build constraint on related layer tables
            q = SQL(" AND ").join(query.eval(storage, collection_name) for layer, query in layer_query.items())
            sql_parts.append(q)
        if keys is not None:
            # build constraint on id-s
            sql_parts.append(SQL('{table}."id" = ANY({keys})').format(
                    table=pg.collection_table_identifier(storage, collection_name),
                    keys=Literal(list(keys))))
        if layer_ngram_query:
            # build constraint on related layer's ngram index
            sql_parts.append(pg.build_layer_ngram_query(storage, collection_name, layer_ngram_query))
        if missing_layer:
            # select collection objects for which there is no entry in the layer table
            q = SQL('"id" NOT IN (SELECT "text_id" FROM {})'
                    ).format(pg.layer_table_identifier(storage, collection_name, missing_layer))
            sql_parts.append(q)

        if sql_parts:
            return SQL(" AND ").join(sql_parts)
        return []
