// Task - Write a function that receives an array with all the marks 
// of a student.
// 1 - Calulate the average
// 2 - Based on the average, return the student's grade

function calculateGrade(marks) {
    let average = getAverage(marks);

    if (60 <= average ) {
        if (90 <= average)
            return "A";
        if (80 <= average)
            return "B";
        if (70 <= average)
            return "C";
        if (60 <= average)
            return "D";
    }

    return "F";
}

function getAverage(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    
    return sum / 3;
}

console.log(calculateGrade([80, 80, 50]));

