


// Arrow function and this

const sum = (a, b) => a + b;
console.log(sum(8, 9));


const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 25,
    fullDetails: function() {
        console.log(`${this.firstName} - ${this.lastName}`);
    },
    fullName() {
        console.log(`${this.firstName} - ${this.lastName}`);
    },
    info: () => {
        
        console.log(`${this.firstName} - ${this.lastName}`);
    }
}

profile.fullDetails();
profile.fullName();
profile.fullName.call({firstName: 'Mohammad', lastName: 'Shamim'});
profile.info();


const info = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    age: 25,
    sayHi() {
        console.log(`Hi ${this.firstName}`);

        const solvedByArrow = () => {
            console.log(`Hi Guys Mr. ${this.firstName}`);
        }

        solvedByArrow();

        return function() {
            console.log(`Hi Guys Mr. ${this.firstName}`); // undefined
        }
    }
}

info.sayHi()();














