


// javascript class

class Profile {

    // filled/property
    profession = 'JS Developer';
    // private filled/property
    #id = 101;
    #age = 26;

    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    fullName() {
        return this.name + '-' + this.lName;
    }

    static construct() {
        return new Profile('Shamim', 'Mohammad')
    }

    get age() {
        return this.#age;
    }

    set age(num) {
        if(num < 18) {
            throw new Error('You are not young developer')
        } else {
            this.#age = num;
        }
    }


}

const kawsar = new Profile('Kawsar', 'Ahmed');
console.log(kawsar);
// kawsar.age = 30;
// console.log(kawsar.age);
console.log(Profile.construct());




class Profession extends Profile {
    constructor(fName, lName, profession) {
        super(fName, lName)
        this.profession = profession;
    }

    fullName() {
        return super.fullName() + '-' + this.profession;
    }

    #showProfession() {
        return this.profession;
    }
}

const kawsarP = new Profession('Kawsar', 'Ahmed', 'Web Developer');
console.log(kawsarP);


















