Tags and sets of tags
with __format__ support and optional ontology information.

*Latest release 20200521*:
* New ValueDetail and KeyValueDetail classes for returning ontology information; TagInfo.detail now returns a ValueDetail for scalar types, a list of ValueDetails for sequence types and a list of KeyValueDetails for mapping types; drop various TagInfo mapping/iterable style methods, too confusing to use.
* Plumb ontology parameter throughout, always optional.
* Drop TypedTag, Tags now use ontologies for this.
* New TagsCommandMixin to support BaseCommands which manipulate Tags.
* Many improvements and bugfixes.

See `cs.fstags` for support for applying these to filesystem objects
such as directories and files.

See `cs.sqltags` for support for databases of entities with tags,
not directly associated with filesystem objects.
This is suited to both log entries (entities with no "name")
and large collections of named entities;
both accept `Tag`s and can be seached on that basis.

All of the available complexity is optional:
you can use `Tag`s without bothering with `TagSet`s
or `TagsOntology`s.

This module contains the following main classes:
* `Tag`: an object with a `.name` and optional `.value` (default `None`)
  and also an optional reference `.ontology`
  for associating semantics with tag values.
  The `.value` (if not `None`) will often be a string,
  but may be any Python object.
  If you're using these via `cs.fstags`,
  the object will need to be JSON transcribeable.
* `TagSet`: a `dict` subclass representing a set of `Tag`s
  to associate with something;
  it also has setlike `.add` and `.discard` methods.
  As such it only supports a single `Tag` for a given tag name,
  but that tag value can of course be a sequence or mapping
  for more elaborate tag values.
* `TagsOntology`:
  a mapping of type names to `TagSet`s defining the type.
  This mapping also contains entries for the metadata
  for specific type values.

Here's a simple example with some `Tag`s and a `TagSet`.

    >>> tags = TagSet()
    >>> # add a "bare" Tag named 'blue' with no value
    >>> tags.add('blue')
    >>> # add a "topic=tagging" Tag
    >>> tags.add('topic','tagging')
    >>> # make a "subtopic" Tag and add it
    >>> subtopic = Tag('subtopic', 'ontologies')
    >>> # Tags have nice repr() and str()
    >>> subtopic
    Tag(name='subtopic',value='ontologies',ontology=None)
    >>> print(subtopic)
    subtopic=ontologies
    >>> # you can add a Tag directly
    >>> tags.add(subtopic)
    >>> # TagSets also have nice repr() and str()
    >>> tags
    TagSet:{'blue': None, 'topic': 'tagging', 'subtopic': 'ontologies'}
    >>> print(tags)
    blue subtopic=ontologies topic=tagging
    >>> # because TagSets are dicts you can format strings with them
    >>> print('topic:{topic} subtopic:{subtopic}'.format_map(tags))
    topic:tagging subtopic:ontologies
    >>> # TagSets have convenient membership tests
    >>> # test for blueness
    >>> 'blue' in tags
    True
    >>> # test for redness
    >>> 'red' in tags
    False
    >>> # test for any "subtopic" tag
    >>> 'subtopic' in tags
    True
    >>> # test for subtopic=ontologies
    >>> subtopic in tags
    True
    >>> subtopic2 = Tag('subtopic', 'libraries')
    >>> # test for subtopic=libraries
    >>> subtopic2 in tags
    False

## Class `ExtendedNamespace(types.SimpleNamespace)`

Subclass `SimpleNamespace` with inferred attributes
intended primarily for use in format strings.
As such it also presents attributes as `[]` elements via `__getitem__`.

Because [:alpha:]* attribute names
are reserved for "public" keys/attributes,
most methods commence with an underscore (`'_'`).

## Class `KeyValueMetadata(KeyValueMetadata,builtins.tuple)`

Metadata information about a `(key,value)` pair.
* `ontology`: the reference ontology
* `key_metadata`: the metadata for the `key`,
  the `TagSet` from `ontology[key_metadata.ontkey]`
* `value`: the value
* `value_metadata`: the metadata for the `value`,
  the `TagSet` from `ontology[value_metadata.ontkey]`

## Class `Tag(Tag,builtins.tuple)`

A Tag has a `.name` (`str`) and a `.value`
and an optional `.ontology`.

The `name` must be a dotted identifier.

Terminology:
* A "bare" `Tag` has a `value` of `None`.
* A "naive" `Tag` has an `ontology` of `None`.

The constructor for a `Tag` is unusual:
* both the `value` and `ontology` are optional,
  defaulting to `None`
* if `name` is a `str` then we always construct a new `Tag`
  with the suppplied values
* if `name` is not a `str`
  it should be a `Tag`like object to promote;
  it is an error if the `value` parameter is not `None`
  in this case

The promotion process is as follows:
* if `name` is a `Tag` subinstance
  then if the supplied `ontology` is not `None`
  and is not the ontology associated with `name`
  then a new `Tag` is made,
  otherwise `name` is returned unchanged
* otherwise a new `Tag` is made from `name`
  using its `.value`
  and overriding its `.ontology`
  if the `ontology` parameter is not `None`

## Class `TagChoice(TagChoice,builtins.tuple)`

A "tag choice", an apply/reject flag and a `Tag`,
used to apply changes to a `TagSet`
or as a criterion for a tag search.

Attributes:
* `spec`: the source text from which this choice was parsed,
  possibly `None`
* `choice`: the apply/reject flag
* `tag`: the `Tag` representing the criterion

## Class `TagsCommandMixin`

Utility methods for `cs.cmdutils.BaseCommand` classes working with tags.

## Class `TagSet(builtins.dict,cs.lex.FormatableMixin)`

A setlike class associating a set of tag names with values.

This actually subclasses `dict`, so a `TagSet` is a direct
mapping of tag names to values.

*NOTE*: iteration yields `Tag`s, not dict keys.

Also note that all the `Tags` from `TagSet`
share its ontology.

### Method `TagSet.__init__(self, *a, **kw)`

Initialise the `TagSet`.

## Class `TagSetNamespace(ExtendedNamespace,types.SimpleNamespace)`

A formattable nested namespace for a `TagSet`,
subclassing `ExtendedNamespace`.

Where the node paths of this namespace tree match
the name of a `Tag` from the `TagSet`
that node has the following direct attributes:

## Class `TagsOntology(cs.obj.SingletonMixin)`

An ontology for tag names.

This is based around a mapping of tag names
to ontological information expressed as a `TagSet`.

A `cs.fstags.FSTags` uses ontologies initialised from `TagFile`s
containing ontology mappings.

## Class `ValueMetadata(ValueMetadata,builtins.tuple)`

Metadata information about a value.
* `ontology`: the reference ontology
* `ontkey`: the key within the ontology providing the metadata
* `value`: the value

## Class `ValueMetadataNamespace(TagSetNamespace,ExtendedNamespace,types.SimpleNamespace)`

A subclass of `TagSetNamespace` for a `Tag`'s metadata.

The reference `TagSet` is the defining `TagSet`
for the metadata of a particular `Tag` value
as defined by a `ValueMetadata`
(the return value of `Tag.metadata`).

# Release Log



*Release 20200521*:
* New ValueDetail and KeyValueDetail classes for returning ontology information; TagInfo.detail now returns a ValueDetail for scalar types, a list of ValueDetails for sequence types and a list of KeyValueDetails for mapping types; drop various TagInfo mapping/iterable style methods, too confusing to use.
* Plumb ontology parameter throughout, always optional.
* Drop TypedTag, Tags now use ontologies for this.
* New TagsCommandMixin to support BaseCommands which manipulate Tags.
* Many improvements and bugfixes.

*Release 20200318*:
* *Note that the TagsOntology stuff is in flux and totally alpha.*
* Tag.prefix_name factory returning a new tag if prefix is not empty, ptherwise self.
* TagSet.update: accept an optional prefix for inserting "foreign" tags with a distinguishing name prefix.
* Tag.as_json: turn sets and tuples into lists for encoding.
* Backport for Python < 3.7 (no fromisoformat functions).
* TagSet: drop unused and illplaced .titleify, .episode_title and .title methods.
* TagSet: remove "defaults", unused.
* Make TagSet a direct subclass of dict, adjust uses of .update etc.
* New ExtendedNamespace class which is a SimpleNamespace with some inferred attributes and a partial mapping API (keys and __getitem__).
* New TagSet.ns() returning the Tags as an ExtendedNamespace, which doubles as a mapping for str.format_map; TagSet.format_kwargs is now an alias for this.
* New Tag.from_string factory to parse a str into a Tag.
* New TagsOntology and TypedTag classes to provide type and value-detail information; very very alpha and subject to change.

*Release 20200229.1*:
Initial release: pull TagSet, Tag, TagChoice from cs.fstags for independent use.
