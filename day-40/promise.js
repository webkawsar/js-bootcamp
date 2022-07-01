

// Javascript Promise
// promise state => pending, resolve, reject



// pending state
const result = new Promise((resolve, reject) => {

    setTimeout(() => {

        // promise resolve or reject jekuno ekta dibe
        // resolve('We are success promise');
        reject('We are fail!');
    }, 2000)
})


// get pending promise by console
console.log(result);


// resolve state
result.then((success) => {

    console.log(success);
})

// reject state
.catch((error) => {

    console.log(error);
})



















