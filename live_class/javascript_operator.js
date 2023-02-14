


// operator
// operator precedence and associativity
// == vs ===
// undefined vs null
// data type checking
// coercion
// invalid key



/****************************************************************************************************************
 *                                      Operator
*****************************************************************************************************************/
// Arithmetic operator (+, -, *, /, %)
// Assignment operator (=)
// Comparison operator (==, ===)



// Arithmetic operator
// operator er side a ja thake tader operand bole
console.log(1 + 3);
console.log(9 - 3);
console.log(9 * 3);
console.log(6 / 3);
console.log(9 % 2);

// exponential operator
console.log(9 ** 2); // 9 * 9


let a = 10;
let result = a + 1;
console.log(result); // 11

a = a + 1;
console.log(a); // 11

a+= 1; // equivalent to a = a + 1
console.log(a);

console.log(a++);
console.log(a);
console.log(++a);





let b = 10;
let result2 = b - 1;
console.log(result2);

b = b - 1;
console.log(b);

b -= 1; // equivalent to b = b - 1
console.log(b);

console.log(b--);
console.log(b);
console.log(--b);





// What is the difference between ++operand and operand++
let c = 25;
console.log(c++); // immediate line e variable er value just show kore. updated value show kore na
console.log(c);
console.log(++c); // immediate line e first e value increment kore then show kore. so updated value pawa jay
console.log(c);





// Assignment Operator
const number = 155;


// Comparison Operator
console.log('10' == 10); // coercion
console.log('10' === 10);


// coercion
console.log('10' + 1);
console.log('10' - 1);
console.log('10' * 3);
console.log('10' / 2);
console.log('10' / '5');
console.log('10' / 'hi');


// explicit conversion
console.log(Number('10') * 3);

const num = Number('10') * 5;
console.log(typeof num);
console.log(typeof String(10));
console.log(typeof Number('10'));



/******************************************************************************************************************* 
 *                                       Operator precedence and associativity
*******************************************************************************************************************/

console.log(10 + 20 * 30);
console.log((10 + 20) * 30);





/***************************************************************************************************************
 *                                        Undefined vs Null                 
****************************************************************************************************************/

// undefined javascript set kore dey. amora undefined kokono set korbo na. dorkar hole null use korbo

let firstName;
console.log(firstName); // undefined
console.log(null == null);
console.log(null === null);

console.log(undefined == undefined);
console.log(undefined === undefined);

console.log(null == undefined);
console.log(null === undefined);





/***************************************************************************************************************
 *                                       Data type checking                
****************************************************************************************************************/

console.log(typeof 'Kawsar');
console.log(typeof 10);
console.log(typeof 'Ahmed' === 'string');


console.log(typeof '');
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof Symbol());



console.log(typeof {});
console.log(typeof []);
console.log(typeof function() {});

console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Object);


// technic
// The isNaN() function determines whether a value is NaN or not
// isNaN() converts the value to a number before testing it.
// isNaN() er value NaN hole true or false
// isNaN() er value ke se Number e convert korte parle false or true

console.log(Number(10)); // 10
console.log(Number('Hello')); // NaN
console.log(Number('5')); // 5
console.log(Number(NaN)); // NaN
console.log(Number('NaN')); // NaN
console.log(Number(null));
console.log(Number(undefined));
console.log(Number({})); // NaN
console.log(Number('123ABC')); // NaN 
console.log(Number('')); // 0


console.log(isNaN(10)); // false
console.log(isNaN('Hello')); // true
console.log(isNaN('5')); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('NaN')); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN('123ABC')); // true
console.log(isNaN('')); // false
console.log(isNaN()); // true
















