// const para = document.querySelector('p');
// const para = document.querySelector('.error'); // The dot indicates class name which is in HTML
// const para = document.querySelector('div.error'); // only one class name with div on HTML
// const para = document.querySelector('body > h1'); // Copy as selector from browser, then paste here

// console.log(para);

const paras = document.querySelectorAll('p'); // This is not an array list, but can act like it
const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//     console.log(para);
// })

console.log(paras);
console.log(errors);