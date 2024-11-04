function searchRange(nums, target) {
    function findFirst(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let firstPosition = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                firstPosition = mid; // potential first position found
                right = mid - 1; // move left to find earlier occurrences
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return firstPosition;
    }

    function findLast(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let lastPosition = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                lastPosition = mid; // potential last position found
                left = mid + 1; // move right to find later occurrences
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return lastPosition;
    }

    const first = findFirst(nums, target);
    const last = findLast(nums, target);

    return [first, last];
}

// Example usage:
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
