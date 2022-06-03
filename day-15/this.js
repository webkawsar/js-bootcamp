





// this
// global execution context         => window
// functional execution context
// plain function call              => window
// inside in object                 => object
// constructor function             => {}




// const karim = {
//     name: 'Karim Rahman',
//     dob: 1996,
//     age: function(currentYear, msg) {

//         console.log(`${msg} ${this.name}`);
//        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
//     }
// }

// const rahim = {
//     name: 'Abdur Rahim',
//     dob: 1986
// }

// const shamim = {
//     name: 'Shamim Mohammad',
//     dob: 1996
// }

// const boundFunc = karim.age.bind(rahim, 2022, 'Hi');
// boundFunc();

// karim.age.call(shamim, 2022, 'Pilot')


function sayHi(msg) {

    console.log(this);
    console.log(`${msg} ${this.name}`);
}

const rahim = {
    name: 'Abdur Rahim',
}

const shamim = {
    name: 'Shamim Mohammad',
    dob: 1996
}

const boundFunc = sayHi.bind(rahim, 'Hi');
boundFunc();

boundFunc.call(shamim, 'Pilot')



