


// Exercise 1
function max(num1, num2) {

    if(num1 < num2) {
        console.log(`Big number is ${num2}`)
    } else {
        console.log(`Big number is ${num1}`)
    }
}
max(15, 10);


// Exercise 2
function showNumber(num) {

    for (let i = 0; i < num; i++) {
        console.log(i);
        
    }
}

showNumber(10);


// Exercise 3
function sum(num) {
    let result = 0;
    for (let i = 0; i < num; i++) {
        
        result += i;
    }

    console.log(result);
}

sum(10);



// Exercise 4
function calculateGrade(arr) {
    let totalMarks = 0;
    for (const value of arr) {
        totalMarks += value;
    }
    console.log(totalMarks / arr.length);
    if(totalMarks < 60) {

        console.log('Vaya Fail marso');
    } else if(totalMarks > 60 || totalMarks < 69) {

        console.log('Vaya D Paiso');
    } else if(totalMarks > 70 || totalMarks < 79) {

        console.log('Vaya C Paiso');
    } else if(totalMarks > 80 || totalMarks < 89){

        console.log('Vaya B Paiso');
    } else {

        console.log('Vaya A Paiso');
    }
}

calculateGrade([60, 70, 80, 90, 55]);


// Exercise 5
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

function showMoviesData(movieData){
    for (const key in movieData) {
        if(typeof movieData[key] === 'string') {
            console.log(key);
        }
    }
}

showMoviesData(movie);





