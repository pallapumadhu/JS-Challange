let inputarr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];

function numbersFirstAlphabetsSecond(inputArr){
    let numbers = [];
    let alpa = [];
    //write your logic here
    inputArr.forEach(item => {
        if(isNaN(item)){
            if(item.match(/[a-zA-Z]/g)){
                alpa.push(item);
            }else{
                numbers.push(item); 
            }
        }else{
            numbers.push(item); 
        }
    });
    return [...numbers,...alpa]
}

console.log(numbersFirstAlphabetsSecond(inputarr))