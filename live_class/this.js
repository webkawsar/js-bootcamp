

const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 27,
    profession: 'Developer',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const { firstName, lastName, age: myAge = {}, fullName } = profile;

console.log(firstName)
console.log(lastName)
console.log(myAge)
console.log(fullName())


