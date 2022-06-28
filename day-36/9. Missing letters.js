// Intermediate Algorithm Scripting

// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.




// function fearNotLetter(str) {

//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     const firstChar = str.slice(0, 1);
//     const lastChar = str.slice(str.length - 1);
//     const firstCharIndex = alphabet.indexOf(firstChar);
//     const lastCharIndex = alphabet.indexOf(lastChar);
    
//     const sliceTxt = alphabet.slice(firstCharIndex, lastCharIndex + 1);
//     const sliceTxtArr = sliceTxt.split('');
//     const arr = sliceTxtArr.find(char => !str.includes(char))

//     return arr;
// }
  
// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklmno"));






// Solution 1
function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
      console.log(String.fromCharCode(code - 1));
  
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) {
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
}
console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklmno"));





// Solution 2
// function fearNotLetter(str) {
//     let currCharCode = str.charCodeAt(0);
//     let missing = undefined;
  
//     str
//       .split("")
//       .forEach(letter => {
//         if (letter.charCodeAt(0) === currCharCode) {
//           currCharCode++;
//         } else {
//           missing = String.fromCharCode(currCharCode);
//         }
//       });
  
//     return missing;
// }
  
// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklmno"));




// Solution 3
// function fearNotLetter(str) {
//     for (let i = 1; i < str.length; ++i) {

       
//         console.log(str.charCodeAt(i));

//       if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//         return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//       }
//     }
// }

// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklmno"));









