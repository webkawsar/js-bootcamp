// Intermediate Algorithm Scripting

// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.





function translatePigLatin(str) {
    
    let txt = str;
    const matchedValue = str.match(/^[^aeiou]+/);

    if(matchedValue) {

      const replacedValue = str.replace(/^[^aeiou]+/, '');
      txt = `${replacedValue}${matchedValue}ay`
      
    } else {
      txt += `way`
    }

    return txt;
}
// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));

// oveglay
// california
// aliforniacay
// algorithm
// algorithmway





// Solution 1
// function translatePigLatin(str) {
//     let consonantRegex = /^[^aeiou]+/;
//     let myConsonants = str.match(consonantRegex);


//     console.log(myConsonants);

//     console.log(str.replace(consonantRegex, ""));



    
//     return myConsonants !== null ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay") : str.concat("way");
//   }
  
// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("glove"));
// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("algorithm"));




// Solution 2













