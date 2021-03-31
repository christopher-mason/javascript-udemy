// callbacks and foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => { // calling back above function as an argument
//     // do something
//     console.log(value);
// });

let peoples = ["Mario", "Luigi", "Ryu", "Chris", "Jin"];

const logPersons = (persons, index) => {
    console.log(`${index}, Hello ${persons}`);
};

peoples.forEach(logPersons) // the dot foreach iterates over an array



// get a reference to the "ul"
const ul = document.querySelector(".people"); // need this to link to index.html

const people = ["Mario", "Luigi", "Ryu", "Chris", "Jin"];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;