

const demoProfile = {
    fName: 'Shamim',
    lName: 'Mohammad',
    age: 25,
    profession: 'Pilot',
    'is married': false
}

// console.log(demoProfile);
demoProfile._name = 'Shamim Mohammad'; // we can store value
// console.log(demoProfile);

demoProfile.Age = 26; // we can store value
// console.log(demoProfile);

// demoProfile.123 = 'hobe na' // can't store value

const prop = "color";
demoProfile[prop] = 'red'; // we can store value
// console.log(demoProfile);

// console.log(demoProfile['is married']); // access invalid key value

