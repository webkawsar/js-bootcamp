



// Promise to async/await

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



const result = async() => {

    try {

        const user = await getUser();
        const courses = await enrolledCourses();
        const price = await getPrice();

        console.log(user);
        console.log(courses);
        console.log(price);

        // return price;
        
    } catch (error) {
        
        console.log(error);
    }
}
result();

// result()
//     .then(price => {
//         console.log(price);
//     })
//     .catch(error => {
//         console.log(error);
//     })







