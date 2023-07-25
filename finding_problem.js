


// Collect Best Best problem
/************************************************************************************************************
 *                                  Problem No. 1
 ************************************************************************************************************/

for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
}



/************************************************************************************************************
 *                                  Problem No. 2
 ************************************************************************************************************/


//   নিচের 'b' অবজেক্ট এর ভিতরের 'a' প্রোপার্টিটির ভ্যালু destructure করে কিভাবে নিরাপদ ভাবে প্রিন্ট করবেন? মনে রাখবেন 'c' অবজেক্টেটি নিজে সহ তার যেকোন প্রোপার্টি মিসিং থাকতে পারে।

  const a = 5;
  const b = {
      b: 1,
      c: {
          d: {
              a: 5,
          },
      },
  };



/************************************************************************************************************
 *                                  Problem No. 3
 ************************************************************************************************************/

// [ ]  ==  [ ]   ➟  false কিন্ত 
// [ ]  ==  ![ ]  ➟  true হয় কেন????

console.log(![]);
console.log(!![]);
console.log([] == []); // false
console.log([] == ![]); // true
console.log([] === []);
console.log(typeof []);





/************************************************************************************************************
 *                                  Problem No. 4.
 ************************************************************************************************************/





// [ ]  ==  [ ]   ➟  false কিন্ত 
// [ ]  ==  ![ ]  ➟  true হয় কেন????



// 44. What's the output?
function* generator(i) {
    yield i;
    yield i * 2;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  console.log(gen.next().value);











  console.log(2+true)
  console.log(4+3+2+"1")
  console.log("1"+2+4)
  
  // unary operator
  console.log( +'dude')
  console.log(typeof +'5')
  
  var y = 1, x = y = typeof x;
  console.log(x)
  
  
  
  
  
  // comma operator
  var a = (2, 3, 5);
  console.log(a)
  
  // var b = (1, 5 - 1) \* 2
  // console.log(b)
  
  const c = (1, 5 - 1);
  console.log(c)
  
  console.log(!5)
  
  console.log(0 instanceof Number)
  
  
  
  // reference
  // https://github.com/rohan-paul/Awesome-JavaScript-Interviews/blob/master/README.md



