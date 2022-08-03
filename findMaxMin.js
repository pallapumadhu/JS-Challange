const arr = [1,100, 2, 3, 4];

function findMaxMin(arr)
{
  let max = arr[0];
  let min = arr[0];
  //write your logic here
  arr.forEach(val => {
    if (val > max) { max = val; }
    if (val < min) { min = val; }
  });
  return {
    "max": max,
    "min": min
  };
}
console.log(findMaxMin(arr));

// Returns object { "max": 100, "min": 1 }