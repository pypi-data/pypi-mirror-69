import sys
import logging


logging.basicConfig(stream=sys.stderr, level=logging.WARNING)


class Parser(object):
    """Defines the common interface for parser objects.
    Parsers transofrm natural text into graphbrain hyperedges.
    """

    def __init__(self, lemmas=False, resolve_corefs=False):
        self.lemmas = lemmas
        self.resolve_corefs = resolve_corefs

        # to be created by derived classes
        self.lang = None

    def parse(self, text):
        """Transforms the given text into hyperedges + aditional information.
        Returns a dictionary with two fields:

        -> parses: a sequence of dictionaries, with one dictionary for each
        sentence found in the text.

        -> inferred_edges: a sequence of edges inferred during by parsing
        process (e.g. genders, 'X is Y' relationships)

        Each sentence parse dictionary contains at least the following fields:

        -> main_edge: the hyperedge corresponding to the sentence.

        -> resolved_corefs: main_edge with coreferences resolved, can be the
        same as main_edge if coreference resolution is not performed.

        -> extra_edges: aditional edges, e.g. connecting atoms that appear
        in the main_edge to their lemmas.

        -> text: the string of natural language text corresponding to the
        main_edge, i.e.: the sentence itself.

        -> edges_text: a dictionary of all edges and subedges to their
        corresponding text.
        """
        parse_results = self._parse(text)
        if self.resolve_corefs:
            self._resolve_corefs(parse_results)
        return parse_results

    def atom_gender(self, atom):
        raise NotImplementedError()

    def atom_number(self, atom):
        raise NotImplementedError()

    def atom_person(self, atom):
        raise NotImplementedError()

    def atom_animacy(self, atom):
        raise NotImplementedError()

    def _post_process(self, edge):
        raise NotImplementedError()

    def _parse_token(self, token):
        raise NotImplementedError()

    def _before_parse_sentence(self):
        raise NotImplementedError()

    def _parse_sentence(self, sent):
        raise NotImplementedError()

    def _parse(self, text):
        raise NotImplementedError()

    def _resolve_corefs(self, parse_results):
        # do nothing if not implemented in derived classes
        for parse in parse_results['parses']:
            parse['resolved_corefs'] = parse['main_edge']
