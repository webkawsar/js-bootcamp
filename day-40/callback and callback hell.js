

// callback and callback hell

// 1. getting user
// 2. course enrollment
// 3. price of the course


// get user
const getUser = (callback) => {


    setTimeout(() => {

        callback({
            fName: 'Kawsar',
            lName: 'Ahmed',
            age: 26,
            profession: 'Developer'
        });

    }, 2000)


}


// enrolled courses
const enrolledCourses = (callback) => {
    
    setTimeout(() => {
        callback(['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB']);
    }, 2000);
}


// price of course
const getPrice = (callback) => {

    setTimeout(() => {
        callback('Price of Course: 3500');
    }, 2000)
}



// callback hell
getUser((user) => {

    console.log(user);
    enrolledCourses((courses)=> {

        console.log(courses);
        getPrice((price) => {

            console.log(price);
        });

    });

});





















