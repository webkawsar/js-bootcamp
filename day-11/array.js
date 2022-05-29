

// JS Array
// This is also called a multi-dimensional array.

const teams = [
    ["Bulls", 23], 
    ["White Sox", 45]
];
console.log(teams[0][0]);





const myObj = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 25,
    profession: 'Junior Full Stack Developer',
    hobby: 'Playing Football'
}

// manual object loop
const objToArray = Object.keys(myObj);
for (const value of objToArray) {

    console.log(`${value} : ${myObj[value]}`);
}



//special object loop
for (const key in myObj) {
    
    console.log(key);
    console.log(myObj[key]);
}

