


const profile = {
    firstName: 'Kawsar',
    lastName: 'Ahmed',
    profession: 'Web Developer',
}

// Dot Notation
console.log(profile.profession); // Web Developer

// Bracket Notation
console.log(profile['profession']); // Web Developer

// Dynamic Access
const pro = 'profession';
console.log(profile[pro]); // Web Developer

// Object Destructuring
const { profession } = profile;
console.log(profession); // Web Developer


console.log('firstName' in profile);
























/***************************************************** */


/****
 * 
 * প্রথমে আমরা একটু পিছনে ফিরে যাই ___
 * 
 * console.log('5' * 6); // 30
 * 
 * এটা কিভাবে সম্ভব? জাভাস্ক্রিপ্ট একটু স্মার্ট বেশী। ডেভলপারের যাতে অনেক কিছু নিয়ে বেগ পোহাতে না হয় তাই সে 
 * নিজে থেকে এক্সট্রা অনেক কিছু করে দেয় ডেভলপারকে । ডেভলপারের লাইফ ইজি করে । আর  এই ইজি করতে গিয়ে যতসব গন্ডগোল পাকাইছে। 
 *  
 * এখানেও ঠিক তাই হয়েছে। সে দেখলো ডেভলপার স্ট্রিং '5' এর সাথে নাম্বার 6 কে গুন করেছে । এটা তো সম্ভব না!। সে একটু স্মার্ট বেশী তাই নিজে থেকে আলগা পিরিত দেখিয়ে স্ট্রিং '5' কে নাম্বার 5 এ কনভার্ট করে নিয়েছে এবং এর সাথে নাম্বার 6 এর গুন করে দিয়ে আল্টিমেট রেজাল্ট হিসেবে 30 শো করেছে। এই জিনিসটাকেই জাভাস্ক্রিপ্টের coercion ফিচার বলে (implicit conversion of values from one data type to another)। জাভাস্ক্রিপ্ট নিজে থেকে এই কাজ করেছে তাকে এভাবে explicitly বলে দিতে হয় নাই ভাই, তুমি এটাকে প্রথমে নাম্বার  5 এ কনভার্ট করে পরে এটার সাথে নাম্বার 6 গুন করে আমাকে রেজাল্ট শো করো।  আসলে সে নিজে থেকে  এরকম কাজ করতে পারে।  
 * 
 * 
 * তাই বলে সে এটা করে দিতে পারবে না
 * console.log('Hi, guys!' * 6); // NaN
 * 
 * 'Hi, guys!' এটা একটা স্ট্রিং । এটাকে নাম্বারে কনভার্ট করতে পারেনি বিধায় স্ট্রিং এর সাথে নাম্বারের গুন সম্ভব নয় তাই NaN রিটার্ন করে দিয়েছে। 
 * যারা একটু খুঁতখুঁতে স্বভাবের তাদের মনে আবার উকি দিয়েছে এখানে NaN আসলো কিভাবে ? তাদের জন্য NaN নিয়ে আমার বিস্তারিত পোস্ট আছে কমেন্টে লিঙ্ক দেয়া থাকবে। 
 * 
 * 
 * 
 * 
 * এখন জানব truthy / falsy ভ্যালু কি? 
 * 
 * MDN ডকুমেন্টেশন অনুযায়ী "A truthy value is a value that is considered true when encountered in a Boolean context".
 * MDN ডকুমেন্টেশন অনুযায়ী "A falsy value is a value that is considered false when encountered in a Boolean context."".
 * 
 * তাহলে আমরা এভাবে বলতে পারি "In JavaScript, a truthy or falsy value is a value that is being casted into a boolean when evaluated in a boolean context"। 
 * 
 * Boolean context এ কোন একটা ভ্যালুকে কিভাবে evaluate করা হচ্ছে তার উপর ভিত্তি করে তাকে truthy / falsy (evaluates to true / false) হিসেবে consider করা হয় । তার মানে "truthy / falsy values" এই টার্মটার জন্মই হয় Boolean context এ। 
 * "When a value is coerced to a boolean, we also call that either truthy or falsy." জাভাস্ক্রিপ্ট নিজে থেকে এই ভ্যালুকে বুলিয়ান হিসেবে ট্রিট করে । আর বুলিয়ান মানেই true / false । 
 * 
 * 
 * 
 * জাভাস্ক্রিপ্ট Boolean context এ type coercied করে statement execute  করে ফেলে ।
 * 
 * if(Boolean) {
 * 
 *    // something
 * } else {
 *  
 * // false
 * }
 * 
 * 
 * এখানে আমরা if() statement এ বুলিয়ান দিতে হবে। আর বুলিয়ান হয় true / false। যদি আমরা if() statement এ বুলিয়ান হিসেবে true দেই তাহলে ভিতরের কোড 
 * execute হবে । আর যদি false দেই হলে else { } ব্লকের কোড execute হবে । তার মানে এই বেচারা true / false ছাড়া কিছু বুঝে না । আর true / false আসে একমাত্র Boolean থেকে । 
 * 
 * if(true) {
 *
 *   console.log('Yeah!, Truthy value');
 *
 * } else {
 *
 *   console.log('Ohh!, Falsy value');
 * }
 * 
 * যেহেতু বারবার বুলিয়ান এর প্রসঙ্গ চলে আসছে তাহলে in a nutt shell কিছু বলতে হয়।  
 * 
 * এখন আমরা জাভাস্ক্রিপ্টের বুলিয়ান সম্পর্কে জানব!
 * 
 * জাভাস্ক্রিপ্টে প্রধানত দুই ধরনের ডাটা টাইপ আছে ____
 * (i) Primitive data type
 * (ii) Reference / Complex data type
 * 
 * বুলিয়ান হচ্ছে একটা Primitive ডাটা টাইপ । বুলিয়ান ভ্যালু হিসেবে শুধুমাত্র true or false রিটার্ন করে । 
 * 
    console.log(Boolean(true)); // true
    console.log(Boolean(false)); // false
    console.log(Boolean(0)); // false

 * 
 * 
 * এখন কেই যদি if() statement এ বুলিয়ান না দিয়ে অন্য যেকোন ডাটা টাইপের ভ্যালু  দিয়ে দেয় তাহলে জাভাস্ক্রিপ্ট নিজ থেকে বুলিয়ানে coerced করে । truthy ভ্যালুকে true হিসেবে consider করে আর falsy ভ্যালুকে false হিসেবে consider করে। 
 * 
 * 
 * তাহলে দেখা যাক কোনকোন ভ্যালু truthy আর কোনকোন ভ্যালু falsy। truthy ভ্যালু অসংখ্য অন্যদিকে falsy সীমিত । তাই সহজে মনে রাখার জন্য আমরা  আগে falsy ভ্যালু জেনে নিব । falsy ভ্যালু বাদে যা থাকবে বাকী সব truthy ভ্যালু । 
 * 
 * 
 * জাভাস্ক্রিপ্ট falsy ভ্যালুঃ 
    console.log(Boolean(false)); // false
    console.log(Boolean(0)); // false
    console.log(Boolean(-0)); // false
    console.log(Boolean(0n)); // false
    console.log(Boolean("")); // false
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
    console.log(Boolean(NaN)); // false
 * 
 * 
 * এই আটটা ভ্যালুকে জাভাস্ক্রিপ্ট falsy ভ্যালু হিসেবে কনসিডার করা হয়। আর যা আছে সব truthy হিসেবে কনসিডার হয় 
 * 
 *  console.log(Boolean(true)); // true
    console.log(Boolean({})); // true
    console.log(Boolean([])); // true
    console.log(Boolean(function() {})); // true

 * 
 * এগুলো ছাড়াও আরও অসংখ্য truthy ভ্যালু আছে । তবে কোন ভ্যালু truthy / falsy বের করার আরেকটা টেকনিক আছে এবং সেটা বেশী দেখতে পাবেন। এটা হচ্ছে লজিক্যাল (!) নট অপারেটর ব্যবহার করে। কোন একটা ভ্যালুর সামনে লজিক্যাল (!) নট অপারেটর দিলে ঐ ভ্যালুকে সে বুলিয়ানে কনভার্ট করে truthy হলে এর বিপরীত রেজাল্ট শো করবে আর falsy হলে এর বিপরীত রেজাল্ট শো করবে। মোটকথা ভ্যালু truthy / falsy যাইহোক না কেন সে এর বিপরীত রেজাল্ট শো করবে । আর এটা হচ্ছে কিভাবে? এটা জাভাস্ক্রিপ্ট নিজে থেকে type coercied করে আমাদের দিচ্ছে। 
 * 
 * console.log(!false); // true
 * console.log(!null); // true
 * console.log(!undefined); // true
 * console.log(!404); // false

 * এখন এই লজিক্যাল নট অপারেটর আমাদের যেই ভ্যালু সেটার বিপরীত রেজাল্ট দিচ্ছে। আমি যদি চাই, না আমার আসল রেজাল্টটাই লাগবে তাহলে? একটু ট্রিক করে আমাদের আসল রেজাল্ট পেতে পারি। কোন একটা ভ্যালুর সামনে একটা লজিক্যাল নট অপারেটর দিলে ঐ ভ্যালু truthy / falsy যাই হোক এর বিপরীত রেজাল্ট পাব। এখন যদি ঐ ভ্যালুর সামনে দুইটা লজিক্যাল নট অপারেটর দেই তাহলে সে আসল রেজাল্ট শো করবে। যেমন ___
 * 
    console.log(!!false); // false
    console.log(!!null); // false
    console.log(!!undefined); // false
    console.log(!!404); // true

   তার মানে কোন ভ্যালুর সামনে একটা লজিক্যাল নট অপারেটর দিলে ঐ ভ্যালুর বিপরীত রেজাল্ট পাব আর দুইটা লজিক্যাল নট অপারেটর দিলে আসল রেজাল্ট পাব। ব্যাস এইতো খেলা শেষ।
 * 
 * 
 */


// truthy or falsy value
// Boolean(true or false)
// how to prove is it truthy or falsy 
// logical not(!)
// Boolean constructor
// ternary
// logical and (&&) operator











console.log(!false); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!404); // false


console.log(!!false); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!404); // true

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false





if(10) { // Boolean(10)

    console.log('Yeah, Truthy value');

} else {

    console.log('Yeah, Falsy value');
}



console.log(true && "dog");


const age = 26;
console.log(typeof (age > 25));
console.log(Boolean(age > 25));

console.log(false.valueOf());







/********************Coercion feathered ***************/



console.log('5' * 6);
console.log('Hi, guys!' * 6); // NaN
console.log(Number('hi') * 5);

undefined + 1  // NaN
null + 1  // 1
Number(undefined)  // NaN
Number(null)  // 0


null == undefined  // true
null === undefined  // false
!!null === !!undefined  // true



/********************Coercion feathered ***************/





/*********************************** */
String(123) // explicit
123 + ''    // implicit


console.log(String(123));
console.log(123 + '' );
console.log(typeof (123 + ''));




String(123)                   // '123'
String(-12.3)                 // '-12.3'
String(null)                  // 'null'
String(undefined)             // 'undefined'
String(true)                  // 'true'
String(false)                 // 'false'











// Comparisons 
// comparisons in if statement
// OR comparisons ||
// AND comparisons &&
// Not operator !

// https://medium.com/sons-of-javascript/javascript-falsy-objects-and-comparisons-92d5888be09d
// https://medium.com/jspoint/truthy-vs-falsy-values-in-javascript-b9d9ada08bae#:~:text=In%20JavaScript%2C%20if%2Felse%20statement,These%20are%20as%20follows.&text=Therefore%2C%20if%20you%20use%20one,false%20values%20as%20shown%20below.


// https://www.sitepoint.com/javascript-truthy-falsy/



// https://www.youtube.com/watch?v=0O-9uXmqbFI
// https://www.youtube.com/watch?v=wFiVtqe1osM
// https://www.youtube.com/watch?v=J4N6ETFpdkA
// https://www.youtube.com/watch?v=s6omxb8gkPk&list=PLyrs5AgsUPcXhDGQ02G13cdp5Ts7jHR5k&index=24










/****
 * http://web.archive.org/web/20210824154118/https://j11y.io/javascript/truthy-falsey/
 * https://medium.com/@gobindathakur/dealing-with-javascript-falsy-values-d75a2f1b1c90
 * https://www.gobindathakur.com/javascript-falsy-values
 * 
 * https://mbeaudru.github.io/modern-js-cheatsheet/#external-resources-10
 * http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html
 * 
 * https://www.freecodecamp.org/news/falsy-values-in-javascript/
 * https://www.sitepoint.com/javascript-truthy-falsy/
 * https://dev.to/zachsnoek/what-are-truthy-and-falsy-in-javascript-j68
 * https://medium.com/jspoint/truthy-vs-falsy-values-in-javascript-b9d9ada08bae#:~:text=In%20JavaScript%2C%20if%2Felse%20statement,These%20are%20as%20follows.&text=Therefore%2C%20if%20you%20use%20one,false%20values%20as%20shown%20below.
 * 
 * 
 * https://www.30secondsofcode.org/articles/s/javascript-truthy-falsy-values
 * 
 * https://exploringjs.com/impatient-js/ch_booleans.html#falsiness-truthiness
 * 
 * 
 * http://speakingjs.com/es5/ch10.html#truthy_falsy
 * 
 * https://ultimatecourses.com/blog/understanding-the-this-keyword-in-javascript
 * 
 * 
 */



