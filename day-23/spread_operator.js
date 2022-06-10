


// JS Spread Operator

function calculate(a, b, c, d) {
    console.log('Sum: ' + (a + b + c + d));
}


const numbers = [1, 2, 3, 4];
// calculate(numbers);
// calculate.apply(null, numbers);
calculate(...numbers);












