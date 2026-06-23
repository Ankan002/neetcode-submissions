class TrieNode {
	children;
	isEndOfWord;

	constructor() {
		this.children = {};
		this.isEndOfWord = false;
	}
}

class PrefixTree {
	root;

	constructor() {
		this.root = new TrieNode();
	}

	/**
	 * @param {string} word
	 * @return {void}
	 */
	insert(word) {
		let currentNode = this.root;

		for (const char of word) {
			if (!currentNode[char]) {
				currentNode[char] = new TrieNode();
			}

			currentNode = currentNode[char];
		}

		currentNode.isEndOfWord = true;
	}

	/**
	 * @param {string} word
	 * @return {boolean}
	 */
	search(word) {
		let currentNode = this.root;

		for (const char of word) {
			if (!currentNode[char]) return false;
			currentNode = currentNode[char];
		}

		return currentNode.isEndOfWord;
	}

	/**
	 * @param {string} prefix
	 * @return {boolean}
	 */
	startsWith(prefix) {
		let currentNode = this.root;

		for (const char of prefix) {
			if (!currentNode[char]) return false;
			currentNode = currentNode[char];
		}

		return true;
	}
}
