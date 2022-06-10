

// JS Destructuring

const comObj = {
    anotherObj: {
       anotherNewObj: {
          title: 'JavaScript ES6'
       }
    }
 };

const {anotherObj: {anotherNewObj: {title}}} = comObj;
console.log(title );

// array 
const colorArr = ["red", "yellow", "blue", "green", "white", "black"];
const [first, second, ...rest] = colorArr;
console.log(first)
console.log(second)
console.log(rest)

// swap variable
let a = 10;
let b = 20;
 [a, b] = [b, a];
 console.log(a);
 console.log(b);


//  let person = {fullName: "Sarah", country: "Nigeria", job: "Developer"}; 
//  let fullName, country, job;
 
//  ({fullName, country, job}) = person;
 
//  console.log(fullName)



// Computed Property Name
 let prop = "name";
 let {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};
 console.log(foo);//"Sarah"



// Nesting in Object Destructuring
let person = {
    name: "Sarah",
    placeOne: {
        country: "Nigeria", 
        city: "Lagos" }, 
    friends: [
        {
            nameTwo: "Jarahhh",
            placeTwo: {
                country2: "BD", 
                city2: "Dhaka" 
            }, 
        },
        {
            nameThree: "Nairahh",
            placeThree: {
                country3: "PaK", 
                city3: "PK" 
            }, 
        },

    ]
};

const {name, placeOne: {country, city}, friends: [one, {nameThree, placeThree: {country3, city3}}]} = person;
console.log(name);
console.log(country);
console.log(city);
console.log(one);
console.log(nameThree);
console.log(country3);


const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };

const {fullName: {firstName}} = user;
console.log(firstName);

const metadata = {
    title: 'Scratchpad',
    translations: [
      [
        {
            locale: 'de',
            localization_tags: ['ok'],
            last_edit: '2014-04-14T08:43:37',
        }
      ],
      [
        {
            fName: 'Kawsar',
            lName: 'Ahmed',
            age: 25,
            skills: ['React.js', 'Vue.js']
        },
        {
            fName: 'Shamim',
            lName: 'Mohammad',
            age: 25,
            skills: ['Pilot', 'Dishum Dishum kora']
        },

      ]
    ],
    url: '/en-US/docs/Tools/Scratchpad'
  };

  const {translations: [firstItem, [secondOne, {fName, lName, skills: [sk1, sk2]}] ]} = metadata;
  console.log(firstItem);
//   console.log(secondItem);
  console.log(secondOne);
//   console.log(secondTwo);
// console.log(skills);
console.log(sk1);
console.log(sk2);
  

