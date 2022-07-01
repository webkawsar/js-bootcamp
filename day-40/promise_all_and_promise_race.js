

const p1 = Promise.resolve('Resolve-1');
const p2 = Promise.resolve('Resolve-2');
const p3 = Promise.resolve('Resolve-3');
const p4 = Promise.reject('Reject-4');



// if all promise resolve, we can get result
// if any one promise reject, result we can get by using catch
// result wil array

// use case
// facebook -> 2s
// youtube -> 2s
// linkedin -> 2s
Promise.all([p1, p2, p3, p4])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})




// if any one promise resolve, we can get result
Promise.race([p1, p2, p3, p4])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})




















