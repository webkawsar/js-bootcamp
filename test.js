

// [ ]  ==  [ ]   ➟  false কিন্ত 
// [ ]  ==  ![ ]  ➟  true হয় কেন????
console.log(![]);
console.log(!![]);
console.log([] == []); // false
console.log([] == ![]); // true
console.log([] === []);
console.log(typeof []);


// আমরা জানি জাভাস্ক্রিপ্ট এ ডাটা টাইপ প্রধানত দুই ধরনের ---
// (i) Primitive Data Type
// (ii) Reference Data Type / Complex Data Type

// জাভাস্ক্রিপ্ট এ Truthy value এবং Falsey value বলে একটা টার্ম আছে। আগে জানব Falsey value কোনগুলো। 
// Falsey value হচ্ছে --- "", false, null, undefined, 0, 0n, আর বাদ বাকী যা আছে সব Truthy value । 

// এখন এই দুইটা টেকনিক কে কাজে লাগিয়ে নিচের প্রবলেম সল্যুশন করার ট্রাই করব। 

// জাভাস্ক্রিপ্ট এটা [ ]  ==  [ ] কম্পেরিজন করতে যায় তখন দেখে কম্পেরিজন অপারেটর দুই পাশে [] Array । আর [] Array হচ্ছে Reference Data Type / Complex Data Type । Reference ডাটা টাইপ মেমরীর আলাদা আলাদা লোকেশন কে indicate করছে ।  




console.log(isNaN(10)); // false
console.log(isNaN('Hello')); // true
console.log(isNaN('5')); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('NaN')); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN('123ABC')); // true
console.log(isNaN('')); // false
console.log(isNaN()); // true



// string
// number
// bigint
// boolean
// undefined
// symbol
// null






console.log(Number(10)); // 10
console.log(Number('Hello')); // NaN
console.log(Number('5')); // 5
console.log(Number(NaN)); // NaN
console.log(Number('NaN')); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number({})); // NaN
console.log(Number('123ABC')); // NaN 
console.log(Number('')); // 0
console.log(Number(0/0)); // NaN














console.log(Number.isNaN(Number(10))); // false
console.log(Number.isNaN(Number('Hello'))); // true
console.log(Number.isNaN(Number('5'))); // false
console.log(Number.isNaN(Number(NaN))); // true
console.log(Number.isNaN(Number('NaN'))); // true
console.log(Number.isNaN(Number(null))); // false
console.log(Number.isNaN(Number(undefined))); // true
console.log(Number.isNaN(Number({}))); // true
console.log(Number.isNaN(Number('123ABC'))); // true
console.log(Number.isNaN(Number(''))); // false
