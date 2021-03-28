// variables and block scope
let age = 30;

if(true){
    let age = 40; // we can redefine variable inside code block
    let name = "Chris";
    console.log("Inside 1st code block: ", age, name);

    if(true){
        // let age = 50; // i can redefine this too
        console.log("Inside 2nd code block: ", age); // this variable takes 40 since it's still inside 1st block
    }
}

console.log("Outside code block: ", age);

// using var type, ignores block code. So we use 'let' and 'const'