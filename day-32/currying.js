
// video_source: https://www.youtube.com/watch?v=FfE0mqZdj9k&list=PLOhf-GHfoFwdBZDpgyN6Wn04ZsiRjDcjy&index=4



// JavasScript Currying
// normal way
const sum = (a, b, c) => {
    return a + b + c;
}

console.log(sum(10, 20, 30));
// sum(10)(20)(30)




// currying way
const sum2 = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(sum2(10)(20)(30));


// short hand syntax
const sum3 = a => b => c => a + b + c;
console.log(sum3(10)(20)(30));



















