


// javascript class

class Profile {

    // filled/property
    // private filled/property
    #id = 101;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        return this.name + '-' + this.age;
    }
}

const kawsar = new Profile('Kawsar', 26);
// console.log(kawsar);





class Profession extends Profile {
    constructor(name, age, profession) {
        super(name, age)
        this.profession = profession;
    }

    showInfo() {
        return super.showInfo() + '-' + this.profession;
    }

    #showProfession() {
        return this.profession;
    }
}

const kawsarP = new Profession('Kawsar', 26, 'Web Developer');
console.log(kawsarP);


















