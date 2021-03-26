// template strings
const title = 'Upside Down';
const author = 'Chris';
const likes = 3000;

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