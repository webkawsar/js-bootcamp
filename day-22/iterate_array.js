



// Iterate Array
const arr = [1, 3, 5, 7, 9];

for (const value of arr) {
    console.log(value);
}



for (const [index, value] of Object.entries(arr)) {
    console.log(`${index}: ${value}`);
}


const result =  arr.forEach((item, index, array) => {

    console.log(item);
    console.log(index);
    console.log(array);
})

console.log(result);
















