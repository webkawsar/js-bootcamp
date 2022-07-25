




// function Statement
// function sayHi(age, profession) {
//     return (`Hi ${this}. You are ${age} and you are a ${profession}`);
// }

// const sayHiWithBind = sayHi.bind('Imran');

// const callOutput = sayHiWithBind.call(false, 25, 'Bekar');
// console.log(callOutput);

// const applyOutput = sayHiWithBind.apply('Expression', [25, 'Pilot']);
// console.log(applyOutput);










// function expression
const sayHi = function(age, profession) {
    return (`Hi ${this}. You are ${age} and you are a ${profession}`);
}.bind('Kawsar')

const callOutput = sayHi.call('John', 25, 'Bekar');
console.log(callOutput);

const applyOutput = sayHi.apply('', [25, 'Pilot']);
console.log(applyOutput);



















