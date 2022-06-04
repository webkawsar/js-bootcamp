

// Hoisting
console.log(firstName); //undefined
var firstName = 'Kawsar'; 


// console.log(lastName); // error
const lastName = 'Ahmed';


statementFunc();
function statementFunc() {

    console.log('This is function statement');
}



expressionFunc(); // error
const expressionFunc = () => {
    console.log('This is function expression');
}



















