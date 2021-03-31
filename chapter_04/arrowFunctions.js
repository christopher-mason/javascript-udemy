// regular function
// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// };

// arrow function
//const calcArea = radius => 3.14 * radius**2; // this does the same as above funtion
// can take away parantheses when there is only one argument. Ex: radius
// only time it's different is when we work with binding

// const area = calcArea(5);
// console.log('area is:', area);


// regular function
// const greet = function(){
//     return "Hello, World!";
// };

// arrow function
// const greet = () => "Hello, World!";
// console.log(greet());


// regular function
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };


// arrow function
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};


console.log(bill([10,15,30], 0.2));

