





/******************** **************************/

/*
 * 
 * 
 * 
    
    আজকে আমরা জানব Tagged Template Literals কি?, কেন?, কিভাবে কাজ করে?
    Tagged Template Literals: 
    Tagged template literals were enabled by a new technology introduced in ES6, called “template literals”. This is simply a syntax that makes string interpolation possible in JavaScript. Before template literals was born, JavaScript developers would need to do ugly string concatenation.


    Tagged Template Literals কে আমরা দুইভাগে ভাগ করতে পারি ___
    (i) Template Literals
    (ii) Tagged Function


    Template Literalsঃ
    MDN ডকুমেন্টেশন এ বলা আছে "Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates."




    জাভাস্ক্রিপ্টে আমরা একটা স্ট্রিং এর সাথে আরেকটা স্ট্রিং জোড়া লাগাতে পারি এভাবে __
    const hi = "Hi!";
    const guys = " Guys";
    console.log(hi + guys); // "Hi! Guys"


    Multiline এ লিখতে চাইলে এভাবে ___
    const bangladesh = 'The name of ' +
        'my country is ' + 
        'Bangladesh'


    const sentence1 = "The name of my country is"
    const sentence2 = "Bangladesh,";
    const sentence3 = "Its official name is the";
    const sentence4 = "People's Republic of Bangladesh.";

    const fullSentence = sentence1 + " " + sentence2 + " " + sentence3 + " " + sentence4;
    console.log(fullSentence)
    

    এভাবে প্লাস দিয়ে দিয়ে একটা স্ট্রিং এর সাথে আরেকটা স্ট্রিং কে জোড়া লাগানো অনেক বিরক্তিকর এবং দেখতেও বেশ বিদ্ঘুটে। এখানে মাত্র চারটা  sentence নিয়ে একটা ফুল বাক্য তৈরি করা হয়েছে এতেই দেখতে কেমন লাগছে আর যদি আপনার এমন কোন কাজ থাকে যেখানে অনেক অনেক ভ্যারিয়েবল জয়েন ্করা লাগতে পারে তাহলে বুঝতেই পারছেন কেমন হতে পারে! 
    
    আমরা চাইলে এভাবেও করতে পারি __
    
    const js = "JavaScript ";
    const dev = "Developer";
    
    const sentence = js.concat(dev);
    console.log(sentence); // "JavaScript Developer"


    const sentence1 = "The name of my country is"
    const sentence2 = "Bangladesh,";
    const sentence3 = "Its official name is the";
    const sentence4 = "People's Republic of Bangladesh."; 

    const fullSentence = sentence1.concat(sentence2, sentence3, sentence4);
    console.log(fullSentence);


    এটা দেখতে কিছুটা ক্লিন মনে হলেও যদি দুইটা স্ট্রিং এর মাঝখানে মাঝখানে স্পেস দিতে যাই তাহল যেই লাউ সে কদু হয়ে গেল। তাহলে এর চাইতে কোন বেস্ট সল্যুশন নাই? 

    অবশ্যই আছে । জাভাস্ক্রিপ্টের নতুন ভার্শন ES6 এ এসেছে Template Literals।  একে বিভিন্ন নামে ডাকা হয় Template Strings, String Templates, Back-Tics Syntax ইত্যাদি। 


    
    স্ট্রিং লেখার সময় single quote অথবা double quote এর পরিবর্তে Template Literals ব্যাক-ট্রিক(``) ইউজ করে । 
    let text = `Hello World!`;


    Template Literals এর সাথে আমরা  single quote অথবা double quote ও ব্যবহার করতে পারি। 
    let text = `He's often called "Johnny"`;


    কোন একটা স্ট্রিংকে Multiline এ লিখতে পারি। 
    let text = `The quick
    brown fox
    jumps over
    the lazy dog`;


    স্ট্রিং এর মাঝে ভ্যারিয়েবলস interpolate করতে পারি খুব সহজে। এটাকে string Interpolation বলে। অটোমেটিক্যালি  ভ্যারিয়েবলস এর আসল ভ্যালু রিপ্লেস হয়ে সেখানে বসে যাবে। 
    const countryName = "Bangladesh,";
    const fullCountryName = "People's Republic of Bangladesh."; 

    const fullSentence = `The name of my country is ${countryName}, Its official name is the ${fullCountryName}`
    console.log(fullSentence);



    শুধু কি ভ্যারিয়েবল? আমরা চাইলে Template Literals এর মাঝে expressions ও লিখতে পারি। 
    const a = 5;
    const b = 10;
    console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);




    Tagged Function: A more advanced form of template literals are tagged templates.

    Tagged Function কিভাবে কাজ করে দেখার আগে আমাদের জানতে হবে Function কিভাবে কাজ করে। এটা আমরা সবাই কম-বেশী জানি। তারপরেও আমি একটু স্মরন করিয়ে না দিলে না হয়। 


    function sayHi() {
    
        console.log('Hi! Guys');
    }

    sayHi();


    যদি ফাংশনের মাঝে কোন আর্গুমেন্ট পাস করি তাহলে এভাবে রিসিভ করে কাজ করতে পারি___

    function sayHi(greetMsg) {
        
        console.log(`${greetMsg} Guys`); // Hi! Guys
    }

    const greeting = 'Hi!';
    sayHi(greeting);



    এখন দেখি Tagged Function কিভাবে কাজ করেঃ আমরা সাধারনত যেভাবে ফাংশন কল করি (ফাংশন এর নাম লিখে সাথে () দিয়ে) এভাবে কল না করে শুধুমাত্র ফাংশন এর নাম লিখে এর সাথে কোন Template Literals দিলে সে ধরে নেয় এটা একটা Tagged Template Literals এবং কল করে। এই ফাংশনটা প্রত্যেকটা Interpolation এর মধ্যে দিয়ে যাবে। তাহলে ফাংশন এর আর্গুমেন্ট হিসেবে কিছু না কিছু দিবে নিশ্চয়। তাহলে দেখে নেয়া যাক 

    function myTagFunction(firstParam, secondParam, thirdParam, fourthParam) {

        console.log(firstParam); // ['The quick', 'fox ', 'over the lazy ', ' and cat']
        console.log(secondParam); // brown
        console.log(thirdParam); // jumps
        console.log(fourthParam); // dog
    }

    const color = 'brown';
    const way = 'jumps';
    const animal = 'dog';

    myTagFunction`The quick ${color} fox ${way} over the lazy ${animal} and cat`




    এখানে ফাংশন এর প্রথম প্যারামিটার হিসেবে Template Literals এর interpolated ছাড়া বাকী অংশ থাকবে Array আকারে । এর পরের প্যারামিটার হিসেবে থাকবে যে কয়টা string Interpolation হবে ঐ কয়টা প্যারামিটার । উপরের Template Literals এর মাঝে string Interpolation হয়েছে তিনবার । তাহলে ফাংশন এর প্রথম প্যারামিটার পরে তিনটা প্যারামিটার দিয়ে  string Interpolation এর ভ্যালু রিসিভ করা যাবে। এখন একটা Template Literals এর মাঝে অসংখ্য বার string Interpolation হলো তাহলে কি আপনি একটা একটা করে string Interpolation গুনে গুনে ঐ কয়টা প্যারামিটার বসাবেন। উত্তর হলো না। 
    আপনি জাভাস্ক্রিপ্টের ES6 এর REST Operator জানা থাকলে প্রথম প্যারামিটার বাদে যেকয়টাই string Interpolation হোক না কেন আমরা REST Operator দিয়ে একটা প্যারামিটার বসিয়ে সবগুলো string Interpolation এর ভ্যালু একসাথে নিয়ে নিব। যেমনঃ 

        
function myTagFunction(firstParam, ...restParam) {

    console.log(firstParam); // ['The quick', 'fox ', 'over the lazy ', ' and cat']
    console.log(restParam); // ['brown', 'jumps', 'dog']

}

const color = 'brown';
const way = 'jumps';
const animal = 'dog';

myTagFunction`The quick ${color} fox ${way} over the lazy ${animal} and cat`

    একটা একটা করে প্যারামিটার না বসিয়ে খুব সহজে  এভাবে একসাথে নিয়ে নিলাম। এখন এই ভ্যালু নিয়ে আপনি খেলাধুলা করতে পারেন। 

    সুক্ষ একটা বিষয় বলা দরকার। কোন একটা  Template Literals এর প্রথমেই যদি string Interpolation করে ফেলেন তাহলে ফাংশন এর প্রথম প্যারামিটার এ যে array of string values পাওয়া যায় সেখানে, ঐ array of string values এর প্রথম ইন্ডেক্স এ '' স্ট্রিং পাবেন। ঠিক এভাবে শেষে যদি কোন স্ট্রিং না থাকে তাহলে '' পাবেন। যেমন____


function myTagFunction(firstParam, ...restParam) {

    console.log(firstParam); // ['', 'fox ', 'over the lazy ', '']
    console.log(restParam); // ['brown', 'jumps', 'dog']

}

const color = 'brown';
const way = 'jumps';
const animal = 'dog';

myTagFunction`${color} fox ${way} over the lazy ${animal}`

    এখানে  Template Literals এর প্রথমেই শুরু হয়েছে string Interpolation এর মাধ্যমে এবং শেষ হয়েছে string Interpolation দিয়ে। তাই firstParam হিসেবে array of string values পাওয়া যাচ্ছে সেখানে প্রথম ইন্ডেক্সে "" স্ট্রিং এবং শেষ ইন্ডেক্সে ""। কারন প্রথমে এবং শেষে কোন স্ট্রিং ছিল না তাই।




    রেফারেন্স হিসেবে আমি যা বেছে নিয়েছিঃ
    (i) https://www.w3schools.com/js/js_string_templates.asp
    (ii) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    (iii) https://www.freecodecamp.org/news/a-quick-introduction-to-tagged-template-literals-2a07fd54bc1d/
    (iv) https://www.youtube.com/watch?v=5JTE3JShAZU&list=PLyrs5AgsUPcXhDGQ02G13cdp5Ts7jHR5k&index=123


    
// video resource
// https://www.youtube.com/watch?v=5JTE3JShAZU&list=PLyrs5AgsUPcXhDGQ02G13cdp5Ts7jHR5k&index=123
// https://www.youtube.com/watch?v=3u9Yn9Ft0ZM
// https://www.youtube.com/watch?v=4oVJVglLLns




*
* 
*/





function myTagFunction(firstParam, ...restParam) {

    console.log(firstParam); // ['', 'fox ', 'over the lazy ', '']
    console.log(restParam); // ['brown', 'jumps', 'dog']

}

const color = 'brown';
const way = 'jumps';
const animal = 'dog';

myTagFunction`${color} fox ${way} over the lazy ${animal}`



