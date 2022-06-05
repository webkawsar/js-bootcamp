



// Function

// basic function
function sayHi() {
    console.log('Hi');
}
sayHi();


// return in function
function sayHi2(name) {
    return 'Hi ' + name;
}
console.log(sayHi2('Mr. Delete Khan'));


// function as a object
function funcObject() {

    console.log('Function as a object');
}
funcObject();
funcObject.fullName = 'Kawsar Ahmed';
console.log(funcObject.fullName);


// function statement
function functionStatement() {

    console.log('This is function statement');
}
functionStatement();


// function expression
const functionExpression = function() {

    console.log('This is function expression');
}

functionExpression();




//Functions Can Be Used as Values
function myFunction(a, b) {
    return a * b;
}
  
let x = myFunction(4, 3) * 2;
console.log(x);


// function can apply method
let text = myFunction.toString();
console.log(text);

// without var / const / let keyword define variable make  a global variable
function restInObject() {
    discount = 0.10;
 }
 
 restInObject();
 console.log(discount);
 

