const multiply = (x,y) => x * y;

const square = x => multiply(x,x);

const isRightTriangle = (a, b, c) => {
    return square(a) + square(c) === square(c);
}

console.log("Before");

console.log(isRightTriangle(3,4,5));

console.log("After");
