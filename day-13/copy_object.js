


const object = {
    name: 'Kawsar Ahmed',
    age: 25,
    skills: ['Node.js', 'Vue.js', 'MongoDB', 'Express']
}

// Way 1 deep copy hoy na
const object1 = {};
for (const key in object) {
    object1[key] = object[key];
}
console.log(object1);


//Way 2 deep copy hoy na
const object2 = Object.assign({}, object);
console.log(object2);

// object.skills.unshift('Teach');
// console.log(object1);
// console.log(object2);


// Way 3 deep copy hoy na
let object3 = {...object};
// object.skills.unshift('Teach');
console.log(object3);


// Way 4 deep copy hoy
let object4 = JSON.parse(JSON.stringify(object));
console.log(object4);



object.profession = 'Web Developer';
object.skills.unshift('React.js')

console.log(object);
console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);



