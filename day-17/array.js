


// Array

let newArray = [];
let row = [];

for (let i = 0; i < 4; i++) {

    console.log(i, 'main loop');

    for (let j = 0; j < 3; j++) {

        console.log(j);
        row.push(0);
        
        
    }

    console.log(row);
    newArray.push(row);
    row = []
}

console.log(newArray);
console.log(row);

















