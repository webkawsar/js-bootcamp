

// Bind / Call / Apply

const karim = {
    name: 'Karim Rahman',
    dob: 1996,
    age: function(currentYear, msg) {

        console.log(`${msg} ${this.name}`);
       console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
    }
}

const rahim = {
    name: 'Abdur Rahim',
    dob: 1986
}

// karim.age(2020, 'Hello);

// karim.age.call(rahim, 2022, 'Hi');
// karim.age.apply(rahim, [2044, 'Hi']);


// const rahimAge = karim.age.bind(rahim);
// rahimAge(2022, 'Hi Guys')


// bind method e argument pass kora jay or pore o argument pass kora jay
// const rahimAge = karim.age.bind(rahim, 2022, "Hi Guys");
// rahimAge()

const rahimAge = karim.age.bind(rahim, 2022);
rahimAge("Hi Guys")

















