
// Intermediate Algorithm Scripting
// way 1
// function sumAll(arr) {

//     const start = arr[0];
//     const end = arr[1];
//     let total = 0;

//     for (let i = (start < end ?  start : end); i <= (end > start ? end : start); i++) {
//         total += i;
//     }

//     return total
// }
// console.log(sumAll([4, 1]))




// way 2
// function sumAll2(arr) {

//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     let total = 0;

//     for (let i = min; i <= max; i++) {
//         total += i;
//     }

//     return total
// }
// console.log(sumAll2([4, 1]))







// freecodecamp solution
// function sumAll(arr) {
//     let max = Math.max(arr[0], arr[1]);
//     let min = Math.min(arr[0], arr[1]);
//     let sumBetween = 0;
//     for (let i = min; i <= max; i++) {
//       sumBetween += i;
//     }
//     return sumBetween;
//   }
  
// console.log(  sumAll([1, 4]));



// const sumAll = arr => {
//     // Buckle up everything to one!
//     const startNum = arr[0];
//     const endNum = arr[1];
  
//     // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
//     // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
//     const numCount = Math.abs(startNum - endNum) + 1;
//     console.log(numCount);
  
//     // Using Arithmetic Progression summing formula
//     const sum = ((startNum + endNum) * numCount) / 2;
//     return sum;
// };
// console.log(  sumAll([1, 4]));
// console.log(  sumAll([5, 10]));



// function sumAll(arr) {
//     let sumBetween = 0;
//     for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//       sumBetween += i;
//     }
//     return sumBetween;
//   }
  
//   sumAll([1, 4]);
// console.log(  sumAll([1, 4]));


// function sumAll(arr) {
//     const [first, last] = [...arr].sort((a, b) => a - b);
//     return first !== last ? first + sumAll([first + 1, last]) : first;
//   }
  
// //   sumAll([1, 4]);
// console.log(  sumAll([1, 4]));




// Diff Two Arrays
// [1, 2, 3, 5], [5, 4, 1, 3, 2] should return [4]
// function diffArray(arr1, arr2) {
//     let newArr = [...arr2]
//     const res = arr1.filter(item => {

//         // console.log(item);
//         // console.log(newArr.indexOf(item));

//         const index = newArr.indexOf(item);
//         if(index !== -1) {
//             newArr.splice(index, 1);
//         } else {

//             return item;
//         }
//     })

//     // console.log(res);
//     return newArr.concat(res);
// }
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// console.log(diffArray([1, 2, 3, 5], [5, 4, 1, 3, 2]));
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));






// Solution 1
// function diffArray(arr1, arr2) {
//     const newArr = [];
  
//     function onlyInFirst(first, second) {
//       // Looping through an array to find elements that don't exist in another array
//       for (let i = 0; i < first.length; i++) {
//         if (second.indexOf(first[i]) === -1) {
//           // Pushing the elements unique to first to newArr
//           newArr.push(first[i]);
//         }
//       }
//     }
  
//     onlyInFirst(arr1, arr2);
//     onlyInFirst(arr2, arr1);
  
//     return newArr;
//   }
  
//   console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
//   console.log(diffArray([1, 2, 3, 5], [5, 4, 1, 3, 2]));
//   console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
  


// Solution 2 
// function diffArray(arr1, arr2) {
//     return arr1
//       .concat(arr2)
//       .filter(item => !arr1.includes(item) || !arr2.includes(item));
//   }
//   console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
//   console.log(diffArray([1, 2, 3, 5], [5, 4, 1, 3, 2]));
//   console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
  





// Solution 3 
// function diffArray(arr1, arr2) {
//     return [...diff(arr1, arr2), ...diff(arr2, arr1)];
    
//     function diff(a, b) {
//         return a.filter(item => b.indexOf(item) === -1);
//     }
//   }

//   console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
//   console.log(diffArray([1, 2, 3, 5], [5, 4, 1, 3, 2]));
//   console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
  
























