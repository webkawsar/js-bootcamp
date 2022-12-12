


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
























