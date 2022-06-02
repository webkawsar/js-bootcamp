


// ১। গ্লোবাল রুলস

// ২। অবজেক্ট রুলস

// ৩। স্পষ্ট রুলস

// ৪। newকীওয়ার্ড রুলস


// this inside in method = object
// this inside in constructor function = object
// otherwise this always indicate window




// Global rules
function sayHi(){

    console.log('Hi');
    console.log(this, 'this inside in function');
}
sayHi();




// Object / method rules
const object = {
    name: 'Kawsar Ahmed',
    age: 25,
    sayHi: function() {

        console.log(this === object); // true
        console.log('Hi');
        console.log(this, 'this inside in method'); // this refer object

        return function() {

            console.log(this === object); // false
            console.log('Anonymous function');
            console.log(this, 'this inside in another function'); // this refer global object
        }
    }
}
object.sayHi()();



// solve top problem by using arrow function
const object1 = {
    name: 'Kawsar Ahmed',
    age: 25,
    sayHi: function() {

        console.log(this === object1); // true
        console.log('Hi');
        console.log(this, 'this inside in method'); // this refer to object1

        return () => {

            console.log(this === object1);  // true
            console.log(this, 'this inside in another function'); // this refer to object1 
        }
    }
}
object1.sayHi()();



const myObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    timer: function() {
        console.log('My name is ' + this.name); // My name is Zonayed Ahmed

       setTimeout(function() {

            console.log('This denote to global object');
            console.log('My name is ' + this.name); // My name is undefined

       }, 1000)
     }
}
myObj.timer();



const text1 = {
    age: 25
}

const text2 = {
    age: 25
}
console.log(text1 === text2); // false




const myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    msg: function() {

        console.log(this === myCustomObj); // true
        console.log('My name is '+ this.name);
    } 
 }
 myCustomObj.msg();



 const myCustomObj2 = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
       name: 'Ahmed Zonayed',

       msg: function() {

           console.log(this);
          console.log('My name is: ' + this.name);
       }
    }
 }

//  myCustomObj2.anotherObj.msg() // this refers here anotherObj

// bind / call / apply rules
 myCustomObj2.anotherObj.msg.call(myCustomObj2); // this refers here myCustomObj2



// new keyword rules
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

const kawsar = new Person('Kawsar Ahmed', 25, 'Developer');
const shamim = new Person('Shamim Mohammad', 25, 'Pilot');

console.log(kawsar);
console.log(shamim);












