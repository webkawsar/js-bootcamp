
// All JavaScript objects have a toString() method.
// Array Method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Converting Arrays to Strings
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
// console.log(fruits.toString());


// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
// console.log(fruits.join(' || '));
// console.log(fruits);


// add / remove
// console.log(fruits.push('AAM'));
// console.log(fruits.pop());

// console.log(fruits.shift());
// console.log(fruits);

// console.log(fruits.unshift('Behaya'));
// console.log(fruits);


// Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(result);

// const result = fruits.splice(0, 1);
// console.log(result);

//The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
const citrus = fruits.slice(1, 3);

const text = 'I love JavaScript';
console.log({text});
console.log(text.slice(7, 11));
console.log(citrus);





// Sorting an Array
// The sort() method sorts an array alphabetically
// modify main array
// fruits.sort();



// Reversing an Array
// The reverse() method reverses the elements in an array.
// You can use it to sort an array in descending order
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();



// Numeric Sort
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function

const points = [40, 100, 1, 5, 25, 10];
points.sort();
// for ascending
points.sort(function(a, b){return a - b});
// dor descending
points.sort(function(a, b){return b - a});
console.log(points);




// The Compare Function
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments
// function(a, b){return a - b}

// Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.
// Find the Highest (or Lowest) Array Value
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a-b);
// highest
console.log(numbers[numbers.length-1]);
// lowest
console.log(numbers[0]);


// Using Math.max() on an Array
console.log(Math.max(...numbers));
console.log(Math.max([40, 100, 1, 5, 25, 10])); // NaN
console.log(Math.max.apply(null, [1, 2, 3])); // 3
// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).



// Using Math.min() on an Array
// You can use Math.min.apply to find the lowest number in an array
// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).











// modify main array
console.log(fruits);



