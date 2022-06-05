

// function arguments


function product() {

    console.log(typeof arguments);
    console.log(arguments instanceof Array);
    console.log(arguments instanceof Object);
    console.log(arguments.length);
    const arr = [];

    for (const value of arguments) {

        arr.push(value);
    }
    arr.push(arguments);
    return arr;
}
console.log(product('Printed T-shirt', 25, .10, true));























