

// function arguments

function greet(name, age, job, arr) {

    console.log(arguments instanceof Object);
    
    console.log(arguments);

    for (const value of arguments) {

        console.log(value);
        
    }

    console.log(name);
    console.log(age);
    console.log(job);
    console.log(arr);
}


const arr = [10, 15, 20];
greet('Kawsar Ahmed', 25, 'Developer', arr);













