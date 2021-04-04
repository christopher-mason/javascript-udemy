// Primitive vs. Reference Types

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// Reference values

userOne = { name: 'Ryu', age: 30};
userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'Chris';
console.log(userOne, userTwo);
