class DSU {
	parents;
	ranks;

	constructor(nodes) {
		this.parents = new Array(nodes);

		for (let i = 0; i < nodes; i++) {
			this.parents[i] = i;
		}

		this.ranks = new Array(nodes + 1).fill(0);
	}

	find(node) {
		if (this.parents[node] === node) return node;

		const ultimateParent = this.find(this.parents[node]);

		this.parents[node] = ultimateParent;
		return ultimateParent;
	}

	union(nodeOne, nodeTwo) {
		const parentOne = this.find(this.parents[nodeOne]);
		const parentTwo = this.find(this.parents[nodeTwo]);

		if (parentOne === parentTwo) return false;

		if (this.ranks[parentOne] > this.ranks[parentTwo]) {
			this.parents[parentTwo] = parentOne;
		} else if (this.ranks[parentOne] < this.ranks[parentTwo]) {
			this.parents[parentOne] = parentTwo;
		} else {
			this.parents[parentOne] = parentTwo;
			this.ranks[parentTwo]++;
		}

		return true;
	}
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
		if (edges.length > n - 1) return false;

		const dsu = new DSU(n);
		let components = n;

		for (const [nodeOne, nodeTwo] of edges) {
			if (!dsu.union(nodeOne, nodeTwo)) {
				return false;
			}

			components--;
		}

		return components === 1;
	}
}
