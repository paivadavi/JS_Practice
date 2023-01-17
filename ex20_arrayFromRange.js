//Create a function that receives two numbers and returns an array with all the values between those numbers.

function arrayFromRange(min, max){
    let newArray = [];
    for(let i = min; i <= max; i++){
        newArray.push(i);
    }
    return newArray;
}

console.log(arrayFromRange(1, 4));