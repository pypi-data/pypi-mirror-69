# TODO: write checks for all inputs

from __future__ import absolute_import
from __future__ import print_function

from math import factorial
from logging import getLogger
from collections import deque
from numpy.random import choice
from random import sample, randint
from itertools import permutations, repeat

# Local imports
from cspy.algorithms.path_base import PathBase

log = getLogger(__name__)


class GRASP(PathBase):
    """
    Greedy Randomised Adaptive Search Procedure for the (resource) constrained
    shortest path problem. Adapted from `Ferone et al 2019`_.

    Parameters
    ----------
    G : object instance :class:`nx.Digraph()`
        must have ``n_res`` graph attribute and all edges must have
        ``res_cost`` attribute. Also, the number of nodes must be
        :math:`\geq 5`.

    max_res : list of floats
        :math:`[M_1, M_2, ..., M_{n\_res}]` upper bounds for resource
        usage.

    min_res : list of floats
        :math:`[L_1, L_2, ..., L_{n\_res}]` lower bounds for resource
        usage.

    preprocess : bool, optional
        enables preprocessing routine. Default : False.

    max_iter : int, optional
        Maximum number of iterations for algorithm. Default : 100.

    max_localiter : int, optional
        Maximum number of local search iterations. Default : 10.

    alpha : float, optional
        Greediness factor 0 (random) --> 1 (greedy). Default : 0.2.

    REF : function, optional
        Custom resource extension function. See `REFs`_ for more details.
        Default : additive.

    .. _REFs : https://cspy.readthedocs.io/en/latest/how_to.html#refs
    .. _Ferone et al 2019: https://www.tandfonline.com/doi/full/10.1080/10556788.2018.1548015

    Raises
    ------
    Exception
        if no resource feasible path is found

    """

    def __init__(self,
                 G,
                 max_res,
                 min_res,
                 preprocess=False,
                 max_iter=100,
                 max_localiter=10,
                 alpha=0.2,
                 REF=None):
        # Pass arguments to parent class
        super().__init__(G, max_res, min_res, preprocess, REF)
        # Algorithm specific attributes
        self.max_iter = max_iter
        self.max_localiter = max_localiter
        self.alpha = alpha
        # Algorithm specific parameters
        self.it = 0
        self.stop = False
        self.best_path = None
        self.best_solution = None
        self.nodes = self.G.nodes()

    def run(self):
        """
        Calculate shortest path with resource constraints.
        """
        while self.it < self.max_iter and not self.stop:
            self._algorithm()
            self.it += 1
        if self.best_solution.path:
            pass
        else:
            raise Exception("No resource feasible path has been found")

    def _algorithm(self):
        solution = self._construct()
        solution = self._local_search(solution)
        self._update_best(solution)

    def _construct(self):
        solution = Solution(sample(self.nodes, 1), 0)  # Init solution
        # Construction phase
        while len(solution.path) < len(self.nodes):
            candidates = [i for i in self.nodes if i not in solution.path]
            weights = deque(
                map(self._heuristic, repeat(solution.path[-1]), candidates))
            # Build Restricted Candidiate List (RCL)
            restriced_candidates = [
                candidates[i]
                for i, c in enumerate(weights)
                if c <= (min(weights) + self.alpha *
                         (max(weights) - min(weights)))
            ]
            # Select random node from RCL to add to the current solution
            solution.path.append(choice(restriced_candidates))
            solution.cost = self._cost_solution(solution)
        return solution

    def _local_search(self, solution):
        it = 0  # init local iteration counter
        while it < self.max_localiter:  # Local search phase
            # Init candidate solution using random valid path generator
            candidate = Solution(
                self._find_alternative_paths(self.G, solution.path), 0)
            # evaluate candidate solution
            candidate.cost = self._cost_solution(candidate)
            # Update solution with candidate if lower cost and resource feasible
            if (candidate.path and candidate.cost < solution.cost and
                    self._check_path(candidate)):
                solution = candidate
            it += 1
        return solution

    def _update_best(self, solution):
        if not self.best_solution or solution.cost < self.best_solution.cost:
            self.best_solution = solution

    def _heuristic(self, i, j):
        # Given a node pair returns a weight to apply
        if i and j:
            if (i, j) not in self.G.edges():
                return 1e10
            else:
                return self.G.get_edge_data(i, j)['weight']
        else:
            return 1e10

    def _cost_solution(self, solution=None):
        if solution:
            return sum(
                self._heuristic(i, j)
                for i, j in zip(solution.path, solution.path[1:]))
        else:
            return 1e11

    def _check_path(self, solution=None):
        """
        Returns True if solution.path is valid and resource feasible,
        False otherwise
        """
        if solution:
            path, cost = solution.path, solution.cost
            if (len(path) > 2 and cost < 1e10 and path[0] == 'Source' and
                    path[-1] == 'Sink'):
                self.st_path = path
                return self.check_feasibility(return_edge=False)
            else:
                return False
        else:
            return False

    @staticmethod
    def _find_alternative_paths(G, path):
        """
        Static Method used in local search to randomly generate valid paths.
        Using a subset of edges, it generates a connected path starting at
        the source node.
        """
        n_permutations = int(factorial(len(path)) / factorial(len(path) - 2))
        sample_size = randint(3, n_permutations)
        selection = sample(deque(permutations(path, 2)), sample_size)
        path_edges = dict(list(edge for edge in selection if edge in G.edges()))
        elem = 'Source'  # start point in the new list
        new_list = []
        for _ in range(len(path_edges)):
            try:
                new_list.append((elem, path_edges[elem]))
                elem = path_edges[elem]
            except KeyError:
                pass
        if new_list:
            nodes_to_keep = [t[0] for t in new_list]
            nodes_to_keep.append(new_list[-1][1])
        else:
            nodes_to_keep = []
        return nodes_to_keep


class Solution(object):
    """
    Object for solutions and candidates during GRASP iterations.

    Parameters
    ----------

    path : list
        list of nodes in current path

    cost : float
        cost of solution
    """

    def __init__(self, path, cost):
        self.path = path
        self.cost = cost
