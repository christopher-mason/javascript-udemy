// strings
console.log('Hello, World');

let email = 'cmay@gmail.com';
console.log(email);

// string concatenation
let firstName = 'Charlie';
let lastName = 'Mayfield';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]); // equals C
console.log(fullName[2]); // equals a

// string length
console.log(fullName.length); // equals 16 since the space is counted. The .length is just a property

// string methods
console.log(fullName.toUpperCase()) // actually calls something
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@'); // this is an argument/parameters
console.log(index);






// alert('Hello, World');
// console.log(1);
// console.log(2);

// let myAge = 25; // create variables
// let year = 2021;

// console.log(myAge, year);

// age = 30; // since already defined, this will change the value
// console.log(myAge);

// const points = 100; // creates absolute variable
// console.log(points);

// // points = 50; // can't do

// var score = 75; // var is old way to create variables. now we use "let" and "const"
// console.log(score);