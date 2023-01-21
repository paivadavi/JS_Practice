//write a function that returns wether or not an array has a certain element

function includes(array, searchElement){
    for (let element of array)
        if (element === searchElement)
            return true;
            
    return false
}

const testArray = [1,2,3,4];
console.log(includes(testArray, 5));
console.log(includes(testArray, 1));
console.log(includes(testArray, 2));
console.log(includes(testArray, 3));
console.log(includes(testArray, 4));

testArray.push(5);

console.log(includes(testArray, 5));


