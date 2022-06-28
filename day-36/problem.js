

// problem 1

let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("ai");
// let result = text.match("nai");

console.log(result);
console.log('str'.concat(result));








// problem 2

const student1 = {
    fName: 'Kawsar',
    lName: 'Ahmed',
}

const student2 = {
    lName: 'Ahmed',
}


const str1 = JSON.stringify(student1);
const str2 = JSON.stringify(student2);

console.log(str1);
console.log(str2);
console.log(str1.includes(str2));




// Problem 3
const dashesStr = 'Hi i am Kawsar'.replace(/([a-z])([A-Z])/g, "$1 $2");





