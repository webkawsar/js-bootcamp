

// JS Scope

var varVariable = 'var variable';
const constVariable = 'const variable';
let letVariable = 'let variable';


function scopeFunc() {

    // var varVariable = 'changed var variable';
    
    console.log(varVariable);
    console.log(constVariable);
    console.log(letVariable);

    // console.log(firstName);

    return function innerFunc() {

        varVariable = 'changed var variable';
        letVariable = 'changed let variable';

        const firstName = 'Kawsar';
        console.log(firstName);
        console.log(varVariable);
        console.log(letVariable);
    }
}

scopeFunc()();
// console.log(firstName); // error

console.log(varVariable);
console.log(constVariable);
console.log(letVariable);


















