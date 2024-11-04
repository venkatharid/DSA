function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // Peak is in the left half or it is the mid element
            right = mid;
        } else {
            // Peak is in the right half
            left = mid + 1;
        }
    }

    // Left and right converge to the peak element
    return left;
}
