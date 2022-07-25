




// function statement
function funcStatement() {
    console.log('This is called function statement');
}

funcStatement();






// function statement with bind call apply
// function sayHi(age, profession) {
//     return (`Hi ${this}. You are ${age} and you are a ${profession}`);
// }


// ekbar bind kore nile oi function e ar this er value change kora jay na
// const sayHiWithBind = sayHi.bind('Imran');

// const callOutput = sayHiWithBind.call(false, 25, 'Bekar');
// console.log(callOutput);

// const applyOutput = sayHiWithBind.apply('Expression', [25, 'Pilot']);
// console.log(applyOutput);











// function expression
// expression can be written on right side of variable
const sayHiGuys = function() {

    console.log('Hi, Guys');
}

sayHiGuys();








// function expression with bind, call, apply
const msg = function() {
    console.log('Hello ' + this);
}.bind('World')

// msg();
msg.call('Duniya');



const sayHi = function(age, profession) {
    return (`Hi ${this}. You are ${age} and you are a ${profession}`);
}.bind('Kawsar')

// ekbar bind kore nile oi function e ar this er value change kora jay na
const callOutput = sayHi.call('John', 26, 'Bekar');
console.log(callOutput);

const applyOutput = sayHi.apply('', [25, 'Pilot']);
console.log(applyOutput);











