"""
Comparison between various graph-search algorithms.

reference: https://www.grayblobgames.com/pathfinding/a-star/introduction.html#dijkstra
ref_2: https://medium.com/@nicholas.w.swift/easy-a-star-pathfinding-7e6689c7f7b2
"""
from collections import deque, defaultdict
from functools import partial

import networkx as nx
import numpy as np
import gym
from params_proto import proto_partial
from params_proto.neo_proto import ParamsProto

from graph_search import methods, short_names


class Args(ParamsProto):
    env_id = "CMazeDiscreteIdLess-v0"
    n_envs = 10
    n_rollout = 50
    n_timesteps = 1
    neighbor_r = 0.036
    neighbor_r_min = None

    h_scale = 3


def d(xy, xy_):
    return np.linalg.norm(xy - xy_, ord=2)


# @proto_partial(Args)
def sample_trajs(seed, env_id=Args.env_id):
    from ge_world import IS_PATCHED
    assert IS_PATCHED, "required for these envs."

    np.random.seed(seed)
    env = gym.make(env_id)
    env.reset()

    trajs = []
    for i in range(Args.n_rollout):
        obs = env.reset()
        path = [obs['x']]
        trajs.append(path)
        for t in range(Args.n_timesteps - 1):
            obs, reward, done, info = env.step(np.random.randint(low=0, high=7))
            path.append(obs['x'])
    trajs = np.array(trajs)
    from ml_logger import logger
    logger.print(f'seed {seed} has finished sampling.', color="green")
    return trajs

    # fig = plt.figure(figsize=(3, 3))
    # for path in trajs:
    #     plt.plot(*zip(*path), color="gray")
    # plt.gca().set_aspect('equal')
    # plt.tight_layout()
    # plt.show()


def plot_graph(graph):
    # fig = plt.figure(figsize=(3, 3))
    nx.draw(graph, [n['pos'] for n in graph.nodes.values()],
            node_size=0, node_color="gray", alpha=0.7, edge_color="gray")
    plt.gca().set_aspect('equal')
    # plt.tight_layout()
    # plt.show()


def maze_graph(trajs):
    all_nodes = np.concatenate(trajs)
    graph = nx.Graph()
    for i, xy in enumerate(all_nodes):
        graph.add_node(i, pos=xy)
    for i, a in graph.nodes.items():
        for j, b in graph.nodes.items():
            if d(a['pos'], b['pos']) < Args.neighbor_r \
                    and (Args.neighbor_r_min is None
                         or d(a['pos'], b['pos']) > Args.neighbor_r_min):
                graph.add_edge(i, j, weight=d(a['pos'], b['pos']))

    # if Args.visualize_graph:
    #     plot_graph(graph)

    return graph


def heuristic(a, b, G, scale=1):
    a = [G.nodes[n]['pos'] for n in a]
    b = [G.nodes[n]['pos'] for n in b]
    return np.linalg.norm((np.array(a) - np.array(b)), ord=1, axis=-1) * scale


def plot_trajectory_2d(path, color='black', **kwargs):
    for (x, y), (x_, y_) in zip(path[:-1], path[1:]):
        dx = (x_ - x)
        dy = (y_ - y)
        d = np.linalg.norm([dx, dy], ord=2)
        plt.arrow(x, y, dx * 0.8, dy * 0.8, **kwargs, head_width=d * 0.3, head_length=d * 0.3,
                  length_includes_head=True, head_starts_at_zero=True, fc=color, ec=color)


def set_fig():
    plt.gca().set_yticklabels([])
    plt.gca().set_xticklabels([])
    plt.xlim(-24, 24)
    plt.ylim(-24, 24)
    plt.gca().set_aspect('equal')


def get_neighbor(G, pos):
    ds = np.array([d(n['pos'], pos) for i, n in G.nodes.items()])
    return np.argmin(ds)


def ind2pos(G, inds, scale=1):
    return [G.nodes[n]['pos'] * scale for n in inds]


def patch_graph(G):
    queries = defaultdict(lambda: 0)
    _neighbors = G.neighbors

    def neighbors(n):
        # queries[n] += 1  # no global needed bc mutable.
        ns = list(_neighbors(n))
        for n in ns:
            queries[n] += 1
        return ns

    G.neighbors = neighbors
    return queries


if __name__ == '__main__':
    from collections import defaultdict
    from waterbear import DefaultBear
    import matplotlib.pyplot as plt
    from multiprocessing.pool import Pool
    from ml_logger import logger

    p = Pool(10)
    traj_batch = p.map(sample_trajs, range(Args.n_envs))

    G = maze_graph(np.concatenate(traj_batch))
    queries = patch_graph(G)

    cache = DefaultBear(dict)

    start, goal = get_neighbor(G, (-0.16, 0.16)), get_neighbor(G, (-0.16, -0.16))

    fig = plt.figure(figsize=(4, 4), dpi=300)

    for i, (key, search) in enumerate(methods.items()):
        queries.clear()
        name = search.__name__
        title, *_ = search.__doc__.split('\n')
        short_name = short_names[key]

        path, ds = search(G, start, goal, partial(heuristic, G=G, scale=Args.h_scale))
        cache.cost[short_name] = len(queries.keys())
        cache.len[short_name] = sum(ds)
        print(f"{key:>10} len: {len(path)}", f"cost: {len(queries.keys())}")
        plt.subplot(2, 2, i + 1)
        plt.title(title, pad=10)
        # plot_graph(G)
        plot_trajectory_2d(ind2pos(G, path, 100), label=short_name)
        plt.scatter(*zip(*ind2pos(G, queries.keys(), 100)), color="gray", s=3, alpha=0.6)
        set_fig()

    # plt.legend(loc="upper left", bbox_to_anchor=(0.45, 0.8), framealpha=1, frameon=False, fontsize=12)
    plt.tight_layout()
    logger.savefig("../figures/maze_plans.png", dpi=300)
    plt.show()
    plt.close()

    # colors = ['#49b8ff', '#ff7575', '#66c56c', '#f4b247']
    fig = plt.figure(figsize=(3.8, 3), dpi=300)
    plt.title('Planning Cost')
    plt.bar(cache.cost.keys(), cache.cost.values(), color="gray", width=0.8)
    plt.ylim(0, max(cache.cost.values()) * 1.2)
    plt.gca().spines['top'].set_visible(False)
    plt.gca().spines['right'].set_visible(False)
    plt.tight_layout()
    logger.savefig("../figures/maze_cost.png", dpi=300)
    plt.ylabel('# of distance lookup')
    plt.show()

    fig = plt.figure(figsize=(3.8, 3), dpi=300)
    plt.title('Plan Length')
    plt.bar(cache.len.keys(), cache.len.values(), color="gray", width=0.8)
    plt.ylim(0, max(cache.len.values()) * 1.2)
    plt.gca().spines['top'].set_visible(False)
    plt.gca().spines['right'].set_visible(False)
    plt.tight_layout()
    logger.savefig("../figures/maze_length.png", dpi=300)
    plt.ylabel('Path Length')
    plt.show()

    logger.print('done', color="green")
