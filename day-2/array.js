
const fName = 'Shamim';
const lName = 'Mohammad';
const age = 25;
const profession = 'Pilot';

// write array
const profile = ['Shamim Mohammad', 25, ' Pilot'];


// access array value
// console.log(profile[0]); //'Shamim Mohammad'
// console.log(profile[2]); // 'Pilot'
// console.log(profile[0] + profile[2]);


// update array value
profile[0] = 'Kawsar Ahmed';
// console.log(profile[0] + profile[2]);
profile[3] = false;
// console.log(profile); // [ 'Kawsar Ahmed', 25, ' Pilot', false ]


// new empty array create way
const newArray1 = [];
const newArray2 = new Array();
// console.log(newArray2); // same to newArray1


// array length check
const length = profile.length;
// console.log(length); // 4
