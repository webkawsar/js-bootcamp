





// JS Array

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.
// const array_name = [item1, item2, ...]; 


// Using the JavaScript Keyword new
// const cars = new Array("Saab", "Volvo", "BMW");
const points = new Array(10); 
// sometimes produce unexpected result
console.log(points); 

// The two examples above do exactly the same.
// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.



const arr = [1, 3, 5, 7, 9];

// Accessing Array Elements
// You access an array element by referring to the index number
console.log(arr[0]);
console.log(arr[3]);


// Changing an Array Element
arr[0] = 11;
arr[8] = 8;

// WARNING !
// Adding elements with high indexes can create undefined "holes" in an array
console.log(arr[6]); // undefined
console.log(arr[7]); // undefined
console.log(arr);


console.log(arr[arr['length']-1]);
console.log(typeof(typeof arr));


// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
// Arrays are a special kind of objects, with numbered indexes.



// How to Recognize an Array

// A common question is: How do I know if a variable is an array?
// The problem is that the JavaScript operator typeof returns "object":

// Solution 1:
const fruits = ["Banana", "Orange", "Apple"];
console.log(Array.isArray(fruits));

// Solution 2:
console.log(fruits instanceof Array);


delete fruits[0];
console.log(fruits);


// The concat() method does not change the existing arrays. It always returns a new array.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);











