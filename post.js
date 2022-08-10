


const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    profession: 'Web Developer',
}

// Dot Notation
console.log(profile.profession);

// Bracket Notation
console.log(profile['profession']);

// Dynamic Access
const pro = 'profession';
console.log(profile[pro]);

// Object Destructuring
const { profession } = profile;
console.log(profession);


console.log('firstName' in profile);

