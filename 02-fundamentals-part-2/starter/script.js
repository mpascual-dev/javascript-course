// console.log("Part 2 Functions Ready!");
// ////////////////////////////////////
// // Functions - Declarations and Expressions
// console.log("=== FUNCTIONS ===");

// // Function declaration
// function logger() {
//   console.log("My name is Mherylle");
// }

// // Calling / running / invoking the function
// logger();
// logger();
// logger();
// console.log(fruitProcessor(5.5, ));

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 3);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);
// //Function
// const calAge = function (birthYear) {
//   const age = 2025 - birthYear;
//   return age;
// };
// const age1 = calAge(1998);
// console.log(age1);
// console.log(calAge(1991));

// function introduce(firstName, lastName, age){
//     const introduction = `Hi I am  ${firstName} ${lastName} and I am ${age} years old.`;
//     return introduction;
// }
// console.log(introduce("Mherylle", "Pascual", 26));
// console.log(introduce("Jonas", "Schmedtmann", 46));

// function yearUntilRetirement(birthYear) {
//   const age = calAge(birthYear);
//   const retirementAge = 65;
//   const yearsLeft = retirementAge - age;
//   if (yearsLeft > 0) {
//     return `You have ${yearsLeft} years left until retirement.`;
//   } else {
//     return "You are already retired!";
//   }
// }

// console.log (yearUntilRetirement(1998, "Mherylle"));

// /// function scope
// const globalVar = "I am a global ";
// function testScope() {
//   const localVar = "I am a local ";
//   console.log(globalVar);
//   console.log(localVar);
// }
// testScope();
// console.log(globalVar);
// //console.log(localVar);


// ////////////////////////////////////
// // Functions - Practice
// console.log("=== GREET STUDENT FUNCTION ===");

// // Function declaration
// function greetStudent(studentName) {
//   return "Hello " + studentName + ", welcome to JavaScript!";
// }

// // Calling the function with your name
// const greeting1 = greetStudent("Mherylle");
// console.log(greeting1);

// // Calling with other names
// const greeting2 = greetStudent("Jonas");
// console.log(greeting2);

// const greeting3 = greetStudent("Michael");
// console.log(greeting3);

// // You can also call it directly inside console.log
// console.log(greetStudent("Bob"));


// console.log("=== Gymnastics Challenge ===");

// // Function to calculate the average of 3 scores
// function calcAverage(score1, score2, score3) {
//   const average = (score1 + score2 + score3) / 3;
//   return average;
// }

// // Function to determine the winner
// function checkWinner(avgDolphins, avgKoalas) {
//   console.log("Dolphins average:", avgDolphins);
//   console.log("Koalas average:", avgKoalas);

//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log("🏆 Dolphins win with", avgDolphins, "vs.", avgKoalas);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log("🏆 Koalas win with", avgKoalas, "vs.", avgDolphins);
//   } else {
//     console.log("No team wins... try again!");
//   }
// }

// // Test Data 1
// console.log("=== Test Data 1 ===");
// const dolphinsAvg1 = calcAverage(44, 23, 71);
// const koalasAvg1 = calcAverage(65, 54, 49);
// checkWinner(dolphinsAvg1, koalasAvg1);

// console.log("-------------------");

// // Test Data 2
// console.log("=== Test Data 2 ===");
// const dolphinsAvg2 = calcAverage(85, 54, 41);
// const koalasAvg2 = calcAverage(23, 34, 27);
// checkWinner(dolphinsAvg2, koalasAvg2);

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// const mixed = ["Jonas", 40, false, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // Accessing Array Elements
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// //access the length
// console.log(friends.length);
// //changing array element
// friends[0]="Jay";
// console.log(friends);   

// const calAge = function (birthYear) {
//   return 2025 - birthYear;
  
// };

// const ages = [calAge(2000), calAge(1940), calAge(1991)];
// console.log(ages);

// const newlength = friends.push("John");
// console.log(friends);
// console.log(newlength);

// friends.unshift("Mark");
// console.log(friends);

// // removing element
// //remove last item in the list
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// // remove first item in the list
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// //finding an element
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Mark"));

// //includes
// console.log(friends.includes("Steven"));
// console.log(friends.includes("John"));
// //array iteration

// //traditional for loop
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }
// // one way to create for each
// friends.forEach(function (friend, index) {
//   console.log(`${index + 1}: ${friend}`);

// });
// friends.forEach(
//     (friend, index) => {
//         console.log(`${index + 1}: ${friend}`);
//     }       

// )
// const grade2 = [85, 92, 78, 96, 88, 74];
// let total = 0;
// for (let i = 0; i < grade2.length; i++) {
//   total += grade2[i];
// }
// const average = total / grade2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount=0;
// grade2.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(` ${passedCount} out of ${grade2.length} students passed.`);

// let passedCount2 = 0;
// grade2.forEach((grade) => {
//   if (grade >= 70) passedCount2++;
// });
// console.log(` ${passedCount2} out of ${grade2.length} students passed.`);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];
console.log("Grades:", grades);

// Calculate average grade
function calculateAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total = total + grades[i];
  }
  let average = total / grades.length;
  return average;
}

// Find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// Find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// Count passing students
function countPassing(grades, passingGrade) {
  let passCount = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      passCount = passCount + 1;
    }
  }
  return passCount;
}

// Results
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log("Average:", average.toFixed(2));
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Passing students:", passing, "out of", grades.length);

