

// when this call in method this refers to owner of the method
const profile = {
    name: 'Kawsar',
    age: 25,
    bio(){
        console.log(`${this.name} is ${this.age}`);
    }
}

profile.bio()












