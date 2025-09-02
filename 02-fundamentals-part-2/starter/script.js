console.log("Part 2 Functions Ready!");
////////////////////////////////////
// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

// Function declaration
function logger() {
  console.log("My name is Mherylle");
}

// Calling / running / invoking the function
logger();
logger();
logger();
console.log(fruitProcessor(5.5, ));

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);
//Function
const calAge = function (birthYear) {
  const age = 2025 - birthYear;
  return age;
};
const age1 = calAge(1998);
console.log(age1);
console.log(calAge(1991));

function introduce(firstName, lastName, age){
    const introduction = `Hi I am  ${firstName} ${lastName} and I am ${age} years old.`;
    return introduction;
}
console.log(introduce("Mherylle", "Pascual", 26));
console.log(introduce("Jonas", "Schmedtmann", 46));

function yearUntilRetirement(birthYear) {
  const age = calAge(birthYear);
  const retirementAge = 65;
  const yearsLeft = retirementAge - age;
  if (yearsLeft > 0) {
    return `You have ${yearsLeft} years left until retirement.`;
  } else {
    return "You are already retired!";
  }
}

console.log (yearUntilRetirement(1998, "Mherylle"));

/// function scope
const globalVar = "I am a global ";
function testScope() {
  const localVar = "I am a local ";
  console.log(globalVar);
  console.log(localVar);
}
testScope();
console.log(globalVar);
//console.log(localVar);


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


console.log("=== Gymnastics Challenge ===");

// Function to calculate the average of 3 scores
function calcAverage(score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  return average;
}

// Function to determine the winner
function checkWinner(avgDolphins, avgKoalas) {
  console.log("Dolphins average:", avgDolphins);
  console.log("Koalas average:", avgKoalas);

  if (avgDolphins >= 2 * avgKoalas) {
    console.log("🏆 Dolphins win with", avgDolphins, "vs.", avgKoalas);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log("🏆 Koalas win with", avgKoalas, "vs.", avgDolphins);
  } else {
    console.log("No team wins... try again!");
  }
}

// Test Data 1
console.log("=== Test Data 1 ===");
const dolphinsAvg1 = calcAverage(44, 23, 71);
const koalasAvg1 = calcAverage(65, 54, 49);
checkWinner(dolphinsAvg1, koalasAvg1);

console.log("-------------------");

// Test Data 2
console.log("=== Test Data 2 ===");
const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);
checkWinner(dolphinsAvg2, koalasAvg2);
