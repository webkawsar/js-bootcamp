


// Exercise 1
let num = 1;
while (num <= 10) {
    console.log(num); // 1, 3, 5, 7, 9
    num += 2
}





// Exercise 2
let number = 1;
while (number <= 20) {
    if(number % 4 === 0){
        console.log(number);
    }
    number++;
}


// Exercise 3
let count = 10
while (count > 0) {
    console.log(count + 1);
    count--;
}

// Exercise 4
// Print even number between 1 to 100 by using for loop
for (let i = 0; i <= 100; i+= 2) {
    if(i === 0){
        continue;
    }
    console.log(i);
}


let loopCount = 0;
while (loopCount <= 10) {

    if(loopCount === 0){
        loopCount += 2;
        continue;
    }

    console.log(loopCount);
    loopCount += 2;
}

// Exercise 5
// Run loop and add $ in each repetition
let text = '';
for (let i = 0; i <= 6; i++) {
    text += '$';
    console.log(text);
}



// Exercise 6
for (let i = 1; i <= 100; i++) {
   
    if(i % 3 === 0 && i % 5 === 0) {

        console.log(`FizzBuzz`);
    } else if(i % 3 === 0){

        console.log(`Fizz`);
    } else if(i % 5 === 0){

        console.log(`Buzz`);

    } else {
        console.log(i);
    } 
    
}



