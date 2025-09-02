console.log("Part 2 Functions Ready!");
////////////////////////////////////
// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

// Function declaration
function logger() {
  console.log("My name is Jonas");
}

// Calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);

console.log("Exercise 1: Personal Greeting");

////////////////////////////////////
// Functions - Practice
console.log("=== GREET STUDENT FUNCTION ===");

// Function declaration
function greetStudent(studentName) {
  return "Hello " + studentName + ", welcome to JavaScript!";
}

// Calling the function with your name
const greeting1 = greetStudent("Mherylle");
console.log(greeting1);

// Calling with other names
const greeting2 = greetStudent("Jonas");
console.log(greeting2);

const greeting3 = greetStudent("Michael");
console.log(greeting3);

// You can also call it directly inside console.log
console.log(greetStudent("Bob"));
