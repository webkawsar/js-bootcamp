



// Object Oriented JavaScript
// Prototype Chain part abar dekte hobe
// bind, call, apply abar dekte hobe



// const person1 = 'Kawsar';
// console.log(person1.length);


// const person2 = new String('Imran');
// console.log(person2.length);




// const str = new String('Hello World');
// console.log(str.__proto__);
// const arr = new Array([1, 2, 3]);
// const obj = new Object({fName: 'Kawsar'});









// Constructor Function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    let _age = age;
    

    Object.defineProperty(this, 'age', {
        get () {
            return _age + ' years old.';
        },
        set (num) {
            if(num < 18) {
                throw new Error('You must be 18 to use the app');
            } else {
                _age = num;
            }
        },
    })


}


Person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName;
}

const person1 = new Person('kawsar', 'ahmed', 25);
console.log(person1);



// inheritance
function PersonF(firstName, lastName, age, profession) {
    // in this case, prototype can't inherit
    Person.call(this, firstName, lastName, age);
    this.profession = profession;
}


// PersonF.prototype = Person.prototype;
PersonF.prototype = Object.create(Person.prototype)

// it can add constructor name in prototype
PersonF.prototype.constructor = PersonF;

PersonF.prototype.professionalInfo = function() {
    return this.firstName + ' ' + this.lastName + ' ' + this.profession;
}

const personF = new PersonF('Kawsar', 'Ahmed', 26, 'Web Developer');
console.log(personF);





