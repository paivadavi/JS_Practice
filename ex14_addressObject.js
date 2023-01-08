// Create an address object with the properties street, city, zipCode

// Create a function called showAddress(address) that displays all the properties in an object

const address = {
    street: "50th Avenue",
    city: "New York",
    zipcode: "1436"
};

function showAddress() {
    for (let property of Object.keys(address))
        console.log(property, address[property]);
}

showAddress(address);