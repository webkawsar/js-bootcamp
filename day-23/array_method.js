

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






































