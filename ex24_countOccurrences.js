const numbers = [1, 2, 3, 4, 1];
const count = reducedOccurences(numbers, 2);




console.log(count);


function countOccurences(array, searchElement){
    let count = 0;
    for (let number of array)
        if (number === searchElement)
            count++;
    
    return count;
}

function reducedOccurences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        if (current === searchElement)
            accumulator++;
    }, 0);
}

function areEqual(firstValue, secondValue) {
    return firstValue === secondValue;
}
