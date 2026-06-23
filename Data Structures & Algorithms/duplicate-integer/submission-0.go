func hasDuplicate(nums []int) bool {
    seenValues := make(map[int]bool)

	for _, num := range nums {
		seenValues[num] = true
	}

	return len(seenValues) < len(nums)
}
