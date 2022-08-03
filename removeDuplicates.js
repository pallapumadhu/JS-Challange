let input = [
  {
    name:"Aman",
    age:32,
    address:{
      city:"Pune",
      state:"MH"
    }
  },
  {
    name:"Priya",
    age:32,
    address:{
      city:"Mumbai",
      state:"MH"
    }
  },
  {
    name:"Aman",
    age:32,
    address:{
      city:"Pune",
      state:"MH"
    }
  }
];
function removeDuplicates(inputArr){
  let outputDummyArr=[];  
  let outputArr=[];
  inputArr.forEach((item)=>{
     let objStr = JSON.stringify(item);
    if(outputDummyArr.indexOf(objStr) < 0){
      outputDummyArr.push(objStr);
      outputArr.push(item);
    }
  });
  //write logic here..
  return outputArr;
}
let result = removeDuplicates(input);
console.log(result);
