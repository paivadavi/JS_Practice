//Task - Write a fucntion that iterates through an object and prints the value of every
// property of the type string.


const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};



function showProperties(obj) {
    for (let property in movie)
        if (typeof movie[property] === "string")
            console.log(property, movie[property]);
}

showProperties(movie);