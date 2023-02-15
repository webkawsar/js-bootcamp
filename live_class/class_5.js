

// loop (array looping, object looping)
// function evolution
// return, automatic semicolon insertion, tracking variable
// compare by value / compare by reference


// for loop
// while 
// for of loop
// for in loop


// primitive always compare by value
// compare by value (primitives)
const a = 10;
const b = 10;
console.log(a === b); // true


// compare by reference (complex data types)
// complex data type compare howar somoy 2tar location compare hoy, jehetu 2tar location difference tai false ase
const aObj = {
    name: 'Kawsar'
}

const bObj = {
    name: 'Kawsar'
}

console.log(aObj === bObj) // false



// pass by value 
const num = 10;
function passByValue(number) {
    let num = number;
    num = 20;
    console.log(num)

}

passByValue(num)
console.log(num)





// pass by reference
const obj = { name: 'Kawsar', age: 27};
function passByReference(object) {
    let man = object;   
    man.age = 30;
    console.log(man)
}

passByReference(obj);
console.log(obj)










