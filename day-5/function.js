
// This is called function statement
function myFunc() {
    console.log('Oh he Boy');
}
// myFunc();



// This is called function expression
var testFunc = function() {
    console.log('Under testing');
}
// testFunc();




// ফাংশনকে ফার্স্ট ক্লাশ ফাংশন ধরা হয় 
// এভাবে আর্গুমেন্ট পাস করলে সেটার একটা কপি পাস হয়, রেফারেন্স পাস হয় না।

function changeValue(a) {
    console.log('Value of a inside function before changing: ' + a);
    a = 10;
    console.log('Value of a inside function after changing: ' + a);
    return a;
}

var a = 100;
console.log('Value of a before changing function is applied: ' + a);
changeValue(a);
console.log('Value of a after changing function is applied: ' + a);