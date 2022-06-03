



// Object and Array destructing

const profile = {
    name: 'Kawsar Ahmed',
    age: 25,
    job: 'Web Developer',
}

// const {name, age, job} = profile;
// console.log(name);
// console.log(age);
// console.log(job);


const info = ['Shamim Mohammad', 25, 'Pilot'];
const [name, age, job]= info;
console.log(name);
console.log(age);
console.log(job);



const takeItObject = ({name, ...others}) => {
    console.log(name);
    console.log(others);
}
takeItObject(profile);

const takeItArray = (msg, ...rest) => {

    console.log(msg);
    console.log(rest);
}
takeItArray('Hi', 'Guys', info);





