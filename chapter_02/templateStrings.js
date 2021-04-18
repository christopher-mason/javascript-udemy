// template strings
const title = 'Upside Down';
const author = 'Chris';
const likes = 3000;

const pokeset = "Champion's Path";
const pokemon = "Rainbow Rare Charizard VMAX";

let pokeresult = `The ${pokemon} is in the ${pokeset} set.`;

console.log(pokeresult);

let html = `
    <h2>${pokeset}</h2>
    <p>Contains ${pokemon}</p>
    <span>The ${pokemon} is in the ${pokeset} set.</span>`;

    console.log(html);

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way - use back ticks to enclose statement, then use ${} for variable names
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);