// The function takes a number as input and prints all the integers up to that number.
// In  addition to that, it also says if the number is even or odd.

function evenOdd(number) {
    return (number % 2 ===0) ? "EVEN" : "ODD";
}


function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        console.log(i + " " + evenOdd(i));
    }
}

showNumbers(10)

