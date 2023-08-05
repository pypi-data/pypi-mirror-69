import os
import re
from collections import Counter
from collections.abc import MutableMapping
from operator import itemgetter
from io import StringIO
import numpy as np

_EMPTY = 0
_MULTIWORD = 1

FIELDS = ('id', 'form', 'lemma', 'upos', 'xpos', 'feats', 'head', 'deprel', 'deps', 'misc')
ID, FORM, LEMMA, UPOS, XPOS, FEATS, HEAD, DEPREL, DEPS, MISC = FIELDS
_FIELD_SET = set(FIELDS)

def empty_id(word_id, index=1):
    """Return new ID value for empty token indexed by `word_id` starting from 0 and `index` starting from 1.

    The empty token ID is encoded as a tuple with id[0] = `word_id` and id[1] = `index`. For more information about the
    ordering of the empty tokens in the sentence, see `Sentence` class.

    Raises:
        ValueError: If `word_id` < 0 or `index` < 1.
    """
    if word_id < 0 or index < 1:
        raise ValueError('word_id must be >= 0 and index >= 1')
    return (word_id, index, _EMPTY)

def multiword_id(start, end):
    """Return new ID value for multiword token spanning in the sentence across the words with ID from `start` to `end`
    (inclusive).

    The multiword token ID is encoded as a tuple with id[0] = `start` and id[1] = `end`. For more information about the
    ordering of the multiword tokens in the sentence, see `Sentence` class.

    Raises:
        ValueError: If `start` < 1 or `end` <= `start`.
    """
    if start < 1 or end <= start:
        raise ValueError('start must be >= 1 and end > start')
    return (start, end, _MULTIWORD)

class Token(dict):
    """A dictionary type representing a token in the sentence.

    A token can represent a regular *syntactic word*, or can be a *multiword token* spanning across multiple words
    (e.g. like in Spanish *vámonos* = *vamos nos*), or can be an *empty token* (inserted in the extended dependency
    tree, e.g. for the analysis of ellipsis). Type of the token can be tested using the read-only `is_multiword` and
    `is_empty` properties.

    A token can contain mappings for the following standard CoNLL-U fields:

    * ID: word index (integer starting from 1); or range of the indexes for multiword tokens; or decimal notation
      for empty tokens.
    * FORM: word form or punctuation symbol.
    * LEMMA: lemma or stem of word form.
    * UPOS: Universal part-of-speech tag.
    * XPOS: language-specific part-of-speech tag.
    * FEATS: list of morphological features from the Universal feature inventory or language-specific extension.
    * HEAD: head of the current word in the dependency tree representation (ID or 0 for root).
    * DEPREL: Universal dependency relation to the HEAD.
    * DEPS: enhanced dependency graph in the form of head-deprel pairs.
    * MISC: any other annotation associated with the token. 

    The ID values are parsed as the integers for regular words or tuples for multiword and empty tokens (see
    `multiword_id` and `empty_id` functions for more information).

    The HEAD values are parsed as the integers.

    The FORM, LEMMA, POS, XPOS, DEPREL and MISC values are strings.

    The FEATS are strings or parsed as the dictionaries with attribute-value mappings and multiple values stored in the
    sets.

    The DEPS values are strings or parsed as the set of head-deprel tuples.

    """
    def __init__(self, fields=(), **kwargs):
        """Create an empty token or token with the fields initialized from the provided mapping object or keyword
        arguments."""
        super().__init__(fields, **kwargs)

    @property
    def is_empty(self):
        """bool: True if the token is an empty token, otherwise False."""
        id = self.get(ID)
        return id[2] == _EMPTY if isinstance(id, tuple) else False

    @property
    def is_multiword(self):
        """bool: True if the token is a multiword token, otherwise False."""
        id = self.get(ID)
        return id[2] == _MULTIWORD if isinstance(id, tuple) else False

    def to_collu(self):
        """Return a string representation of the token in the CoNLL-U format."""
        return _token_to_str(self)

    def __getattr__(self, name):
        if name in _FIELD_SET:
            return self[name]
        else:
            raise AttributeError(f'token has no attribute {name}')

    def __setattr__(self, name, value):
        if name in _FIELD_SET:
            self[name] = value
        else:
            super().__setattr__(name, value)

    def __delattr__(self, name):
        if name in _FIELD_SET:
            del self[name]
        else:
            super().__delattr__(name)

    def _space_after(self):
        return False if MISC in self and 'SpaceAfter=No' in self[MISC] else True

    def _text(self, default_form='_', space_after=False):
        form = self.get(FORM, default_form)
        return form + ' ' if space_after and self._space_after() else form

    def __str__(self):
        return self._text()

    def __repr__(self):
        return f'<{_id_to_str(self.get(ID))},{self.get(FORM)},{self.get(UPOS)}>'

    def copy(self):
        """Return a shallow copy of the token."""
        return Token(self)

class Sentence(list):
    """A list type representing the sentence, i.e. the sequence of tokens.

    For valid CoNLL-U sentences, tokens have to be ordered according to their IDs. The syntactic words form the sequence
    with ID=1, 2, 3, etc. Multiword tokens with the range ID 'start-end' are inserted before the first word in the range
    (i.e. before the word with ID=start). The ranges of all multiword tokens must be non-empty and non-overlapping.
    Empty tokens with the decimal IDs 'token_id.index' are inserted in the index order at the beginning of the sentence
    (if token_id=0), or immediately after the word with ID=token_id.

    Note that the Sentence methods are not checking the order of the tokens, and it is up to the programmer to preserve
    the correct ordering.

    The Sentence class provides `Sentence.words` method to extract only the sequence of syntactic words without the
    empty or multiword tokens, and `Sentence.raw_tokens` method to extract the sequence of raw tokens (i.e. how the
    sentence is written orthographically with the multiword tokens).

    For example, for the Spanish sentence:
    ```plaintext
    1-2     vámonos
    1       vamos
    2       nos
    3-4     al
    3       a
    4       el
    5       mar
    ```
    the `words` method returns the sequence of expanded syntactic words 'vamos', 'nos', 'a', 'el', 'mar', and the
    `raw_tokens` returns sequence for raw text 'vámonos', 'al', 'mar'.
    
    For the sentence with empty tokens:
    ```plaintext
    1      Sue
    2      likes
    3      coffee
    4      and
    5      Bill
    5.1    likes
    6      tea
    ```
    both `words` and `raw_tokens` methods return the sequence without the empty tokens 'Sue', 'likes', 'coffee', 'and',
    'Bill', 'tea'.

    Attributes:
        metadata (any): Any optional data associated with the sentence. By default for the CoNLL-U format, `metadata`
            are parsed from the comment lines as the dictionary of key = value pairs. If the comment string has no
            key-value format separated with `=`, it is stored as a key with None value. 

    """
    def __init__(self, tokens=(), metadata=None):
        """Create an empty sentence or initialize a new sentence with the `tokens` from the provided sequence and
        optional `metadata`.
        """
        super().__init__(tokens)
        self.metadata = metadata

    def text(self, default_form='_'):
        """Return text of the sentence reconstructed from the raw tokens.

        The insertion of spaces is controlled by ``SpaceAfter=No`` feature in the MISC field. Unspecified forms are
        replaced with the value of `default_form` argument, which defaults to underscore '_'.

        Note that space is also appended after the last word unless the last token has specified ``SpaceAfter=No``.
        """
        return ''.join([token._text(default_form, True) for token in self.raw_tokens()])

    def is_projective(self, return_arcs=False):
        """Return True if this sentence can be represented as the projective dependency tree, otherwise False.

        See `DependencyTree.is_projective` method for more information.
        """
        return _is_projective([token.get(HEAD) for token in self.words()], return_arcs)

    def get(self, id, default=None):
        """Return token with the specified ID.
        
        The `id` argument can be an integer from 1, tuple generated by `empty_id` or `multiword_id` functions, or
        string in CoNLL-U notation (e.g. "1" for words, "2-3" for multiword tokens, or "0.1" for empty tokens). Note
        that the implementation assumes the proper ordering of the tokens according to their IDs.

        If a token with the `id` cannot be found, the method returns provided `default` value or None if `default`
        is not given.
        """
        if isinstance(id, str):
            id = _parse_id(id)
        start = id[0] if isinstance(id, tuple) else id
        if start > 0:
            start -= 1
        for token in self[start:]:
            if token[ID] == id:
                return token
        return default

    def tokens(self):
        """Return an iterator over all tokens in the sentence (alias to ``iter(self)``)."""
        return iter(self)

    def raw_tokens(self):
        """Return an iterator over all raw tokens representing the written text of the sentence.

        The raw tokens are all multiword tokens and all words outside of the multiword ranges (excluding the empty
        tokens). Note that the implementation assumes the proper ordering of the tokens according to their IDs.
        """
        index = 1
        prev_end = 0
        for token in self:
            if token.is_empty:
                continue
            if token.is_multiword:
                prev_end = token[ID][1]
                yield token
            else:
                if index > prev_end:
                    yield token
                index += 1

    def words(self):
        """Return an iterator over all syntactic words (i.e. without multiword and empty tokens)."""
        for token in self:
            if not (token.is_empty or token.is_multiword):
                yield token

    def to_tree(self):
        """Return a dependency tree representation of the sentence.
 
        See `DependencyTree` class for more information. Note that the implementation assumes the proper ordering of
        the tokens according to their IDs.

        Raises:
            ValueError: If the sentence contains the words without the HEAD field, or when the sentence does not have
                exactly one root with HEAD = 0.
        """
        return DependencyTree(self)

    def to_instance(self, index, fields=None, dtype=np.int64):
        """Return an instance representation of the sentence with the values indexed by the `index`.

        Optional `fields` argument specifies a subset of the fields added into the instance. By default, HEAD field and
        all fields from the `index` are included.

        The numerical type of the instance data can be specified in `dtype` argument. The default type is ``np.int64``.
        See `Instance` class for more information.

        Raises:
            KeyError: If some of the `fields` are not indexed in the `index`.
        """
        return _map_to_instance(self, index, fields)

    def to_conllu(self, write_comments=True):
        """Return a string representation of the sentence in the CoNLL-U format.

        If the `write_comments` argument is True (default), the string also includes comments generated from the
        metadata.
        """
        return _sentence_to_str(self, write_comments)

    @staticmethod
    def from_conllu(s, multiple=False, **kwargs):
        """Parse a sentence (or list of sentences) from the string in the CoNLL-U format.
        
        If the argument `multiple` is True, the function returns the list of all sentences parsed from the string.
        Otherwise (default), it returns only the first sentence. This function supports all additional keyword arguments
        as the `read_conllu` function.

        Raises:
            ValueError: If there is an error parsing at least one sentence from the string.
        """
        itrs = read_conllu(StringIO(s), **kwargs)
        result = list(itrs) if multiple else next(itrs, None)
        if not result:
            raise ValueError('no sentence found')
        return result

    def copy(self):
        """Return a shallow copy of the sentence."""
        return Sentence(self, self.metadata)
    
    def __str__(self):
        return self.text()

def _parse_sentence(lines, comments, underscore_form, parse_feats, parse_deps):
    sentence = Sentence()
    if comments is not None:
        sentence.metadata = _parse_metadata(comments)

    for line in lines:
        token = _parse_token(line, underscore_form, parse_feats, parse_deps)
        sentence.append(token)

    return sentence

_KEY_VALUE_COMMENT = re.compile(r'\s*([^=]+?)\s*=\s*(.+)')

def _parse_metadata(comments):
    metadata = {}
    for comment in comments:
        comment = comment[1:].strip()
        match = _KEY_VALUE_COMMENT.match(comment)
        if match:
            metadata[match.group(1)] = match.group(2)
        else:
            metadata[comment] = None
    return metadata

def _parse_token(line, underscore_form, parse_feats, parse_deps):
    fields = line.split('\t')
    fields = {FIELDS[i] : fields[i] for i in range(min(len(fields), len(FIELDS)))}

    fields[ID] = _parse_id(fields[ID])

    for f in (LEMMA, UPOS, XPOS, FEATS, HEAD, DEPREL, DEPS, MISC):
        if f in fields and fields[f] == '_':
            del fields[f]

    if fields[FORM] == '_':
        if not underscore_form or LEMMA in fields:
            del fields[FORM]

    if parse_feats and FEATS in fields:
        fields[FEATS] = _parse_feats(fields[FEATS])

    if HEAD in fields:
        fields[HEAD] = int(fields[HEAD])

    if parse_deps and DEPS in fields:
        fields[DEPS] = _parse_deps(fields[DEPS])

    return Token(fields)

def _parse_id(s):
    if '.' in s:
        word_id, index = s.split('.')
        return empty_id(int(word_id), int(index))
    if '-' in s:
        start, end = s.split('-')
        return multiword_id(int(start), int(end))
    return int(s)

def _parse_feats(s):
    feats = {}
    for key, value in [feat.split('=') for feat in s.split('|')]:
        if ',' in value:
            value = set(value.split(','))
        feats[key] = value
    return feats

def _parse_deps(s):
    return set(map(lambda rel: (_parse_id(rel[0]), rel[1]), [rel.split(':', 1) for rel in s.split('|')]))

def _sentence_to_str(sentence, encode_metadata):
    lines = _metadata_to_str(sentence.metadata) if encode_metadata else []
    lines += [_token_to_str(token) for token in sentence]
    return '\n'.join(lines)

def _metadata_to_str(metadata):
    if metadata:
        return [f'# {key} = {value}' if value is not None else f'# {key}' for key, value in metadata.items()]
    else:
        return []

def _token_to_str(token):
    return '\t'.join([_field_to_str(token, field) for field in FIELDS])

def _field_to_str(token, field):
    if field == ID:
        return _id_to_str(token[ID])

    if field not in token or token[field] is None:
        return '_'

    if field == FEATS:
        return _feats_to_str(token[FEATS])

    if field == DEPS:
        return _deps_to_str(token[DEPS])

    return str(token[field])

def _id_to_str(id):
    if isinstance(id, tuple):
        return f'{id[0]}.{id[1]}' if id[2] == _EMPTY else f'{id[0]}-{id[1]}'
    else:
        return str(id)

def _feats_to_str(feats):
    if isinstance(feats, str):
        return feats
    feats = [key + '=' + (','.join(sorted(value)) if isinstance(value, set) else value) for key, value in feats.items()]
    return '|'.join(feats)        

def _deps_to_str(deps):
    if isinstance(deps, str):
        return deps
    deps = [f'{_id_to_str(rel[0])}:{rel[1]}' for rel in
            sorted(deps, key=lambda rel: rel[0][0] if isinstance(rel[0], tuple) else rel[0])]
    return '|'.join(deps)

class Node(object):
    """A node in the dependency tree corresponding to the syntactic word in the sentence.

    A node object is iterable, and returns an iterator over the direct children. ``len(node)`` returns the number of
    children, and ``node[i]`` returns the `i`-th child (or sublist of children, if `i` is the slice of indices).

    Attributes:
        index (int): The index of the word in the sentence (from 0).
        token (Token or indexed token view): The corresponding syntactic word.
        parent (Node): The parent (HEAD) of the node, or None for the root. 

    """
    def __init__(self, index, token):
        self.index = index
        self.token = token
        self.parent = None
        self._children = []

    @property
    def is_root(self):
        """bool: True, if the node is the root of the tree (has no parent)."""
        return self.parent == None

    @property
    def is_leaf(self):
        """bool: True, if the node is a leaf node (has no children)."""
        return len(self) == 0

    @property
    def deprel(self):
        """str or int: Universal dependency relation to the HEAD stored in the ``token[DEPREL]``, or None if the token
        does not have DEPREL field."""
        return self.token.get(DEPREL)

    def __getitem__(self, i):
        # Return `i`-th child of the node or sublist of children, if `i` is the slice of indices.
        return self._children[i]

    def __len__(self):
        # Return the number of children.
        return len(self._children)

    def __iter__(self):
        # Return an iterator over the children.
        return iter(self._children)

    def __repr__(self):
        return f'<{self.token!r},{self.deprel},{self._children}>'

class DependencyTree(object):
    """A dependency tree representation of the sentence.

    A *basic* dependency tree is a labeled tree structure where each node of the tree corresponds to exactly one
    syntactic word in the sentence. The relations between the node and its parent (head) are labeled with the Universal
    dependencies and stored in the HEAD and DEPREL fields of the corresponding word.

    The DependencyTree class should not be instantiated directly. Use the `Sentence.to_tree` or `Instance.to_tree`
    methods to create a dependency representation for the sentence or indexed instance. The implementation of nodes is
    provided by `Node` class.

    The dependency tree object is iterable and returns an iterator over all nodes in the order of corresponding words in
    the sentence. ``len(tree)`` returns the number of nodes.

    Note that the dependency tree is constructed only from the basic dependency relations. Enhanced dependency relations
    stored in the DEPS field are not included in the tree.

    Attributes:
        root (Node): The root of the tree. 
        nodes (list of Node): The list of all nodes in the sentence order.
        metadata (any): Any optional data associated with the tree, by default copied from the sentence or indexed
            instance.

    """
    def __init__(self, sentence):
        self.root, self.nodes = self._build(sentence)
        self.metadata = sentence.metadata

    def __len__(self):
        # Return the number of nodes.
        return len(self.nodes)

    def __iter__(self):
        # Return an iterator over all nodes in the sentence order.
        return iter(self.nodes)

    def is_projective(self, return_arcs=False):
        """Return True if the dependency tree is projective, otherwise False.

        A dependency tree is projective when all its arcs are projective, i.e. for all arcs (*i*, *j*) from parent *i*
        to child *j* and for all nodes *k* between the *i* and *j* in the sentence, there must be a path from *i* to *k*.

        If the argument `return_arcs` is True, the function returns the list of conflicting non-projective arcs. For
        projective trees the list is empty.
        """
        return _is_projective([node.token[HEAD] for node in self.nodes], return_arcs)

    def leaves(self):
        """Return an iterator over all leaves of the tree in the sentence order."""
        for node in self:
            if node.is_leaf:
                yield node

    def inorder(self):
        """Return an iterator traversing in-order over all nodes."""
        return self._traverse(self.root, inorder=True)

    def preorder(self):
        """Return an iterator traversing pre-order over all nodes."""
        return self._traverse(self.root, preorder=True)

    def postorder(self):
        """Return an iterator traversing post-order over all nodes."""
        return self._traverse(self.root, postorder=True)

    def __repr__(self):
        return repr(self.root)

    @staticmethod
    def _traverse(node, inorder=False, preorder=False, postorder=False):
        if node is None:
            return

        consumed = False
        if preorder:
            consumed = True # Consume preorder.
            yield node

        for child in node:
            if inorder and not consumed and node.index < child.index:
                consumed = True # Consume inorder.
                yield node
            yield from DependencyTree._traverse(child, inorder, preorder, postorder)

        if postorder or not consumed: # For postorder or right-most inorder.
            yield node

    @staticmethod
    def _build(sentence):
        if isinstance(sentence, Instance):
            tokens = sentence.tokens()
        else:
            tokens = sentence.words() # Only the syntactic words.

        nodes = [Node(i, token) for i, token in enumerate(tokens)]
        if not nodes:
            return None, []

        root = None
        for index, node in enumerate(nodes):
            # The token can be a syntactic word or indexed token view.
            token = node.token
            head = token.get(HEAD)
            if head is None or head == -1:
                raise ValueError(f'token at {index} has no HEAD')

            if head == 0:
                if root == None:
                    root = node
                else:
                    raise ValueError(f'multiple roots found at {index}')
            else:
                parent = nodes[head-1]
                node.parent = parent
                parent._children.append(node)

        if root is None:
            raise ValueError('no root found')

        return root, nodes

class _IndexedToken(MutableMapping):
    """A mutable mapping view representing `i`-th token of the indexed instance."""
    def __init__(self, index, fields):
        self._index = index
        self._fields = fields

    def __len__(self):
        # Return the number of mapped fields.
        return len(self._fields)
    
    def __iter__(self):
        # Return an iterator over the mapped fields.
        return iter(self._fields)

    def __getitem__(self, field):
        # Return the value of the `field`. Raises a KeyError if the `field` is not mapped in the instance.
        return self._fields[field][self._index]

    def __setitem__(self, field, value):
        # Set the value of the `field`. Raises a KeyError if the `field` is not mapped in the instance.
        if not field in self._fields:
            raise KeyError(field)
        self._fields[field][self._index] = value

    def __delitem__(self, key):
        # Remove key operation is not supported for the token view.
        raise TypeError('not supported for token views')

class Instance(dict):
    """An indexed representation of the sentence in the compact numerical form.

    An instance can be created from a sentence using the `Sentence.to_instance` method. The sentence values are mapped
    to the numerical indexes by the provided *index* mapping. The index for a set of sentences can be created
    with the `create_index` function.

    An instance is a dictionary type where each field is mapped to the NumPy array with the integer values continuously
    indexed for all tokens in the sentence, i.e. the field value of the `i`-th token is stored as ``instance[field][i]``.
    The length of all mapped arrays is equal to the length of the sentence. The default numerical type of the arrays is
    `np.int64`.

    The ID field is not stored in the instance. Note that this also means that the type of tokens is not preserved. The
    FEATS and DEPS fields are indexed as unparsed strings, i.e. the features or dependencies are not indexed separately.

    By default, unknown values (i.e. values not mapped in the provided index) are stored as 0. Missing values (i.e. when
    a token does not have value for the indexed field) are stored as -1. For more information, see `create_index`
    function.

    Attributes:
        metadata (any): Any optional data associated with the instance, by default copied from the sentence.

    """
    def __init__(self, fields=(), metadata=None):
        super().__init__(fields)
        self.metadata = metadata

    @property
    def length(self):
        """int: The length of the intance (i.e. the number of tokens in the indexed sentence)."""
        for data in self.values():
            return len(data)
        return 0

    def __getattr__(self, name):
        if name in _FIELD_SET:
            return self[name]
        else:
            raise AttributeError(f'instance has no attribute {name}')

    def __setattr__(self, name, value):
        if name in _FIELD_SET:
            self[name] = value
        else:
            super().__setattr__(name, value)

    def __delattr__(self, name):
        if name in _FIELD_SET:
            del self[name]
        else:
            super().__delattr__(name)

    def is_projective(self, return_arcs=False):
        """Return True if this instance can be represented as the projective dependency tree, otherwise False.

        See `DependencyTree.is_projective` method for more information.
        """
        return _is_projective(self[HEAD], return_arcs)

    def token(self, i):
        """Return a view to the `i`-th token of the instance.

        The view is a mutable mapping object, which maps fields to the scalar values stored in the instance at the
        `i`-th position, i.e. for the values of the `i`-th token view, the following condition holds
        ``token[field] == instance[field][i]``.

        The view object supports all mapping methods and operations except the deleting of the field or setting the
        value of the field not indexed in the instance.
        """
        return _IndexedToken(i, self)

    def tokens(self):
        """Return an iterator over all tokens. The iterated values are token view objects."""
        for i in range(self.length):
            yield self.token(i)

    def to_tree(self):
        """Return a dependency tree representation of the instance.
 
        See `DependencyTree` class for more information. All tokens referenced in the tree are indexed views, as it is
        described for the `Instance.token` method. Note that the implementation assumes proper ordering of the tokens
        and that the instance does not contain empty or multiword tokens.

        Raises:
            ValueError: If the instance contains the tokens without the HEAD field (HEAD = -1), or when the instance
                does not have exactly one root with HEAD = 0.
        """
        return DependencyTree(self)
    
    def to_sentence(self, inverse_index, fields=None):
        """Return a new sentence build from the instance with the values re-indexed by the `inverse_index`.

        Optional `fields` argument specifies a subset of the fields added into the sentence. By default, all instance
        fields are included. The ID values are always generated as the sequence of integers starting from 1, which
        corresponds to the sequence of lexical words without the empty or multiword tokens.

        This operation is inverse to the indexing in `Sentence.to_instance` method.

        Raises:
            KeyError: If some of the instance values is not mapped in the `inverse_index`.
        """
        return _map_to_sentence(self, inverse_index, fields)

    def copy(self):
        """Return a shallow copy of the instance."""
        return Instance(self, self.metadata)

def _is_projective(heads, return_arcs=False):

    if return_arcs:
        arcs = []

    for i in range(len(heads)):
        if heads[i] is None or heads[i] < 0:
            continue

        for j in range(i + 1, len(heads)):
            if heads[j] is None or heads[j] < 0:
                continue

            arc1_0 = min(i + 1, heads[i])
            arc1_1 = max(i + 1, heads[i])
            arc2_0 = min(j + 1, heads[j])
            arc2_1 = max(j + 1, heads[j])

            if ((arc1_0 == arc2_0 and arc1_1 == arc2_1) or # Cycle
                (arc1_0 < arc2_0 and arc2_0 < arc1_1 and arc1_1 < arc2_1) or # Crossing
                (arc2_0 < arc1_0 and arc1_0 < arc2_1 and arc2_1 < arc1_1)):  # Crossing
                if return_arcs:
                    arcs.append((i, j))
                else:
                    return False

    if return_arcs:
        return arcs
    else:
        return True

def read_conllu(file, underscore_form=True, parse_comments=True, parse_feats=False, parse_deps=False):
    """Read the CoNLL-U file and return an iterator over the parsed sentences.

    The `file` argument can be a path-like or file-like object.

    To parse values of FEATS or DEPS fields to dictionaries or sets of tuples, set the `parse_feats` or `parse_deps`
    arguments to True. By default the features and dependencies are not parsed and values are stored as a string.

    If `underscore_form` is True (default) and LEMMA field is underscore, the underscore character in the FORM field is
    parsed as the FORM value. Otherwise, it indicates an unspecified FORM value.

    By default, comments are parsed as the metadata dictionary. To skip comments parsing, set `parse_comments` argument
    to False.
    """
    if isinstance(file, (str, os.PathLike)):
        file = open(file, 'rt', encoding='utf-8')

    with file:
        lines = []
        comments = [] if parse_comments else None

        for line in file:
            line = line.strip() 
            if line:
                if line.startswith('#'):
                    if parse_comments:
                        comments.append(line)
                else:
                    lines.append(line)
            elif lines:
                yield _parse_sentence(lines, comments, underscore_form,
                        parse_feats, parse_deps)
                lines = []
                comments = []

        # Parse the last sentence if the file does not end with the LF character.
        # Note that this is not compliant with the CoNLL-U V2 specification.
        if lines:
            yield _parse_sentence(lines, comments, underscore_form,
                    parse_feats, parse_deps)

def write_conllu(file, data, write_comments=True):
    """Write the sentences to the CoNLL-U file.

     The `file` argument can be a path-like or file-like object. Written `data` is an iterable object of sentences or
     one sentence. If the `write_comments` argument is True (default), sentence metadata are encoded as the comments and
     written to the file.
    """
    if isinstance(data, Sentence):
        data = (data,)

    if isinstance(file, (str, os.PathLike)):
        file = open(file, 'wt', encoding='utf-8')

    with file as fp:
        for sentence in data:
            if write_comments and sentence.metadata:
                for comment in _metadata_to_str(sentence.metadata):
                    print(comment, file=fp)
            for token in sentence:
                print(_token_to_str(token), file=fp)
            print(file=fp)

def _is_chars_field(field):
    return field.endswith(':chars')

def _index_key(f, v):
    if isinstance(v, str):
        return v
    raise ValueError(f'indexing non-string value {v} for {f}')

def _create_dictionary(sentences, fields=None):
    dic = {}

    for sentence in sentences:
        for token in sentence:
            for field, value in token.items():
                if field == ID or field == HEAD:
                    continue

                if fields is not None and field not in fields:
                    continue

                if field not in dic:
                    dic[field] = Counter()

                if _is_chars_field(field):
                    for ch in value:
                        key = _index_key(field, ch)
                        dic[field][key] += 1
                else:
                    if field == FEATS:
                        value = _feats_to_str(value)
                    elif field == DEPS:
                        value = _deps_to_str(value)
                    key = _index_key(field, value)
                    dic[field][key] += 1

    return dic

def create_index(sentences, fields=None, min_frequency=1, missing_index=None):
    """Return an index mapping the string values of the `sentences` to integer indexes.

    An index is a nested dictionary where the indexes for the field values are stored as ``index[field][value]``. See
    `Sentence.to_instance` method for usage of the index dictionary for sentence indexing.

    For each field, the indexes are assigned to the string values starting from 1 according to their descending
    frequency of occurrences in the sentences, i.e. the most frequent value has index 1, second one index 2, etc.
    Index 0 represents an *unknown* value, and the dictionary returns 0 for all unmapped values.

    For mapping of instances to the sentences, use `create_inverse_index` function to create an inverse mapping
    from the indexes to the string values.

    Args:
        sentences (iterable): The indexed sentences.
        fields (set): The set of indexed fields included in the index. By default all string-valued fields are indexed
            except ID and HEAD.
        min_frequency (int or dictionary): If specified, the field values with a frequency lower than `min_frequency`
            are discarded from the index. By default, all values are preserved. The `min_frequency` can be specified as
            an integer for all fields, or as a dictionary setting the frequency for the specific field.
        missing_index (int or dictionary): The integer index representing the missing values (i.e. when a token does not
            have value for the indexed field). By default, missing index is not mapped in the index dictionary, and all
            missing values are indexed as -1. If specified, the mapping index[field][None] = `missing_index` is added
            into the index dictionary. The `missing_index` can be specified as an integer for all fields, or as a
            dictionary setting the missing index for the specific field.

    Raises:
        ValueError: If the non-string value is indexed for some of the `fields`.
    """
    dic = _create_dictionary(sentences, fields)
    index = {f: Counter() for f in dic.keys()}

    for f, c in dic.items():
        min_fq = min_frequency.get(f, 1) if isinstance(min_frequency, dict) else min_frequency
        missing_idx = missing_index.get(f, None) if isinstance(missing_index, dict) else missing_index

        i = 1
        ordered = sorted(c.items(), key=itemgetter(1,0), reverse=True)
        for (s, fq) in ordered:
            if fq >= min_fq:
                if missing_idx is not None and i == missing_idx:
                    i += 1
                index[f][s] = i
                i += 1
            else:
                break
        if missing_idx is not None:
            index[f][None] = missing_idx

    return index

def create_inverse_index(index):
    """Return an inverse index mapping the integer indexes to string values.

    For the `index` with mapping ``index[field][v] = i``, the inverse index has mapping ``inverse_index[field][i] = v``.
    See `Instance.to_sentence` method for usage of the inverse index for transformation of instances to sentences.
    """
    return {f: {v: k for k, v in c.items()} for f, c in index.items()}

def _map_to_instance(sentence, index, fields=None, dtype=np.int64):
    if fields is None:
        fields = {HEAD} | set(index.keys())

    length = len(sentence)
    instance = Instance()
    instance.metadata = sentence.metadata

    for field in fields:
        missing_index =  -1
        if field in index and None in index[field]:
            missing_index = index[field][None]

        array = np.full(length, None, dtype=np.object) if _is_chars_field(field) else \
                np.full(length, missing_index, dtype=dtype)

        for i, token in enumerate(sentence):
            if field in token:
                value = token[field]
                if field == HEAD:
                    array[i] = value
                elif _is_chars_field(field):
                    value = np.array([index[field][ch] for ch in value], dtype=dtype)
                    array[i] = value
                else:
                    if field == FEATS:
                        value = _feats_to_str(value)
                    if field == DEPS:
                        value = _deps_to_str(value)
                    array[i] = index[field][value]

        instance[field] = array
    
    return instance

def _map_to_sentence(instance, inverse_index, fields=None):
    if fields is None:
        fields = instance.keys()

    sentence = Sentence()
    sentence.metadata = instance.metadata

    for i in range(instance.length):
        token = Token()
        token[ID] = i + 1

        for field in fields:
            index = instance[field][i]
            if index is not None or index >= 0:
                if field == HEAD:
                    value = index
                elif _is_chars_field(field):
                    value = tuple([inverse_index[field].get(ch) for ch in index])
                else:
                    value = inverse_index[field].get(index)
                if value is not None:
                    token[field] = value

        sentence.append(token)
    
    return sentence

from .pipeline import Pipeline

def pipe(source=None, *args):
    """Build a data processing *pipeline*.

    A *pipeline* specifies the chaining of operations performed over the processed data. The operations can be divided
    into three types:

    * data sources,
    * filters or transformations,
    * and actions.

    The data sources generate the processed data, e.g. read the data from the ConNLL-U file. Filters and transformations
    filter data for the subsequent processing, transform data values or map one data type to another one (e.g. index
    sentences to instances or extract the texts of the sentences). Actions invoke the whole pipeline chain and perform
    the final operation with the processed data (e.g. collect the processed data in the Python list or write data to
    the CoNLL-U file.

    The pipeline can optionally specify only one data source, and if specified, the data source has to be configured as
    the first operation of the pipeline. Alternatively, the data source can be provided as an iterable object specified
    in the `source` argument.

    The pipeline objects are iterable and callable. The iterator invokes the configured data source and processes the
    data with all filters and transformations of the pipeline. Calling of `p(data)` applies the filters and
    transformations of `p` on the provided `data` and returns an iterator over the processed data. The `data` argument
    can be any iterable object (including another pipeline).

    The pipelines can be arbitrarily chained using the `pipeline.Pipeline.pipe` method, i.e. the data can be loaded and
    partially processed by some operations of the first pipeline, then processed by the second pipeline and then finally
    processed by the remaining operations of the first one.

    The operations can be further divided according to the data type to the operations for sentences, tokens, fields'
    values, instances etc. For an overview and more information about the operations, see the description of
    `pipeline.Pipeline` class.

    Args:
        source (iterable): The configured data source of the pipeline.
        *args (pipelines): The list of the pipelines chained after the data source, i.e.
            ```pipe(data, p1, p2, ... ,pn)``` is equivalent to ```pipe(data).pipe(p1, p2, ..., pn)```. See
            `pipeline.Pipeline.pipe` method for more information.

    """
    p = Pipeline(source)
    p.pipe(*args)
    return p
