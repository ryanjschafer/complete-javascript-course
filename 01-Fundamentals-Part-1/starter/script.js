// Section 2: Lesson 8 - LINKING A JS FILE ---------------------------
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// let calculation = 40 + 8 + 23 - 10;
// console.log(calculation);

// ================================================================

// Section 2: Lesson 9 - VALUES AND VARIABLES ---------------------------
console.log("Ryan");

let firstName = "Ryan";
console.log(firstName);
// NOTE: You cannot set a variable name to start with a number, & or uses a reserved JS keyword - IE: let 3years = 3;
// You can also define constants using all uppercase letters, IE: let PI = 3.1415;

// ================================================================

// Section 2: Lesson 11 - DATA TYPES ---------------------------
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

// ================================================================

// Section 2: Lesson 12 - LET, CONST, VAR ---------------------------
let age = 30; // let allows you to "mutate" variable later in the code
age = 31;

const birthYear = 1995; // this is immmutable and cannot be changed under const

// const job; this will cause an error, can't be "undefined"

// Avoid using "var" to define variables as it is an old way. Uses pretty much the same way as "let"

// ================================================================

// Section 2: Lesson 13 - BASIC OPERATORS ---------------------------
// Mathematic operators

const now = 2037;
const ageRyan = now - 1991;
const ageJonas = now - 2018;
console.log(ageRyan, ageJonas);

console.log(ageRyan * 2, ageRyan / 10, 2 ** 3); // You can add multiple math statements in one console.log()
// 2 ** 3 means 2 to the power of 3 = 2x2x2

const firstNameMe = "Ryan";
const lastName = "Schafer";
console.log(firstName + " " + lastName); // This will outpuut "Ryan Schafer"

// Assignment Operators (=)
let x = 10 + 5; // x will be equal to 15 in this example
x += 10; // x = x + 10, should now be 25 as we are adding 10 to 15 in line 67
x *= 4; // x = x * 4 = 100 (still compounting from line 68)
x++; // x = x + 1 = 101 (added form line 69)
x--; // equals 100, opposite of ++, decreases value by 1
console.log(x);

// Comparison Operators (produces boolean operations)
console.log(ageRyan > ageJonas); // true, as previously defined on lines 55 and 56

console.log(ageJonas >= 18); // true as defined on line 56

const isFullAge = ageJonas >= 18; // Stores line 77 as a variable

consol.log(now - 1991 > now - 2018); // returns true
