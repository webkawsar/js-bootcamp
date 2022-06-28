

// Intermediate Algorithm Scripting

// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.




// function whatIsInAName(collection, source) {
//     const arr = [];
//     // Only change code below this line
    
//     const keys = Object.keys(source);
//     console.log(keys);

//     for (let i = 0; i < collection.length; i++) {
//         const element = collection[i];
        
//         const isTrue = keys.every(key => element[key] === source[key]);
//         if(isTrue) {
//             arr.push(element)
//         }
        
//     }

//     // Only change code above this line
//     return arr;
// }

//   console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
//                             { first: "Mercutio", last: null }, 
//                             { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));






// Solution 1
// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const sourceKeys = Object.keys(source);
  
//     // filter the collection
//     return collection.filter(obj => {
//       for (let i = 0; i < sourceKeys.length; i++) {
//         if (!obj.hasOwnProperty(sourceKeys[i]) ||
//             obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
//           return false;
//         }
//       }
//       return true;
//     });
//   }
  
//   console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));




// Solution 2
// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const sourceKeys = Object.keys(source);
  
//     return collection
//       .filter(obj => sourceKeys
//                        .every(key => obj.hasOwnProperty(key) &&
//                               obj[key] === source[key]));
// }

// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));





// Solution 3
// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const souceKeys = Object.keys(source);
  
//     // filter the collection
//     return collection.filter(obj => souceKeys.map(key => obj.hasOwnProperty(key) && obj[key] === source[key]).reduce((a, b) => a && b));
// }
// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));




