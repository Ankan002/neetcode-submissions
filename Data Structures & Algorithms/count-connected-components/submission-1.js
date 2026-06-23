class DSU {
	parents;
	ranks;

	constructor(n) {
		this.parents = new Array(n + 1);

		for (let i = 0; i < n + 1; i++) {
			this.parents[i] = i;
		}

		this.ranks = new Array(n + 1).fill(0);
	}

	findParent(node) {
		if (this.parents[node] === node) return node;

		const ultimateParent = this.findParent(this.parents[node]);

		this.parents[node] = ultimateParent;

		return ultimateParent;
	}

	union(nodeOne, nodeTwo) {
		const parentOne = this.findParent(nodeOne);
		const parentTwo = this.findParent(nodeTwo);

		if (parentOne === parentTwo) return false;

		if (this.ranks[parentOne] < this.ranks[parentTwo]) {
			this.parents[parentOne] = parentTwo;
		} else if (this.ranks[parentOne] > this.ranks[parentTwo]) {
			this.parents[parentTwo] = parentOne;
		} else {
			this.parents[parentTwo] = parentOne;
			this.ranks[parentOne]++;
		}

		return true;
	}
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
		const ds = new DSU(n);

		let components = n;

		for (const [nodeOne, nodeTwo] of edges) {
			if (ds.union(nodeOne, nodeTwo)) {
				components--;
			}
		}

		return components;
	}
}
