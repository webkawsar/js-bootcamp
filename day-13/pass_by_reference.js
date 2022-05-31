



// Pass by Value(Primitive)
const a = 10;
function testFunc(num){

    let number = num;
    number = 20;
    console.log(number);
}

testFunc(a);
console.log(a);


// Pass by Reference(Complex)
const myObject = {
    name: 'Kawsar Ahmed',
    age: 25
}

function checkReference(obj) {

    let newObj = obj;
    newObj.profession = 'Web Developer';
    console.log(newObj);
}
checkReference(myObject);
console.log(myObject);

