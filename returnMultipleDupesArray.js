
const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];

function returnMultipleDupesArray(arr) {
    //write your logic here
    let result = [];
    arr.forEach(item => {
      if(result.indexOf(item) < 0 && arr.indexOf(item) != arr.lastIndexOf(item)){
        result.push(item);
      }
    });
    return result;
  }

  
console.log(returnMultipleDupesArray(arr)); // prints [1, 6, 7, 10]