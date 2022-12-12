


// topics
// destructuring
// rest
// spread
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
console.log(firstName);
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
// value skip korle hole, mandatory comma dite hobe
// array structuring korar somoy rest use korle array akare asbe







// spread operator

// kunta rest ae kunta spread bujbo kivabe?
// = bracker er left side jodi dekha jay tahole rest ar right side e hole spread





const person2 = {
    firstName: 'Samim',
    lastName: 'Mohammad',
    profession: 'Pilot'
}


// function test(fName, lName, profession) {

//     console.log(fName);
//     console.log(lName);
//     console.log(profession);
// }
    
// test('Samim', 'Mohammad', 'Pilot');






// function test(obj) {

// console.log(obj);
// }

// test(person2);








// function test({firstName, ...rest}) {

//     console.log(firstName);
//     console.log(rest);
// }

// test(person2);





function test(...rest) {

    console.log(rest);
}

// test('Samim', 'Mohammad', 'Pilot');
test(person2);

// tar mane function call korar somoy joto argument dibo, function e receive korar somoy toto parameter na diye ...rest diye receive korle always array dibe










// scope
// var (functional scope, global scope)
// let, const (block scope, global scope)


// scope chain


// closure scope






// hoisting
// preparation phase
// joto variable ase memory te niye ney
// variable er value set kore na
// puro function declaration memory te niye ney



// execution phase
// variable er value assign kore
// joto calling ase sob call kore




