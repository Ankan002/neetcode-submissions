class Solution {
	/**
	 * @param {number} r
	 * @param {number} c
	 * @param {string[][]} grid
	 * @param {boolean[][]} visitedPlaces
	 */
	bfs(r, c, grid, visitedPlaces) {
		const numOfRows = grid.length;
		const numOfCols = grid[0].length;

		const bfsQueue = [];

		bfsQueue.push([r, c]);

		const directions = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
		];

		while (bfsQueue.length) {
			const [currentRow, currentColumn] = bfsQueue.shift();

			for (const direction of directions) {
				let row = currentRow + direction[0];
				let column = currentColumn + direction[1];

				if (
					row >= 0 &&
					row < numOfRows &&
					column >= 0 &&
					column < numOfCols &&
					grid[row][column] === "1" &&
					!visitedPlaces[row][column]
				) {
					visitedPlaces[row][column] = true;
					bfsQueue.push([row, column]);
				}
			}
		}
	}

	/**
	 * @param {string[][]} grid
	 * @return {number}
	 */
	numIslands(grid) {
		const numOfRows = grid.length;
		const numOfCols = grid[0].length;

		const visitedPlaces = new Array(numOfRows);

		for (let i = 0; i < numOfRows; i++) {
			visitedPlaces[i] = new Array(numOfCols).fill(false);
		}

		let numberOfIslands = 0;

		for (let i = 0; i < numOfRows; i++) {
			for (let j = 0; j < numOfCols; j++) {
				if (grid[i][j] === "1" && !visitedPlaces[i][j]) {
					numberOfIslands++;
					this.bfs(i, j, grid, visitedPlaces);
				}
			}
		}

		return numberOfIslands;
	}
}
