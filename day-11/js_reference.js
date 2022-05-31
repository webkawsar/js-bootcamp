


// Primitive Data Type
    // STring,
    // Number
    // Boolean
    // Null or Undefined
    // Symbol

// Complex Data Type
    // Array
    // Function
    // Object


// Compare by Value(Primitive)
const a = 10;
const b = 10;
console.log(a === b);


// Compare by Reference(Complex)
const object1 = {
    name: 'Kawsar'
}

const object2 = {
    name: 'Kawsar'
}

console.log(object1 === object2);


// Pass by Value (primitive)
const num = 10;
function passByValue(number) {
    let count = number;
    count = 20;
    console.log(count);
}
passByValue(num);
console.log(num);


// Pass by Reference(Complex)
const myObject = {
    name: 'Kawsar',
    age: 25
}

function passByReference(obj) {
    let newObj = obj;
    newObj.profession = 'Web Developer'
    console.log(newObj);
}

passByReference(myObject);
console.log(myObject);
