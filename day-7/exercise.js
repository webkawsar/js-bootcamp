

// Exercise-1 (What will be the result and explain why?)

// const x = 10;
// const y = "a"

// y === "b" || x >= 10 // result is true
// console.log( y === "b" || x >= 10 );



// Exercise-2(What will be the result and explain why?)
var x = 3;
var y = 8;

// !(x == "3" || x === y) && !(y != 8 && x <= y) // result is false
// console.log(!(x == "3" || x === y) && !(y != 8 && x <= y));




// Exercise-3 (Get the boolean value)
!"Hello World" // false
// console.log(!"Hello World");

!"" // true
// console.log(!"" );

!null // true
// console.log(!null);

!0 // true
// console.log(!0);

!-1 // false
// console.log(!-1);

!NaN // true
// console.log(!NaN);




// const age = '22';
// if(typeof age === 'number' && age >= 22 ){

//     console.log("ok");

// } else {

//     console.log('not ok');
// }




// Exercise-4 (What will be the result and explain why?)
var str = "";
var msg = "haha!";
var isFunny = "false";

// !((str || msg) && isFunny) // false
// console.log(!((str || msg) && isFunny));