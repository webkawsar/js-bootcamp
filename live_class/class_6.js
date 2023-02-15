






// accessing data from nested array and object
// constructor function vs factory function
// copy by value
// copy by reference
// pass by value 
// pass by reference
// nested loop
// evolution of function



// nested data access from array
// array vs object
// accessing data from nested oject


// copy by value (Primitive)
let a = 10;
let b = a;
a = 20;
console.log(a)
console.log(b)


// copy by reference (Complex)
let aObj = {
    name: 'Kawsar'
}

let bObj = aObj;
bObj.age = 27;

console.log(aObj)
console.log(bObj)



// pass by value 
// pass by reference
// compare by value
// compare by reference


// evolution of function
// function statement 
// function expression
// variable er right side e ja likha jay tai expression
// expression can be written in right side of variable
const sum = function(a, b) {
    return a+b;
}

console.log(sum(10, 20))
console.log(typeof sum)






// constructor function vs factory function
// function er name always verb hobe
// factory function hochhe emon ekta function jeta ekta object create kore
function createUser(firstName, lastName, age) {
    return {
        firstName, 
        lastName,
        age,
        fullName() {
            return this.firstName + " " + this.lastName;
        }
    }
}

const kawsar = createUser('Kawsar', "Ahmed", 27)
console.log(kawsar)
console.log(kawsar.fullName())


// constructor function
// name always first letter capital diye suru hobe
function User(firstName, lastName, age) {
    //this = {} new keyword diye call korar fole function er vitore automatically empty object create hoye jay
    // and this ke automatically return kore dey
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

let user = new User('Kawsar', 'Ahmed', 27);
console.log(user)
console.log(user.age)
console.log(user.fullName())
console.log(typeof user)






// nested loop
// bahirer loop ekbar chole vitorer puro loop complete kore bahirer loop e jabe
// bahirer loop ekbar vitorer loop protibar


















