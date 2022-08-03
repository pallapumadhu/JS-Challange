// Input: "Welcome to this Javascript Guide!"
// Output: "emocleW ot siht tpircsavaJ !ediuG"
let inputStr = "Welcome to this Javascript Guide!";

function reverseStr(str){
  //write your logic here
  let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}

console.log(reverseStr(inputStr))
