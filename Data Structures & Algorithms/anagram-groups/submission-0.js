class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

		for (const str of strs) {
			const group = new Array(26).fill(0);

			for (const char of str) {
				const index = char.charCodeAt(0) - "a".charCodeAt(0);
				group[index] += 1;
			}

			const key = group.join(",");

			if (groups[key]) {
				groups[key].push(str);
			} else {
				groups[key] = [str];
			}
		}

		return Object.values(groups);
    }
}
