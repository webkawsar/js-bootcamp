


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
    // height = '5.8'
    constructor(fName, lName, profession) {
        super(fName, lName)
        this.profession = profession;

        this.height = this.height.bind({});
    }

    fullName() {
        return super.fullName() + '-' + this.profession;
    }

    #showProfession() {
        return this.profession;
    }

    height() {
        console.log(this);
        return 'My Height is 5.8"'
    }
}

const kawsarP = new Profession('Kawsar', 'Ahmed', 'Web Developer');
console.log(kawsarP);
console.log(kawsarP.height);
console.log(kawsarP.height());

















