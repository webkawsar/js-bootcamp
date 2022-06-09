



// Copy from Array
const numbers = [1, 3, 5, 7, 9, {skills: ['React.js', 'Vue.js']}];

const copiedArray1 = numbers;
const copiedArray2 = [...numbers];
const copiedArray3 = numbers.slice(); 
// modify main array
const copiedArray4 = numbers.splice(0, 0);
const copiedArray5 = numbers.join(', ').split(', ')
const copiedArray6 = JSON.parse(JSON.stringify(numbers));
const copiedArray7 = numbers.concat();
const copiedArray8 = Array.from(numbers);

// check array or not
console.log(Array.isArray(copiedArray5));
console.log(copiedArray5 instanceof Array);

numbers.push(11);
numbers[5].skills.push('Node.js');


console.log(copiedArray1);
console.log(copiedArray2);
console.log(copiedArray3);
console.log(copiedArray4);
console.log(copiedArray5);
console.log(copiedArray6);
console.log(copiedArray7);
console.log(copiedArray8);

console.log(numbers);





















