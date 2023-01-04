//Creating some example objects with fixed properties

let client = {
  name: "Ashley",
  surname: "Brown",
  age: 27,
  email: "ashley@brown.com"
}

let clientsDog = {
  name: "Doku",
  breed: "Corgi",
  age: "2"
}

let clientsCat = {
  name: "XicoLito",
  breed: "Maine Coon",
  age: 4
}

//Practicing referencing the objects with dot notation
console.log(client.name);
console.log(client.surname);
console.log(client.age);
console.log(clientsDog.name);
console.log(clientsCat.name);

//Practicing referencing the objects with bracket notation

console.log(client['name']);
console.log(client['surname']);
console.log(client['age']);
console.log(clientsDog['name']);
console.log(clientsCat['name'])


