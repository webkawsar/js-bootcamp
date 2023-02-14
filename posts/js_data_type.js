



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





// string
// number
// bigint
// boolean
// undefined
// symbol
// null

