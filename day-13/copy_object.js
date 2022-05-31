


const object1 = {
    name: 'Kawsar Ahmed',
    age: 25,
    skills: ['Node.js', 'Vue.js', 'MongoDB', 'Express']
}

// let obj1 = {...object1};
let obj1 = JSON.stringify(object1);
console.log(obj1);



object1.profession = 'Web Developer';
object1.skills.unshift('React.js')


console.log(object1);
// console.log(JSON.parse(obj1));
console.log(obj1);


