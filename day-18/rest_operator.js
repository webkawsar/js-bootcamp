


// Rest operator

function product(...others) {

    console.log(arguments);
    console.log(others instanceof Array); //make a array
    console.log(arguments instanceof Object); //make a array
    console.log(others); //make a array
}

product('Printed T-shirt', 25, .10, true)



function product2(name, ...others) {

    console.log(name);
    console.log(others);
    console.log(arguments);
}

product2('Printed T-shirt', 25, .10, true)



// rest operator in object






















