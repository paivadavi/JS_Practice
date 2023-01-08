// Camel Notation: 
// Pascal Notation: OneTwoThreeFour

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    } 
}

const circle = new Circle(1);

// Factory vs constructor functions

// You should choose one of them and stick to it, they are practically the same.

