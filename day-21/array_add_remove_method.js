


// JS Arrays Method
const arr = [1, 3, 5, 7, 9];


//add element in end of the array
arr.push(15);
const add1 = arr.push(11);
console.log(add1);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const result = fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(result);
console.log(fruits);


// New element can also be added to an array using the length property
arr[arr.length] = 13;
console.log(arr.length);
console.log(arr);


//remove element  end of the array
const remove2 = arr.pop();
console.log(remove2);


//remove element in first of the array
const remove1 = arr.shift();
console.log(remove1);


//add element in first of the array
const add2 = arr.unshift(0);
console.log(add2);




console.log(arr);














