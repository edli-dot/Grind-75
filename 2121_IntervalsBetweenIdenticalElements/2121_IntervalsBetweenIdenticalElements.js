var getDistances = function (arr) {
  let cache = {};
  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) cache[arr[i]].push(i);
    else cache[arr[i]] = [i];
  }

  let result = new Array(arr.length).fill(0);

  for (let key in cache) {
    let indices = cache[key];
    let n = indices.length;
    if (n === 1) continue;

    let prefixSum = new Array(n).fill(0);
    prefixSum[0] = indices[0];
    for (let i = 1; i < n; i++) {
      prefixSum[i] = prefixSum[i - 1] + indices[i];
    }

    for (let i = 0; i < n; i++) {
      let leftSum = prefixSum[i] - indices[i];
      let rightSum = prefixSum[n - 1] - prefixSum[i];
      result[indices[i]] =
        i * indices[i] - leftSum + rightSum - (n - 1 - i) * indices[i];
    }
  }

  return result;
};

/**
 * collect numbers = indices
 * distance would be current - sum of the Left + sum of the right - current
 */
