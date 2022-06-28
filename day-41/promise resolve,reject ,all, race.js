

const p1 = Promise.resolve('Resolve-1');
const p2 = Promise.resolve('Resolve-2');
const p3 = Promise.resolve('Resolve-3');
const p4 = Promise.reject('Reject-4');




// all promise resolve hole result pawa jabe
// kuno ekta promise reject hole catch e cole jabe
// result array hisebe pawa jabe
Promise.all([p1, p2, p3])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})




// kuno ekta promise resolve holei result pawa jabe
Promise.race([p1, p2, p3, p4])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})




















