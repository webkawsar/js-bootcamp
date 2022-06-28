
// video_source: https://www.youtube.com/watch?v=ZUw2iUgkvHM&list=PLOhf-GHfoFwdBZDpgyN6Wn04ZsiRjDcjy&index=2



// Higher Order Function
// A function that
    // 1. Accepts functions as parameters
    // 2. Returns a function





// 1. Accepts functions as parameters
// abc is a higher order function
const abc = (callback) => { 

    console.log('Abc function');
    callback();

}

abc(() => {

    console.log('Function pass as a parameter');
});




// 2. Returns a function
// xyz is a higher order function
const xyz = () => { 

    console.log('XYZ Function');
    return () => {
        console.log('Return from xyz function');
    }
}

xyz()()














