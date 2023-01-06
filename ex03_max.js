// Task: Write a function that takes two numbers and returns the maximum of the two.

function getMax(num1, num2) {
    let max = 0;
    if (num1 > num2 || num1 === num2) 
        max = num1;
    else if (num2 > num1)
        max = num2;
    return max;
}

//TESTING THE FUNCTION

console.log(getMax(2, 5));
console.log(getMax(6, 1));
console.log(getMax(3, 3));