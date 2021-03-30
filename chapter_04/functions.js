// function declaration
// function greet(){
//     console.log('Hello There');
// }

// function expression (JS does not hoist expressions, but will for declarations)
// const speak = function(){
//     console.log('Good Day!');
// }; 

//greet();

//speak();



// arguments and parameters

const speak = function(name, time){ // want to receive 'name'. Only has scope of this function
    console.log(`good ${time} ${name}`);
};

speak("Mario", "morning"); // passing in this name as an argument. Has to be in order as function dictates
// you can assign default values in function name.
    // Ex: const speak = function(name = "Luigi", time = "Night")