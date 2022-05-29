

const numbers = [1, 3, 5, 7, 9];


// looping way 1
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}



// looping way 2
for (const value of numbers) {
    console.log(value);
}



// looping way 3
for (const key in numbers) {
   console.log(key);
}


