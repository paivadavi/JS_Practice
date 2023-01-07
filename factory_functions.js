//Creating a factory function that returns person objects

function createPerson(name, surname, age, country) {
    return {
        name,
        surname,
        age,
        country,
        greet() {
            console.log("\nHello, my name is " + name + " " + surname 
                  + " I am " + age + " years old and from " + country);
        }
    }
}

//TESTING THE FUNCTION

const person01 = createPerson("Davi", "Paiva", 22, "Brazil");

const person02 = createPerson("Jane", "Brooks", 34, "USA");

const person03 = createPerson("Mika", "Fields", 25, "Canada");

const person04 = createPerson("Carla", "Sanchez", 19, "Mexico");

const person05 = createPerson("Diogo", "Defante", 29, "Brazil");

person01.greet();
person02.greet();
person03.greet();
person04.greet();
person05.greet();

