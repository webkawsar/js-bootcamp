



// count the truthy value
const array = [0, null, undefined, '', 2, 3, []];

const countTruthyValue = (arr) => {

    let countTruthy = 0;
    arr.map((item)=> {
        if(item) {
            countTruthy++;
        }
    })
    return countTruthy;
}
console.log(countTruthyValue(array));







// sum arrays value
const sum = (arr) => {
    
    let res = arr.reduce((acc, curr) => acc + curr)
    return res;
}

console.log(sum([1, 3, 5, 7, 9]));








