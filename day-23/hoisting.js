

// JS Hoisting
// creation stage
// execution stage
console.log(myVar);
var myVar = 10;
sum(5, 3);
console.log('Hi Guys');
function sum(num1, num2) {
    console.log(num1 + num2);
}


testFunc();
const testFunc = () => {
    console.log('Test func');
}

console.log(a);
const a = 'Hi';

















