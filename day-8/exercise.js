


// Use both if and switch statement


// age:¹less then 10
// output:stay home under your mom supervision

// age:more and equal then 10 and less then 15
// output:Try to gain knowledge from outside of home

// age:more then and equal to 15 and less than 18
//  output:prepare to cast vote

// age:more then 18
// output:cast you vote

// age:unknown
// output:You are out of range


// If Condition
const age = 12;
if(age < 10) {
    console.log('stay home under your mom supervision and feed khaw');

} else if(age >= 10 && age < 15) {
    console.log('Try to gain knowledge from outside of home');

} else if(age >= 15 && age < 18) {
    console.log('prepare to cast vote');

} else if(age > 18) {
    console.log('cast you vote for late night');

} else {
    console.log('You are out of range and boisha boisha muri khaw');
}


// Switch Statement
switch (true) {
    case age < 10:
        console.log('stay home under your mom supervision and feed khaw');
        break;

    case age >= 10 && age < 15:
        console.log('Try to gain knowledge from outside of home');
        break;

    case age >= 15 && age < 18:
        console.log('prepare to cast vote');
        break;

    case age > 18:
        console.log('cast you vote for late night');
        break;

    default:
        console.log('You are out of range and boisha boisha muri khaw');
        break;
}