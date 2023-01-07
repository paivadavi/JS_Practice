//Task: Iterate through an array and count the number of truthy values.

const array = [0, null, undefined, '', 2, 3, NaN];


function countTruthy(array) {
    let truthyCounter = 0;
    for (let value of array) 
        (value == false) ? truthyCounter += 1 : truthyCounter += 0;
    
    return truthyCounter; 
}

console.log(countTruthy(array));