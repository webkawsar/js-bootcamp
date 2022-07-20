


// Object Oriented JavaScript

// const object1 = {
//     firstName: 'Kawsar',
//     lastName: 'Ahmed',
//     age: 25,
//     fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// console.log(object1.firstName);
// console.log(object1.lastName);
// object1.firstName = 'Shamim';
// console.log(object1.fullName());







// 'use strict'
const object1 = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    // get age () {
    //     return this._age + ' years old.';
    // },
    // set age (num) {
    //     if(num < 18) {
    //         throw new Error('You must be 18 to use the app');
    //     } else {
    //         this._age = num;
    //     }
    // },
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}


// object1._age = 10;
// console.log(object1.age);
// object1.age = 35;
// console.log(object1.age);


// data descriptor
Object.defineProperty(object1, '_age', {
    value: 15,
    enumerable: false,
    writable: false,

    // configurable false means it can't be delete
    configurable: false,
})



// object1._age = 10;
// console.log(object1.age);
// object1.age = 35;
// console.log(object1.age);



// accessor descriptor
Object.defineProperty(object1, 'age', {
    get () {
        return this._age + ' years old.';
    },
    set (num) {
        if(num < 18) {
            throw new Error('You must be 18 to use the app');
        } else {
            this._age = num;
        }
    },
})


// object1._age = 5;
// console.log(object1._age);
// object1.age = 25;
console.log(object1.age);



























