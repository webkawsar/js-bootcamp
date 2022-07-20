



// Object Oriented JavaScript
// constructor aabar dekte hobe


// Constructor Function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    let _age = age;
    this.fullName = () => {
        return this.firstName + ' ' + this.lastName;
    }

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

const person1 = new Person('kawsar', 'ahmed', 25);
console.log(person1);

person1._age = 10;
console.log(person1._age);

console.log(person1.age);
person1.age = 26;
console.log(person1.age);





