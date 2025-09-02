// // // // console.log("Part 2 Functions Ready!");
// // // // ////////////////////////////////////
// // // // // Functions - Declarations and Expressions
// // // // console.log("=== FUNCTIONS ===");

// // // // // Function declaration
// // // // function logger() {
// // // //   console.log("My name is Mherylle");
// // // // }

// // // // // Calling / running / invoking the function
// // // // logger();
// // // // logger();
// // // // logger();
// // // // console.log(fruitProcessor(5.5, ));

// // // // function fruitProcessor(apples, oranges) {
// // // //   console.log(apples, oranges);
// // // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // //   return juice;
// // // // }

// // // // const appleJuice = fruitProcessor(5, 3);
// // // // console.log(appleJuice);

// // // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // // console.log(appleOrangeJuice);

// // // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // // const juice1 = fruitProcessor(5, 0);
// // // // const juice2 = fruitProcessor(2, 4);
// // // // const juice3 = fruitProcessor(3, 2);
// // // // //Function
// // // // const calAge = function (birthYear) {
// // // //   const age = 2025 - birthYear;
// // // //   return age;
// // // // };
// // // // const age1 = calAge(1998);
// // // // console.log(age1);
// // // // console.log(calAge(1991));

// // // // function introduce(firstName, lastName, age){
// // // //     const introduction = `Hi I am  ${firstName} ${lastName} and I am ${age} years old.`;
// // // //     return introduction;
// // // // }
// // // // console.log(introduce("Mherylle", "Pascual", 26));
// // // // console.log(introduce("Jonas", "Schmedtmann", 46));

// // // // function yearUntilRetirement(birthYear) {
// // // //   const age = calAge(birthYear);
// // // //   const retirementAge = 65;
// // // //   const yearsLeft = retirementAge - age;
// // // //   if (yearsLeft > 0) {
// // // //     return `You have ${yearsLeft} years left until retirement.`;
// // // //   } else {
// // // //     return "You are already retired!";
// // // //   }
// // // // }

// // // // console.log (yearUntilRetirement(1998, "Mherylle"));

// // // // /// function scope
// // // // const globalVar = "I am a global ";
// // // // function testScope() {
// // // //   const localVar = "I am a local ";
// // // //   console.log(globalVar);
// // // //   console.log(localVar);
// // // // }
// // // // testScope();
// // // // console.log(globalVar);
// // // // //console.log(localVar);


// // // // ////////////////////////////////////
// // // // // Functions - Practice
// // // // console.log("=== GREET STUDENT FUNCTION ===");

// // // // // Function declaration
// // // // function greetStudent(studentName) {
// // // //   return "Hello " + studentName + ", welcome to JavaScript!";
// // // // }

// // // // // Calling the function with your name
// // // // const greeting1 = greetStudent("Mherylle");
// // // // console.log(greeting1);

// // // // // Calling with other names
// // // // const greeting2 = greetStudent("Jonas");
// // // // console.log(greeting2);

// // // // const greeting3 = greetStudent("Michael");
// // // // console.log(greeting3);

// // // // // You can also call it directly inside console.log
// // // // console.log(greetStudent("Bob"));


// // // // console.log("=== Gymnastics Challenge ===");

// // // // // Function to calculate the average of 3 scores
// // // // function calcAverage(score1, score2, score3) {
// // // //   const average = (score1 + score2 + score3) / 3;
// // // //   return average;
// // // // }

// // // // // Function to determine the winner
// // // // function checkWinner(avgDolphins, avgKoalas) {
// // // //   console.log("Dolphins average:", avgDolphins);
// // // //   console.log("Koalas average:", avgKoalas);

// // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // //     console.log("🏆 Dolphins win with", avgDolphins, "vs.", avgKoalas);
// // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // //     console.log("🏆 Koalas win with", avgKoalas, "vs.", avgDolphins);
// // // //   } else {
// // // //     console.log("No team wins... try again!");
// // // //   }
// // // // }

// // // // // Test Data 1
// // // // console.log("=== Test Data 1 ===");
// // // // const dolphinsAvg1 = calcAverage(44, 23, 71);
// // // // const koalasAvg1 = calcAverage(65, 54, 49);
// // // // checkWinner(dolphinsAvg1, koalasAvg1);

// // // // console.log("-------------------");

// // // // // Test Data 2
// // // // console.log("=== Test Data 2 ===");
// // // // const dolphinsAvg2 = calcAverage(85, 54, 41);
// // // // const koalasAvg2 = calcAverage(23, 34, 27);
// // // // checkWinner(dolphinsAvg2, koalasAvg2);

// // // // const grades = [85, 92, 78, 96, 88];
// // // // console.log(grades);

// // // // const friends = ["Michael", "Steven", "Peter"];
// // // // console.log(friends);
// // // // const mixed = ["Jonas", 40, false, friends];
// // // // console.log(mixed);

// // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // console.log(years);

// // // // // Accessing Array Elements
// // // // console.log(friends[0]);
// // // // console.log(friends[1]);
// // // // console.log(friends[2]);
// // // // console.log(friends[3]);

// // // // //access the length
// // // // console.log(friends.length);
// // // // //changing array element
// // // // friends[0]="Jay";
// // // // console.log(friends);   

// // // // const calAge = function (birthYear) {
// // // //   return 2025 - birthYear;
  
// // // // };

// // // // const ages = [calAge(2000), calAge(1940), calAge(1991)];
// // // // console.log(ages);

// // // // const newlength = friends.push("John");
// // // // console.log(friends);
// // // // console.log(newlength);

// // // // friends.unshift("Mark");
// // // // console.log(friends);

// // // // // removing element
// // // // //remove last item in the list
// // // // const popped = friends.pop();
// // // // console.log(popped);
// // // // console.log(friends);
// // // // // remove first item in the list
// // // // const shifted = friends.shift();
// // // // console.log(shifted);
// // // // console.log(friends);

// // // // //finding an element
// // // // console.log(friends.indexOf("Steven"));
// // // // console.log(friends.indexOf("Mark"));

// // // // //includes
// // // // console.log(friends.includes("Steven"));
// // // // console.log(friends.includes("John"));
// // // // //array iteration

// // // // //traditional for loop
// // // // for (let i = 0; i < friends.length; i++) {
// // // //   console.log(friends[i]);
// // // // }
// // // // // one way to create for each
// // // // friends.forEach(function (friend, index) {
// // // //   console.log(`${index + 1}: ${friend}`);

// // // // });
// // // // friends.forEach(
// // // //     (friend, index) => {
// // // //         console.log(`${index + 1}: ${friend}`);
// // // //     }       

// // // // )
// // // // const grade2 = [85, 92, 78, 96, 88, 74];
// // // // let total = 0;
// // // // for (let i = 0; i < grade2.length; i++) {
// // // //   total += grade2[i];
// // // // }
// // // // const average = total / grade2.length;
// // // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // // let passedCount=0;
// // // // grade2.forEach((grade) => {
// // // //   if (grade >= 70) passedCount++;
// // // // });
// // // // console.log(` ${passedCount} out of ${grade2.length} students passed.`);

// // // // let passedCount2 = 0;
// // // // grade2.forEach((grade) => {
// // // //   if (grade >= 70) passedCount2++;
// // // // });
// // // // console.log(` ${passedCount2} out of ${grade2.length} students passed.`);

// // // ////////////////////////////////////
// // // // Coding Challenge #2 - Student Grade Manager

// // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];
// // // console.log("Grades:", grades);

// // // // Calculate average grade
// // // function calculateAverage(grades) {
// // //   let total = 0;
// // //   for (let i = 0; i < grades.length; i++) {
// // //     total = total + grades[i];
// // //   }
// // //   let average = total / grades.length;
// // //   return average;
// // // }

// // // // Find highest grade
// // // function findHighestGrade(grades) {
// // //   let highest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if (grades[i] > highest) {
// // //       highest = grades[i];
// // //     }
// // //   }
// // //   return highest;
// // // }

// // // // Find lowest grade
// // // function findLowestGrade(grades) {
// // //   let lowest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if (grades[i] < lowest) {
// // //       lowest = grades[i];
// // //     }
// // //   }
// // //   return lowest;
// // // }

// // // // Count passing students
// // // function countPassing(grades, passingGrade) {
// // //   let passCount = 0;
// // //   for (let i = 0; i < grades.length; i++) {
// // //     if (grades[i] >= passingGrade) {
// // //       passCount = passCount + 1;
// // //     }
// // //   }
// // //   return passCount;
// // // }

// // // // Results
// // // const average = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);

// // // console.log("=== GRADE REPORT ===");
// // // console.log("Average:", average.toFixed(2));
// // // console.log("Highest:", highest);
// // // console.log("Lowest:", lowest);
// // // console.log("Passing students:", passing, "out of", grades.length);


// // // Array Problem
// // const mheryllearray = [
// //     "mherylle",
// //     "pascual",
// //     2025 - 1998,
// //     "student",
// //     ["Micheal","Peter","Steven"]

// // ];
// // console.log(mheryllearray[0]);
// // console.log(mheryllearray[1]);
// // console.log(mheryllearray[2]);
// // console.log(mheryllearray[3]);
// // console.log(mheryllearray[4]);

// // const mherylleobject = {
// //     firstName: "mherylle",
// //     lastName: "pascual",
// //     age: 2025 - 1998,
// //     job: "student",
// //     friends: ["Micheal","Peter","Steven"]

// // };

// // console.log(mherylleobject);
// // //property access
// // console.log(mherylleobject.firstName);
// // console.log(mherylleobject.lastName);
// // console.log(mherylleobject.age);

// // //bracket notation
// // console.log(mherylleobject["firstName"]);
// // console.log(mherylleobject["lastName"]);
// // console.log(mherylleobject["age"]);

// // const nameKey = "Name";
// // console.log(mherylleobject["first" + nameKey]);
// // console.log(mherylleobject["last" + nameKey]);

// // //modifying existing properties
// // mherylleobject.job = "Programmer";
// // mherylleobject.age = 30;

// // console.log(mherylleobject);

// // //add new properties
// // mherylleobject.location = "Philippines";
// // mherylleobject["twitter"] = "@MGPascual";
// // mherylleobject.hasdriverLicense = true;
// // console.log(mherylleobject);
// // // when to use dot vs bracket notation  
// // const property = "job";
// // console.log(mherylleobject[property]);

// ////////////////////////////////////
// // Selecting DOM Elements

// // querySelector - works with any CSS selector

// const message = document.querySelector(".message"); // Select by class
// const button = document.querySelector("#btn"); // Select by ID
// const heading = document.querySelector("h1"); // Select by tag
// const input = document.querySelector(".guess"); // Select by class

// console.log(message);
// console.log(button);
// console.log(heading);
// //query selector return matching element
// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);

// //getelementby ID
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// // message variable already declared above, so reuse it here
// console.log(message.textContent);
// message.textContent = "Hello From Javascript"  ;
// console.log(message.textContent);
// // innerHTML
// message.innerHTML = "<strong>Bold Text from JS</strong>";
// //innertext
// console.log(message.innerText);
// console.log(input.value);
// input.value = "Default text";
// heading.style.color = "red";
// heading.style.background = "yellow";    
// heading.style.fontSize = "3rem";
// button.style.padding = "20px";
//  ////////////////////////////////////
// // Event Listeners - User Interaction

// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// // addEventListener - the modern way to handle events
// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });

// element.addEventListener("eventType", function () {
//   // Code to run when event happens
// });

// element.addEventListener("eventType", function () {
//   // Code to run when event happens
// });
// // Input events fire every time user types
// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });
// // Keyboard events - responding to specific keys
// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = ""; // Clear input
//   }
// });

// // Global keyboard events
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     // Reset everything
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

// Grab elements
const score1El = document.getElementById("score-1");
const score2El = document.getElementById("score-2");
const addButtons = document.querySelectorAll(".btn-add");
const resetBtn = document.getElementById("btn-reset");
const winningInput = document.getElementById("winning-score");
const statusEl = document.querySelector(".status");
const targetEl = document.querySelector(".target");
const winnerEl = document.querySelector(".winner");
const winnerNameEl = document.querySelector(".winner-name");

// Game state
let score1 = 0;
let score2 = 0;
let winningScore = parseInt(winningInput.value);
let gameOver = false;

// Update target text
targetEl.textContent = winningScore;

// Function to update scores
function updateScore(player) {
  if (gameOver) return;

  if (player === 1) {
    score1++;
    score1El.textContent = score1;
  } else {
    score2++;
    score2El.textContent = score2;
  }

  checkWinner();
}

// Check if someone won
function checkWinner() {
  if (score1 >= winningScore) {
    declareWinner("Player 1");
  } else if (score2 >= winningScore) {
    declareWinner("Player 2");
  }
}

// Declare winner
function declareWinner(name) {
  gameOver = true;
  winnerEl.classList.remove("hidden");
  winnerNameEl.textContent = name;
  statusEl.textContent = `${name} wins!`;
}

// Reset game
function resetGame() {
  score1 = 0;
  score2 = 0;
  gameOver = false;
  score1El.textContent = score1;
  score2El.textContent = score2;
  winnerEl.classList.add("hidden");
  statusEl.textContent = `First to ${winningScore} wins!`;
}

// Event listeners for add buttons
addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = parseInt(btn.dataset.player);
    updateScore(player);
  });
});

// Reset button listener
resetBtn.addEventListener("click", resetGame);

// Winning score change listener
winningInput.addEventListener("input", () => {
  winningScore = parseInt(winningInput.value);
  targetEl.textContent = winningScore;
  resetGame();
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (!gameOver) {
    if (e.key === "1") updateScore(1);
    if (e.key === "2") updateScore(2);
  }
  if (e.key.toLowerCase() === "r") resetGame();
});
