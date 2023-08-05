import graphbrain.constants as const
from graphbrain.agents.agent import Agent


class Taxonomy(Agent):
    def __init__(self, hg, lang, sequence=None):
        super().__init__(hg, lang, sequence)

    def name(self):
        return 'taxonomy'

    def languages(self):
        return set()

    def input_edge(self, edge):
        if not edge.is_atom():
            et = edge.type()
            if et[0] == 'C':
                ct = edge[0].connector_type()
                parent = None
                if ct[0] == 'B':
                    mcs = edge.main_concepts()
                    if len(mcs) == 1:
                        parent = mcs[0]
                elif ct[0] == 'M' and len(edge) == 2:
                    parent = edge[1]
                if parent:
                    ont_edge = (const.type_of_pred, edge, parent)
                    self.add(ont_edge, primary=False)
