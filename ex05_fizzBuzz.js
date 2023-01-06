/* 
Task: Create a function to solve the FizzBuzz problem

CONDITIONS

Divisible by 3 => Fizz
Divisible by 5 => Buzz
Divisible by BOTH 3 and 5 => FizzBuzz
Not divisible by 3 or 5 => input
Not a number => 'Not a number'
*/

function fizzBuzz(number) {
    if (typeof number === "number") {
        if (number % 3 === 0 && number % 5 === 0)
            return "Not a Number";
        else if (number % 3 === 0 && number % 5 !== 0)
            return "Fizz"
        else if (number % 3 !== 0 && number % 5 === 0)
            return "Buzz"
        else 
            return String(number);
    } else {
        return "Not a number";
    }
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));
console.log(fizzBuzz("BlaBlaCar"));
