// Practicing creating factory functions

function createPerson(name, surname, age, country) {
  return {
    name,
    surname,
    age,
    country,
    greet() {
      console.log("Hello, my name is " + name + " " + surname 
                  + "I am " + age + " years old and from " + country);
    }
    
  }



}
