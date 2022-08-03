let arr = [1, 5, 6, 1, 0, 1];

function findSumPairs(arr, S) {
  //write your logic here
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (S == arr[i] + arr[j]) sum.push([arr[i], arr[j]]);
    }
  }
  return sum;
}

console.log(findSumPairs(arr, 6));
// prints [[5, 1], [1, 5], [0, 6], [1, 5]]
