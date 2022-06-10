


// JS Closures
const myClosuresFunc = (num1) => {
    return (num2) => {
        console.log('The sum is ', num1 + num2);
    }
}

const result = myClosuresFunc(10);
console.dir(result);















