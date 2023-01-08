// Write a factory function and a constructor function to initialize an 
// address object

function createAddress(street, city, zipCode) {
    return {
        street: street,
        city: city,
        zipCode: zipCode
    };
}

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address01 = createAddress("Koyaba", "Boston", "2390");

const address02 = new Address("Freedom avenue", "Washignton", "4645");

console.log(address01);

console.log(address02);

