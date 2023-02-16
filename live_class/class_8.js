


// Context
// destructuring
// rest
// spread operator
// function gotcha
// default value
// scope 
// closure
// hoisting






// destructuring
const person = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 26,
    fullName() {
        return this.firstName + '-' + this.lastName;
    }
}

// const {firstName, lastName, age, fullName, profession = 'Hi, Guys'} = person;
const {firstName, ...restObjectValues} = person;
// console.log(firstName);
// console.log(fullName());
// console.log(fullName.call(person));
// console.log(profession);
console.log(restObjectValues);

// order important noy
// exact key dore access korte hobe
// variable e assign hoy
// rename kora jabe
// default value set kora jay
// object structuring korar somoy rest use korle object akare asbe
// rest ekebare sese use korte hoy




const myArr = ['Samim', 'Mohammad', 'Pilot'];
// const [fName, lName, pro] = myArr;
const [fName, ...restArrValues] = myArr;

console.log(fName);
// console.log(pro);
// console.log(lName);
console.log(restArrValues);

// order important
// variable naming flexible
// value skip korle hole mandatory (,) comma dite hobe
// array structuring korar somoy rest use korle array akare asbe







// spread operator
// kunta rest ae kunta spread bujbo kivabe?
// = bracker er left side jodi dekha jay tahole rest ar right side e hole spread





const person2 = {
    firstName: 'Samim',
    lastName: 'Mohammad',
    profession: 'Pilot'
}


function test(fName, lName, profession) {

    console.log(fName);
    console.log(lName);
    console.log(profession);
}
    
test('Samim', 'Mohammad', 'Pilot');



function test2(obj) {

    console.log(obj);
}

test2(person2);



function test3({firstName, ...rest}) {

    console.log(firstName);
    console.log(rest);
}

test3(person2);




// evabe receive korle jai dei na keno se array akare receive korbe
function test4(...rest) {

    console.log(typeof rest)
    console.log(rest instanceof Array);
    console.log(rest)
}

test4('Samim', 'Mohammad', 'Pilot');
// test4(person2);
// test4([1, 2, 3]);

// tar mane function call korar somoy joto argument dibo, function e receive korar somoy toto parameter na diye ...rest diye receive korle always array dibe










// scope
// var (functional scope, global scope)
// let, const (block scope, global scope)


// scope chain
// kuno variable declare korle se aage nijer scope try korbe kujar, jodi na pay tahole parent scope kujbe, parent e na pele er parent scope e kujbe . etake scope chain bole
// panir bud bud er moto nich theke uporer dike ute



// closure scope
// variable scope is limited to it's lifespan
function sum(num1) {

    return function(num2) {
        return num1 + num2;
    }
}

const innerFunc = sum(3);
console.log(innerFunc(5))




// hoisting

console.log(a)
// console.log(func())
console.log(greeting())

var a = 10;
var func = function() {
    return 'Ok';
}

function greeting() {
    return 'Hi Guys'
}


// major 2 vage vag korle ei 2ta phase pawa jay
// preparation phase
// joto variable ase memory te niye ney
// variable er value set kore na
// puro function declaration memory te niye ney



// execution phase
// variable er value assign kore
// joto calling ase sob call kore



// const, let er somoy temporal dead zone e rakhe
// Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.

if(true) {
    // console.log(bestFood); //  ReferenceError: bestFood is not defined
    let bestFood = "Vegetable Fried Rice";
}



let bestFood; 
console.log(bestFood);

bestFood = "Vegetable Fried Rice";
console.log(bestFood);





// https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/#:~:text=A%20temporal%20dead%20zone%20(TDZ,initial%20value%20to%20a%20variable.