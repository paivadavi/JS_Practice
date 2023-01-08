//Task - Write a function that receives an argument, iterates until that argument
// and sums all the multiples of 3 or 5 that it encounters.

function sumMultiples (number) {
    let sumOfMultiples = 0;
    for(let i = 1; i <= number; i++){
        if (i % 3 === 0 || i % 5 === 0)
            sumOfMultiples += i;
    }
    return sumOfMultiples;
}

console.log(sumMultiples(10));