


function sayHi(age, profession) {

    // console.log(this);
    return (`Hi ${this}. You are ${age} and you are a ${profession}`);
}


// normal 
// sayHi();

// bind
// bind er maddome this er value define kore deya hoy but function call hoy na
const bindOutput = sayHi.bind('Imran');


// call
// first argument this er value ki hobe seta indicate kore
// const callOutput = sayHi.call(undefined, 25, 'Web Developer');
const callOutput = bindOutput.call(undefined, 25, 'Web Developer');

// apply
// const applyOutput = sayHi.apply(undefined, [25, 'Pilot']);
// ekhane aage this bind kore deya hoyeche bole first argument e this er value undefined / null / false  dile hobe
const applyOutput = bindOutput.apply(null, [25, 'Pilot']);

console.log(callOutput);
console.log(applyOutput);














