// Intermediate Algorithm Scripting

// DNA Pairing
// Pairs of DNA strands consist of protein base pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


// function pairElement(str) {
//     const arr = str.split('')
//     console.log(arr);
//     // AT CG
//     const A = ['A', 'T'];
//     const T = ['T', 'A'];
//     const C = ['C', 'G'];
//     const G = ['G', 'C'];

//     const modifiedArr = arr.map(char => {
//         console.log(char);
//         if(char === 'A'){
//             return A;
//         } else if(char === 'T'){
//             return T;
//         } else if(char === 'C'){
//             return C;
//         } else if(char === 'G') {
//             return G;
//         }
//     })
//     return modifiedArr;
// }
  
// console.log(pairElement("ATCGA"));
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]







// Solution 1
// function pairElement(str) {
//     // Return each strand as an array of two elements, the original and the pair.
//     var paired = [];
  
//     // Function to check with strand to pair.
//     var search = function(char) {
//       switch (char) {
//         case "A":
//           paired.push(["A", "T"]);
//           break;
//         case "T":
//           paired.push(["T", "A"]);
//           break;
//         case "C":
//           paired.push(["C", "G"]);
//           break;
//         case "G":
//           paired.push(["G", "C"]);
//           break;
//       }
//     };
  
//     // Loops through the input and pair.
//     for (var i = 0; i < str.length; i++) {
//       search(str[i]);
//     }
  
//     return paired;
//   }
  
//   // test here
// pairElement("GCG");







// Solution 2
// function pairElement(str) {
//     //create object for pair lookup
//     var pairs = {
//       A: "T",
//       T: "A",
//       C: "G",
//       G: "C"
//     };
//     //split string into array of characters
//     var arr = str.split("");
//     //map character to array of character and matching pair
//     return arr.map(x => [x, pairs[x]]);
// }
  
// //test here
// pairElement("GCG");
















