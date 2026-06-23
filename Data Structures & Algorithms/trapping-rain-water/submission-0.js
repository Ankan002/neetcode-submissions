class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMaxHeight = 0;
		let rightMaxHeight = 0;
		let total = 0;

		let currLeft = 0;
		let currRight = height.length - 1;

		while (currLeft < currRight) {
			if (height[currLeft] <= height[currRight]) {
				if (leftMaxHeight > height[currLeft]) {
					total += leftMaxHeight - height[currLeft];
				} else {
					leftMaxHeight = height[currLeft];
				}

				currLeft++;
			} else {
				if (rightMaxHeight > height[currRight]) {
					total += rightMaxHeight - height[currRight];
				} else {
					rightMaxHeight = height[currRight];
				}

				currRight--;
			}
		}

		return total;
    }
}
