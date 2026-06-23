class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjacencyList = {};

		for (const edge of edges) {
			if (!adjacencyList[edge[0]]) {
				adjacencyList[edge[0]] = [edge[1]];
			} else {
				adjacencyList[edge[0]].push(edge[1]);
			}

			if (!adjacencyList[edge[1]]) {
				adjacencyList[edge[1]] = [edge[0]];
			} else {
				adjacencyList[edge[1]].push(edge[0]);
			}
		}

		let components = 0;
		const visited = new Set();

		for (let i = 0; i < n; i++) {
			if (!visited.has(i)) {
				this.dfs(i, visited, adjacencyList);
				components++;
			}
		}

		return components;
    }

    /**
	 *
	 * @param {number} node
	 * @param {Set<number>} visited
	 * @param {Record<number, number[]>} graph
	 */
	dfs(node, visited, graph) {
		if (visited.has(node)) return;

		visited.add(node);

		const children = graph[node] ?? [];

		for (const child of children) {
			this.dfs(child, visited, graph);
		}
	}
}
