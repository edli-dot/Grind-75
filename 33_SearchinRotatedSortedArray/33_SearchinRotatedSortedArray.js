var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      // Found the pivot point
      l = mid + 1;
      break;
    } else if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  let start = l;
  l = 0;
  r = nums.length - 1;

  // Is target below or above the pivot
  if (target >= nums[start] && target <= nums[r]) {
    l = start;
  } else {
    r = start - 1;
  }

  // Perform binary search
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

module.exports = search;
