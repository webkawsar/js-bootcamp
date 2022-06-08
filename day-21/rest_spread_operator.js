


// rest and spread

const object1 = {
    firstName: "kawsar",
    age: 25,
    skills: ['Vue.js', 'Node.js']
}

const {...rest} = object1;
const object2 = rest;

object1.hobby = 'Tour'
object1.skills.push('React.js');

console.log(rest);
console.log(object1);
console.log(object2);






















