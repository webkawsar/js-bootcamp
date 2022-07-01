


// Synchronous  programming example
console.log(1);
console.log(2);
console.log(3);



// Asynchronous programming example
console.log(1);
setTimeout(() => {
    console.log('after 2 sec');
    console.log(2);
}, 0)
console.log(3);




// Asynchronous problem
console.log(4);
console.log(getNumber(5))
console.log(6);


function getNumber(num) {
    setTimeout(() => {
        console.log('After 2 sec');
        return num;
    }, 2000)

}




// Asynchronous deal with 3 way
// callback
// promise
// async/await





// Asynchronous code with callback
console.log(4);
getNumber(5, function(n) {
    console.log(n);
    console.log(6);
})


function getNumber(num, callback) {

    setTimeout(() => {
        console.log('Call after 2 sec');
        callback(num);
    }, 2000)

}











































