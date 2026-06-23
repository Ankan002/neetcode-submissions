class WordLetter {
	children;
	isEndOfWord;

	constructor() {
		this.children = new Array(26).fill(null);
		this.isEndOfWord = false;
	}
}

class WordDictionary {
	root;

	constructor() {
		this.root = new WordLetter();
	}

	/**
	 * @param {string} char
	 * @return {number}
	 */
	getCharIndex(char) {
		return char.charCodeAt(0) - "a".charCodeAt(0);
	}

	/**
	 * @param {string} word
	 * @return {void}
	 */
	addWord(word) {
		let current = this.root;

		for (const char of word) {
			const characterIndex = this.getCharIndex(char);

			if (!current.children[characterIndex]) {
				current.children[characterIndex] = new WordLetter();
			}

			current = current.children[characterIndex];
		}

		current.isEndOfWord = true;
	}

	/**
	 * @param {string} word
	 * @return {boolean}
	 */
	search(word) {
		return this.dfs(word, 0, this.root);
	}

	/**
	 *
	 * @param {string} word
	 * @param {number} j
	 * @param {WordLetter} root
	 * @return boolean
	 */
	dfs(word, j, root) {
		let current = root;

		for (let i = j; i < word.length; i++) {
			const character = word[i];

			if (character === ".") {
				for (const child of current.children) {
					if (child !== null && this.dfs(word, i + 1, child)) {
						return true;
					}
				}

				return false;
			} else {
				const characterIndex = this.getCharIndex(character);

				if (!current.children[characterIndex]) return false;

				current = current.children[characterIndex];
			}
		}

		return current.isEndOfWord;
	}
}
