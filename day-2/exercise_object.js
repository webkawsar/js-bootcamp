

const demoProfile = {
    fName: 'Shamim',
    lName: 'Mohammad',
    age: 25,
    profession: 'Pilot',
    'is married': false
}

// console.log(demoProfile);
demoProfile._name = 'Shamim Mohammad'; // we can store value
// console.log(demoProfile);

demoProfile.Age = 26; // we can store value
// console.log(demoProfile);

// demoProfile.123 = 'hobe na' // can't store value

const prop = "color";
demoProfile[prop] = 'red'; // we can store value
// console.log(demoProfile);

// console.log(demoProfile['is married']); // access invalid key value



// const profile = {
//     firstName: 'Shamim',
//     lastName: 'Mohammad',
//     age: 25,
//     profession: 'Pilot',
//     place: 'Shamsher Nagar Biman Ghati',
//     'is Married': false
// }



const movies = [
    {
        id: 101,
        movieName: 'Jani na',
        rating: 8.9,
        category: 'fantastic'
    },
    {
        id: 102,
        movieName: 'Mani na',
        rating: 9.8,
        category: 'Romantic'
    },
    {
        id: 103,
        movieName: 'Chini na',
        rating: 9.8,
        category: 'ching chung vung'
    },

]

// console.log(movies[0].id + movies[0].movieName + movies[0].rating + movies[0].category);


const movieIndex = movies[1];
// console.log(movieIndex.id + movieIndex.movieName + movieIndex.rating + movieIndex.category);


