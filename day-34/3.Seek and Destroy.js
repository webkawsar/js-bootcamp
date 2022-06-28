// Intermediate Algorithm Scripting

// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.



// function destroyer(arr) {

//     const result = [];
//     const [one, ...rest] = [...arguments];

//     for (let i = 0; i < one.length; i++) {
//         const element = one[i];

//         const isIncluded = rest.includes(element);
//         if(!isIncluded) {
//             result.push(element)
//         }
//     }

//     return result;
// }
  
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));





// Solution 1
// function destroyer(arr) {
//     const valsToRemove = Object.values(arguments).slice(1);
//     const filteredArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       let removeElement = false;
//       for (let j = 0; j < valsToRemove.length; j++) {
//         if (arr[i] === valsToRemove[j]) {
//           removeElement = true;
//         }
//       }
//       if (!removeElement) {
//         filteredArray.push(arr[i]);
//       }
//     }
//     return filteredArray;
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



// Solution 2
// function destroyer(arr) {
//     const valsToRemove = Array.from(arguments).slice(1);
//     return arr.filter(function(val) {
//       return !valsToRemove.includes(val);
//     });
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));




// Solution 3
// function destroyer(arr, ...valsToRemove) {
//     return arr.filter(elem => !valsToRemove.includes(elem));
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));









