import random
import numpy as np
import networkx as nx


class Sampler(object):
    """Sampler base class with constructor and public methods."""

    def __init__(self):
        """Creatinng a sampler."""
        pass

    def sample(self):
        """Sample from a model."""
        pass

    def _set_seed(self):
        """Creating the initial random seed."""
        random.seed(self.seed)
        np.random.seed(self.seed)

    def _check_networkx_graph(self, graph):
        try:
            if not isinstance(graph, nx.classes.graph.Graph):
                raise TypeError("This is not a NetworkX graph. Please see requirements.")
        except:
                exit("This is not a NetworkX graph. Please see requirements.")
   
    def _check_connectivity(self, graph):
        """Checking the connected nature of a single graph."""
        try:
            connected = nx.is_connected(graph)
            if not connected:
                raise ValueError("Graph is not connected. Please see requirements.")
        except:
            exit("Graph is not connected. Please see requirements.")


    def _check_directedness(self, graph):
        """Checking the undirected nature of a single graph."""
        try:
            directed = nx.is_directed(graph)
            if directed:
                raise ValueError("Graph is directed. Please see requirements.")
        except:
            exit("Graph is directed. Please see requirements.")


    def _check_indexing(self, graph):
        """Checking the consecutive numeric indexing."""
        numeric_indices = [index for index in range(graph.number_of_nodes())]
        node_indices = sorted([node for node in graph.nodes()])
        try:
           if numeric_indices != node_indices:
               raise ValueError("The node indexing is wrong. Please see requirements.")
        except:
           exit("The node indexing is wrong. Please see requirements.")     


    def _check_graph(self, graph):
        """Check the Little Ball of Fur assumptions about the graph."""
        self._check_connectivity(graph)
        self._check_directedness(graph)
        self._check_indexing(graph)

    def _check_number_of_nodes(self, graph):
        """Checking the size of the graph - nodes."""
        try:
           if self.number_of_nodes > graph.number_of_nodes():
               raise ValueError("The number of nodes is too large. Please see requirements.")
        except:
           exit("The number of nodes is too large. Please see requirements.")   

    def _check_number_of_edges(self, graph):
        """Checking the size of the graph - edges."""
        try:
           if self.number_of_edges > graph.number_of_edges():
               raise ValueError("The number of edges is too large. Please see requirements.")
        except:
           exit("The number of edges is too large. Please see requirements.")     
