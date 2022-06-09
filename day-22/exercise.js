



// Exercise-1
// ========================================
//must result a array including all elements in the defined range
//results will be [1,2, 3, 4, 5, 6, 7, 8, 9, 10]

function arrayFromRange(min, max) {
    const newArray = [];
    for (let i = min; i <= max; i++) {
        newArray.push(i);
    }
    return newArray;
}

const result = arrayFromRange(5, 10);
console.log(result);




// Exercise-2
// ==================================
//custom includes methods that is defined by you
//result true or false based on searchElement

function includes(array, searchElement) {
    // return array.includes(searchElement);
    // return array.some((item) => item === searchElement);
    // return array.every((item) => item === searchElement);
    return array.indexOf(searchElement) !== -1
}

const numbers = [1, 2, 3, 4]; 
console.log(includes(numbers, -1));



// Exercise-3
// ==================================
//Exclude the numbers you passed to the function  from numbers array
//result will be [3, 4]

function except(array, excluded) {
    return array.filter((item) => !excluded.includes(item))
} 

// const numbers = [1, 2, 3, 4]; 
const output = except(numbers, [1, 2]);
console.log(output); 


// Exercise-4
// ==================================
//count the occurrence of numbers 
//result will be number of occurrence .Example case: result will be 2  
//At first use procedural way
//Then use reduce method

function countOccurrences(array, searchElement) {

    // procedural way
    // let count = 0;
    // for (const value of array) {
    //     console.log(value);
    //     if(value === searchElement) count++
    // }
    // return count;

    // modern way
    return array.reduce((acc, curr) => (curr === searchElement) ? ++acc : acc, 0);

}

const numberArr = [1, 2, 3, 1]; 
const count = countOccurrences(numberArr, 1); 
console.log(count);




// Exercise-5
// ==================================
//Get the maximum number from the array
//At first use procedural way
//THen use reduce method
function getMax(array) { 
    // procedural way
    // const sortedArr = array.sort((a, b) => a - b);
    // return sortedArr[[array.length - 1]];

    // modern way
    return array.reduce((acc, curr) => curr > acc ? curr : acc, 0)

}

// const numbers = [1, 2, 3, 4]; 
const max = getMax(numbers);
console.log(max); 



// factorial
// 1! = 1
// 2! = 1 * 2
// 3! = 1 * 2 * 3
// 4! = 1 * 2* 3 * 4
// 5! = 1* 2 * 3 * 4 * 5

// 10! = 9! * 10
// n! = (n - 1 )! * n!



function findLongestWordLength(str) {
    return str.split(' ').reduce((acc, curr) => acc.length > curr.length ? acc : curr).length;
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")
);


const text = 'I love JS';
console.log(text.slice(-2));



