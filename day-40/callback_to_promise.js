


// Callback to Promise

// 1. getting user
// 2. course enrollment
// 3. price of the course


// get user
const getUser = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
    
            resolve({
                fName: 'Kawsar',
                lName: 'Ahmed',
                age: 26,
                profession: 'Developer'
            });

            // reject('User not found!');
    
        }, 2000)

    })

}


// enrolled courses
const enrolledCourses = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
    
            resolve(['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB']);
    
        }, 2000)

    })
}


// price of course
const getPrice = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
    
            resolve('Price of Course: 3500');
    
        }, 2000)

    })
}


// this way like to callback
getUser()
    .then((user) => {

        console.log(user);
        enrolledCourses()
            .then(courses => {

                console.log(courses);
                getPrice()
                    .then(price => {

                        console.log(price);
                    })
                    .catch(priceError => {

                        console.log(priceError);
                    })

            })
            .catch(coursesError => {
                
                console.log(coursesError);
            })

    })
    .catch(userError => {

        console.log(userError);
    })





// another way
getUser()
    .then(user => {
        return enrolledCourses();
    })
    .then(courses => {
        return getPrice();
    })
    .then(price => {
        console.log(price);
    })
    .catch(error => {
        console.log(error);
    })





















