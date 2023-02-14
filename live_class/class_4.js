



// truthy and falsy value
// logical and(&&) logical or(||) operator
// logical (!)
// short circuit
// if, else if. else
// ternary
// switch
// loop
// for, while



// truthy or falsy value
// Boolean(true or false)
// how to prove is it truthy or falsy 
// logical not(!!)
// Boolean constructor
// ternary
// logical and (&&) operator

console.log(!false);
console.log(typeof !!undefined);
console.log(!!!undefined);


console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(true));

let age = 26;
console.log(typeof (age > 25));
console.log(Boolean(age > 25));

console.log(false.valueOf());



// logical and (&&) operator
// &&  --> result true when every part is true
// otherwise false
// short circuit

console.log(true && true && true)
console.log(true && true && false)
console.log(true && false && false)
console.log(false && false && false)

console.log(true && 'Hello World')
console.log(false && 'Hello World')




// logical or (||) operator
// ||  --> result true when single part is true
// otherwise false
// short circuit

console.log(true || true || true)
console.log(true || true || false)
console.log(true || false || false)
console.log(false || false || false)

console.log(true || 'Hello World')
console.log(false || 'Hello World')
console.log(false || '')



// switch statement
// logical && || operator use technic
// switch () er vitore jei value deya hobe etar sathe case compare kora hobe
// jodi switch () vitore age deya hoy tahole se age er sathe compare korbe
// ar jodi true deya hoy tahole se case er value boolean kina check korbe
age = 28;
switch (age) {
    case age >= 25:
        console.log('You are 25')
        break;

    case age >= 28 && age:
        console.log('You are 28')
        break;

    case 27:
        console.log('You are 27')
        break;
    case 26:
        console.log('You are 26')
        break;
    case 29:
        console.log('You are 29')
        break;

    default:
        console.log('Unknown')
}







// https://medium.com/jspoint/truthy-vs-falsy-values-in-javascript-b9d9ada08bae#:~:text=In%20JavaScript%2C%20if%2Felse%20statement,These%20are%20as%20follows.&text=Therefore%2C%20if%20you%20use%20one,false%20values%20as%20shown%20below.

// https://www.sitepoint.com/javascript-truthy-falsy/



