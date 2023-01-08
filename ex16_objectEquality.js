
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


// Checks if all the properties in both objects are the same.
function areEqual(address1, address2) {
    allEqual = true;
    for (let property in address1)
        if(address1[property] !== address2[property])
            allEqual = false;
    return allEqual;
}

// Checks if both variables reference to the same object
function areSame(address1, addreess2) {
    return (address1 === addreess2);
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');


console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));