

// Prevent Object Mutation
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};

// Prevents any changes to an object
Object.freeze(obj);

// Prevents adding properties to an object but can change in property value
// Object.preventExtensions(obj)

// Returns true if properties can be added to an object
const prevent3 = Object.isExtensible(obj)
console.log(prevent3); // true / false

obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
console.log(obj.newProp); // undefined




// check object has property
// method No. 1
const isHasProp = obj.hasOwnProperty('newProp');
console.log(isHasProp); // false

// method No. 2
const isHasProp2 = 'review' in obj;
console.log(isHasProp2); // true




















