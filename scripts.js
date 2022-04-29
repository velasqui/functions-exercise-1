function getAreaOfCircle (radius) {
    return Math.PI * (radius*radius);
}

console.log(getAreaOfCircle (5)); // 78.53981633974483

function getCircumferenceOfCircle (radius) {
    return 2 * Math.PI * radius;
}

console.log(getCircumferenceOfCircle (10)); // 62.83185307179586

function getAreaOfSquare (side) {
    return side * side;
}

console.log(getAreaOfSquare (15)); // 225

function getAreaOfTriangle (base, height) {
    return (base * height) / 2;
}

console.log(getAreaOfTriangle (20, 6)); // 60