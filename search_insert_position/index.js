let searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
    while (low <= high) {
      const mid = low + Math.floor((low + high) / 2);

      if (nums[mid] < target) {
        low = mid + 1;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        return mid;
      }
    }

  return low
};

console.log(searchInsert([1],2));
