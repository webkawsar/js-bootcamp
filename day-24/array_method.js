

// Arrays method


// Arrays are Objects
// const person = ["John", "Doe", 46];
// console.log(typeof person);





// Array Properties and Methods
// The length Property
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length);




// Accessing the First Array Element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[0];
// console.log(fruit);




// Accessing the Last Array Element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];
// console.log(fruit);





// Adding Array Elements
// const fruits = ["Banana", "Orange", "Apple"];
// const addedFruit = fruits.push("Lemon"); 
// console.log(addedFruit);
// const result = fruits.splice(fruits.length, 0, 'Mair')
// console.log(result);
// console.log(fruits);


// New element can also be added to an array using the length property
// Adding elements with high indexes can create undefined "holes" in an array
// fruits[fruits.length] = 'Kiwi';

// concat method can't modify main array
// const result = fruits.concat('Byte');
// console.log(result);

// fruits[8] = null;
// console.log(fruits[6]);
// console.log(fruits);



// How to Recognize an Array
// Solution 1:
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
// console.log(Array.isArray(fruits));

// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor:
// const fruits = ["Banana", "Orange", "Apple"];
// console.log(fruits instanceof Array);





// Converting Arrays to Strings
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());
// console.log(fruits.join(','));



// JavaScript Array push()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.push("Kiwi");
// console.log(result);


// JavaScript Array pop()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.pop();
// console.log(result);


// JavaScript Array shift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.shift();
// console.log(result);


// JavaScript Array unshift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.unshift("Lemon");
// console.log(result);


// JavaScript Array delete()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1];
// console.log(fruits);


// Merging (Concatenating) Arrays
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);




// JavaScript Array splice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// modify main array
// const result = fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(result);
// console.log(fruits);



// JavaScript Array slice()
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(0, 2);
// console.log(citrus);
// console.log(fruits);




// Sorting an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// modify main array
// const result = fruits.sort();
// console.log(result);
// console.log(fruits);



// Reversing an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);
// modify main array
//  fruits.reverse();
// console.log(fruits);



// const numbers = [1, 3, 5, 9, 111, 1, 40, 6, 55, 60];
// numbers.sort((a, b) => a - b);
// numbers.reverse()
// console.log(numbers);
// const points = [40, 100, 1, 5, 25, 10];
// console.log(Math.max(...points));
// console.log(Math.max.apply(null, points));
                                                                                                 


// The fastest solution is to use a "home made" method
// function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while (len--) {
//       if (arr[len] > max) {
//         max = arr[len];
//       }
//     }
//     return max;
// }
// console.log(myArrayMax(points));


// The fastest solution is to use a "home made" method
// function myArrayMin(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while (len--) {
//       if (arr[len] < min) {
//         min = arr[len];
//       }
//     }
//     return min;
// }
// console.log(myArrayMin(points));


// Sorting Object Arrays
// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
// ];
// cars.sort(function(a, b){return a.year - b.year});
// console.log(cars);




// JavaScript Array map()
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map((value) => delete value);
// console.log(numbers1);
// console.log(numbers2);


// JavaScript Array forEach()
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// const result = numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   console.log(value);
// }
// console.log(result);


// JavaScript Array filter()
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(over18);



// JavaScript Array reduce()
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction, 100);

// function myFunction(total, value, index, array) {
    
//   return total + value;
// }
// console.log(numbers);
// console.log(sum);



// JavaScript Array reduceRight()
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myFunction);

// function myFunction(total, value, index, array) {
//     console.log(total);
//     console.log(value);
//   return total + value;
// }
// console.log(sum);


// JavaScript Array every()
// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allOver18);



// JavaScript Array some()
// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(someOver18);




// JavaScript Array indexOf()
// array.indexOf(item, start)
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple");
// console.log(position);



// JavaScript Array lastIndexOf()
// array.lastIndexOf(item, start)
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple")
// console.log(position);



// JavaScript Array find()
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(first);





// JavaScript Array findIndex()
// const numbers = [4, 9, 16, 25, 29];
// let firstIndex = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(firstIndex);



// JavaScript Array.from()
// const result = Array.from("ABCDEFG");
// console.log(result);




// JavaScript Array Keys()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// console.log(keys);

// for (let x of keys) {
//   console.log(x);
// }


// Array entries()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// console.log(f);

// for (let x of f) {
//   console.log(x);
// }




// Object entries
// const info = {
//     fName: 'Kawsar',
//     lName: 'Ahmed',
//     age: 25,
//     job: 'Developer'
// }
// const enc = Object.entries(info);
// console.log(enc);

// for (const value of Object.entries(info)) {
//     console.log(value);
// }





// JavaScript Array includes()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.includes("Mango");
// console.log(result);









