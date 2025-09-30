// 'use strict';
// console.log(varX)
// //console.log(letX)
// //console.log(constX)
// var varX = 1;
// let letX = 2;
// const constX = 3;
// console.log(addDecl(5, 3));
// console.log(addExpr(5, 3));
// function addDecl (a, b ) {
//   return a + b;
// // }

// // const addExpr = function (a, b) {
// //     return a + b;
// // };

// // const addArrow = (a, b) => a + b;

// conts person ={
//     name:'jonas',
//     greet:function(){
//         console.log('hello iam', this.name);
//     },

// };
// person.greet();

// const anotherPerson = { name:'Sarah'};
// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// greetFunction();

// conts obj -; {
//     name:'Object',
//     regularMethod:function(){
//         console.log('Regular :', this.name);
//     },
//     arrowMethod:() => {
//         console.log('Arrow :', this.name);
//     },
// };

// obj.regularMethod();
// obj.arrowMethod();
// //primitive types
// const timer = {
//     name: 'Timer',
//     seconds: 0,
//     start: function () {
//         console.log(`${this.name} starting....`);
//         const self = this;
//         setTimeout(function () {
//             console.log(`${self.name} finished`);
//         }, 1000);
//     },
//     startModern: function () {
//         console.log(`${this.name} starting....`);
//         setTimeout(() => {
//             console.log(`${this.name} finished`);
//         }, 1500);
//     }
// };

// timer.start();
// timer.startModern();

cont functionType = {
    regularFunction: function () {
        console.log (Arguments length, arguments.length);
        console.loh(first arguments, arguments[0]);
    }
    arrowFunction: () => {
        consoole.log(Arguments)
        console.log('Arrow Function Called');
    },
    modernFunction:(...args) => {
        console.log ('Args length', args.length);
        console.log('First argument', args[0]);
    }
};
functionType.regularFunction('hello','world');
functionType.arrowFunction('test');
functionType.modernFunction('modern','function','here');

// // // let js = 'amazing';
// // if (js === 'amazing') alert('JavaScript is FUN!');










// // let age = 30;
// // let oldAge = age;
// // age = 31;
// // console.log('age', age);
// // console.log('oldAge', oldAge);

// // const me = { name: 'Mherylle', age: 26 };
// // const friend = me;
// // friend.age = 23;
// // console.log('Me', me);
// // console.log('Friend', friend);
// const original ={
//     name:'Alice',
//     age:25,
//     hobbies:['reading','traveling'],
// };
// conts shallowCopy = {...original};
// shallowCopy.Name ='Bob';
// console.log('Original name', original.name);
// console.log('Cpy name', shallowCopy.name);
// shallowCopy.hobbies.push('gaming');
// // console.log('Original hobbies', original.hobbies);
// // console.log('Copy hobbies', shallowCopy.hobbies);   

const DeepOriginal = {
    name: 'Charlie',
    age: 32,
    // nested object
    address: { city: 'Paris', country: 'France' },
    hobbies: ['Travel', 'Photography'],
};
const deepCopy = structuredClone(DeepOriginal);
deepCopy.address.city = 'London';
deepCopy.name = 'Dave';
console.log(DeepOriginal);
console.log(deepCopy);
