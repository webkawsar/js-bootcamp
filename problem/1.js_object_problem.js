



function checkAge(data) {

    if (data === { age: 18 }) {

      console.log("You are an adult!");
    } else if (data == { age: 18 }) {

      console.log("You are still an adult.");
    } else {

      console.log(`Hmm.. You don't have an age I guess`);
    }

}
  
checkAge({ age: 18 });


const person1 = {
  fName: 'Kawsar',
  lName: 'Ahmed'
}

const person2 = {
  fName: 'Kawsar',
  lName: 'Ahmed'
}

console.log(JSON.stringify(person1) === JSON.stringify(person2));




