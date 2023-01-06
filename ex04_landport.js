// Task: Create a function that receives a value for width and height and returns if an image is landscape

function getOrientation (width, height) {
    return (width > height);
}

console.log(getOrientation(800, 600));
console.log(getOrientation(700, 400));
