// Section 2: Lesson 8 ---------------------------
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// let calculation = 40 + 8 + 23 - 10;
// console.log(calculation);

// Section 2: Lesson 9 ---------------------------
console.log("Ryan");

let firstName = "Ryan";
console.log(firstName);
// NOTE: You cannot set a variable name to start with a number, & or uses a reserved JS keyword - IE: let 3years = 3;
// You can also define constants using all uppercase letters, IE: let PI = 3.1415;

// Section 2: Lesson 10
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun); // This shows you the data type for that variable (ie: string, object, boolean, etc.)

// Redefining a variable like below:
javascriptIsFun = "YES!"; // no need to use let or const to redifine a variable
console.log(typeof javascriptIsFun);

// Undefined data type:
let year;
console.log(year);
console.log(typeof year);

year = 1991; // Used to be undefined, but redefining to a value (number data type)
