// // JavaScript Fundamentals - Hour 1
// // My first JavaScript code!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);
// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// firstName = "Bob";
// console.log(firstName);

// let age = 30;
// age = 31; // We can change let variables
// console.log(age);
// age ="50";
// console.log(age);   

// const birthYear = 1991; 
// console.log(birthYear);

// //birthYear = 2000;
// const PI= 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Philippines";
// const language = "Filipino";

// age =25;
// age = 26;

// // let firstName;
// // let myCurrentJob;
// // const PI

// console.log("=== DATA TYPES ===");
// //NUMBER
// let id = 12345;
// console.log(typeof id);
    
// //STRING
// let lastName = "Doe";
// console.log(lastName);
// console.log(typeof lastName);

// //Boolean

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// //underfined
// let year;
// console.log(year);
// console.log(typeof year);   

// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);

// //change to a string
// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable); // "Now I'm a string!", "string"

// //change to a boolean 
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable); // true, "boolean"

console.log("===Math Operators");
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
console.log("Addition:", 10 + 5); 
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3); 
console.log("Exponentiation:", 2 ** 3); 

const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName); 

console.log("Hello " + "World" + "!"); 
console.log("I am " + 25 + " years old"); 

console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5;
x += 10; 
console.log("Starts x += 10:", x);

x *= 4; 
console.log("Starts x *= 4:", x);

x /= 2; 
console.log("Starts x /= 2:", x);

console.log("=== Age Comparison ===");
console.log(ageJonas > ageSarah);
console.log(ageSarah > ageJonas);
console.log(ageJonas >= 18);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log("Is Sarah an adult", isFullAge);
console.log ("complex comparison:");
console.log(now - 1991 > now - 2018) ;

let z, y;
z = y = 25 - 10 - 5; 
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator
// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);
 
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;
 
// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / heightJohn ** 2;
 
// // const markHigherBMI = BMIMark > BMIJohn;
// // console.log(BMIMark);
// // console.log(BMIJohn);
// // console.log(markHigherBMI);
 
// // strings and templay literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
 
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);
 
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
 
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works here: ${2 + 3} equals five`);
 
// const age = 15;
// if (age >= 18) {
//   console.log('Sarahh can have a driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarahh is too young. Wait another ${yearsLeft} years`);
// }
 
// // 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
 
// ////////////////////////////////////
// // Coding Challenge #2
 
// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
 
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
 
// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
 
 
