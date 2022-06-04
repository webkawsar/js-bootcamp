


// rest and spread operator
// object destructing and rest
const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 25,
    job: 'Developer'
}

// rest
const {firstName, lastName, ...others} = profile;
console.log(firstName);
console.log(lastName);
console.log(others); // rest object value


const restObjFunc = ({ firstName, lastName, ...others}) => {
    
    console.log(firstName);
    console.log(lastName);
    console.log(others); // rest object value
}

restObjFunc(profile);








// array destructing and rest
const arr = [10, 15,  {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 25,
    job: 'Developer'
}, 20, 25, 30,];

const [one, two, three, ...othersRestArr] = arr;
console.log(one);
console.log(two);
console.log(three);
console.log(othersRestArr); //rest array value 


const restArrFunc = ([ one, two, ...others]) => {
    
    console.log(one);
    console.log(two);
    console.log(others); // rest object value
}

restArrFunc(arr);











