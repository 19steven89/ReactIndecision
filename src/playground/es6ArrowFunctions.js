const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// }; 

const squareArrow = (x) => x * x;

console.log(squareArrow(8));
console.log(square(4));

const getFirstName = (fName) => fName.split(" ")[0];

const getFirstName2 = (fName) => {
    return fName.split(" ")[0];
}

console.log(getFirstName("Steven Barry"));
console.log(getFirstName2("Steven Barry"));
