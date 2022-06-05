


// Array Destructing and rest operator
 const info = ['Kawsar', 'Ahmed', 25, 'Web Developer', 'No'];
 const [fName, lName, age, ...others] = info;

console.log(fName);
console.log(lName);
console.log(age);
console.log(others); // rest value is array




function destructuredArray([firstName, lastName, age, ...restArray]) {

    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(restArray); // rest value is array

}
destructuredArray(info);


function product2(name, ...others) {

    console.log(name);
    console.log(others); // rest value is array
}

product2('Printed T-shirt', 25, .10, true)





// Object Destructing and rest operator
const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    dob: 25,
    job: 'Web Developer',
    isMarried: false
}

// const {firstName, lastName, dob, ...restObj} = profile;

// console.log(firstName);
// console.log(lastName);
// console.log(dob);
// console.log(restObj); //rest value is object



function destructuredObject({firstName, lastName, isMarried, ...restObject}) {

    console.log(firstName);
    console.log(lastName);
    console.log(isMarried);
    console.log(restObject); //rest value is object
}
destructuredObject(profile)









