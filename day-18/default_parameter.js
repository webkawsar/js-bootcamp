

// function default parameter

function defaultParameter(productName, price, isAvailable = false, freeShipping, disc) {

    freeShipping = freeShipping || false;
    const discount = disc ? disc : .005;

    console.log(productName);
    console.log(price);
    console.log(isAvailable);
    console.log(freeShipping);
    console.log(discount);
}


defaultParameter('Computer', 500, true, undefined);























