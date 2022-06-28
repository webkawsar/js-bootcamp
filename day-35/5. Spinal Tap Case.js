// Intermediate Algorithm Scripting
// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



// function spinalCase(str) {
//     const lowercaseStr = str.toLowerCase();
//     const dashesStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");

//     return dashesStr;
// }
  
// // console.log(spinalCase('This Is Spinal Tap'));
// console.log(spinalCase("thisIsSpinalTap"));






// Solution 1
// function spinalCase(str) {
//     // Create a variable for the white space and underscores.
//     var regex = /\s+|_+/g;
  
//     // Replace low-upper case to low-space-uppercase
//     str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
//     // Replace space and underscore with -
//     return str.replace(regex, "-").toLowerCase();
//   }
  
  // test here
//   console.log(spinalCase("thisIsSpinalTap"));




// Solution 2
// function spinalCase(str) {
//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   // Split on whitespace and underscores and join with dash
//   return str
//     .toLowerCase()
//     .split(/(?:_| )+/)
//     .join("-");
// }

// console.log(spinalCase("thisIsSpinalTap"));






// Solution 3
// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins

//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }
// console.log(spinalCase("thisIsSpinalTap"));








