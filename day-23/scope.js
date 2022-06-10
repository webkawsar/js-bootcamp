


// JavaScript Scope

var myVar = 100;

function localFunc() {
    var localVar = 20;

    okVar = 500;
    myVar = 200;

}

localFunc();
console.log(myVar);
console.log(window);






