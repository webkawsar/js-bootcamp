

// Context
// this
// bind, call, apply
// first class function
// destructuring, rest, spread operator
// scope, closure, hoisting






// this
// global execution context
// functional execution context

// execution context
// code run korar somoy js kichu code niye environment create kore oi environent er context e code run kore etakei execution context bole
// execution mane run hochhe, context mane sapekke
// tahole execution context mane environment sapekke code run hochhe

const a = 10;
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(3, 5))



// JS jokhon kuno function dekhbe tokhon oi function ke functional execution context er under e run korbe
// ar baki sob global execution context er under e run korbe

// this bujar 4ta rules
// 1. Plain way te function call korle window ke bujabe
// function execution context er vitore this bolte ki bujabe seta depend korbe , 
// function ke kivabe cal kora  hochhe tar upor

console.log(this) // window
function greet() {
    console.log(this) // window
    return 'Hi Guys';
}

console.log(greet())



// 2. kuno ekta function ke call korar somoy lej thakbe (object) tokhon this bolte oi object ke bujabe
const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 27,
    fullName() {
        console.log(this) // object
        return this.firstName + ' ' + this.lastName;
    }
}

const fullName = profile.fullName
// console.log(fullName())
console.log(profile.fullName())




// 3. new keyword diye function call korle this bolete empty object ke nujabe
function Person() {
    console.log(this); // empty object
    this.name = "Kawsar"
}

const kawsar = new Person()
console.log(kawsar)


// 4. kuno functional context er under e na thake, global context er under e thake, tahole this bole window ke bujabe
console.log(this) // window



// 5. strict mode e plain function call korle er vitore this bolte undefined
// "use strict"
function greet2() {
    console.log(this) // undefined
    return 'Hi Guys';
}

console.log(greet2())







// this bolte ki bujabe seta JavaScript er upor chere na diye amora nije define kore dite pari this bolte ki bujabe
const profile2 = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 27,
    fullName() {
        
        // console.log(this) // object

        
        // this er problem solve korar technic 1
        // function inner() {
        //     console.log(this)
        //     return this.firstName + ' ' + this.lastName;
        // }

        // return inner.call(profile2)


        // this er problem solve korar technic 2
        // const $that = this;
        // function inner() {
        //     return $that.firstName + ' ' + $that.lastName;
        // }

        // return inner(profile2)


        // this er problem solve korar technic 3
        // arrow function er nijosso kuno this binding nei
        const inner = () => {
            return this.firstName + ' ' + this.lastName;
        }

        return inner(profile2)
    }
}

const name = profile2.fullName;
// console.log(name()) // ekhane this bolte window ke bujachhe, cause plain way te call kora hoyecche
console.log(name.call(profile2))



function greet3(lName) {
    console.log(this) // object
    return `Hi ${this.name} ${lName}`;
}

// console.log(greet3.call({name: 'Kawsar'}, 'Ahmed'))
// console.log(greet3.apply({name: 'Kawsar'}, ['Ahmed']))

// work like call, function is not called
// this can't be changed after bind once
let bundFunc = greet3.bind({name: 'Kawsar'}, 'Ahmed')
console.log(bundFunc())




// first class function
// higher order function
// callback function








