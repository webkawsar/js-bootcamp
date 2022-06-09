


// Sorting Array

const arr = [1, 3, 11, 40, 100, 55, 5, 7, 9];

// modify main array
// const sortedResult = arr.sort();
const sortedResult = arr.sort(function(a, b) {
    // a > b return 1;
    // a < b return -1;
    // a === b return 0;

    // solution 1
    // if(a > b) return 1;
    // if(a < b) return -1;
    // return 0;

    // solution 2
    console.log(a - b);
    console.log(a);
    console.log(b);
    return  a - b;
});


console.log(sortedResult);
console.log(arr);
























