// let ninjas = ['chris', 'eric', 'christina'];
let pokemon = ['Charizard', 'Ninetales', 'Blastoise'];
console.log(pokemon);

pokemon[2] = 'Vulpix';
console.log(pokemon[2]);
console.log(pokemon);
console.log(pokemon.length);
// let results = pokemon.join(', ');
// let results = pokemon.indexOf('Charizard');
let results = pokemon.concat(['Mew', 'Mewtwo']);
let resulty = pokemon.push('Mewtwo');
let removal = pokemon.pop();
console.log(results);
console.log(resulty);
console.log(removal);

// ninjas[1] = 'Ken'; // how to override 
// console.log(ninjas[1]); // position 1, not the first name in array

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['chris', 'eric', 'chrisitna', 30, 20];
// console.log(random);

//console.log(ninjas.length); // how many elements are in array. does not go by position

// array methods
// let result = ninjas.join(','); // takes arrays and joins them into single string separated by comma
// let result = ninjas.indexOf('eric'); // returns position of name
// let result = ninjas.concat(['ken', 'katie']); // adds these names to existing array
// let result = ninjas.push('ken'); // returns length of new array
// result = ninjas.pop(); // reutrns value it popped off. it will remove the last one off the array
// console.log(ninjas);