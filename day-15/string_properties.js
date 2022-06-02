

// String

const text = 'I love JavaScript';

// finding length
console.log(text.length);
console.log(text['length']);

// finding character
console.log(text[0]);
console.log(text[text.length - 1]);
console.log(text.charAt(0));
console.log(text.charAt(11));
console.log(text.charAt(text.length - 1));


// finding index
console.log(text.indexOf('a'));
console.log(text.indexOf('w'));
console.log(text.indexOf('JavaScript'));


// text uppercase / lowercase
console.log(text.toUpperCase());
console.log(text.toLowerCase());


// check string include true or false
console.log(text.includes('J'));
console.log(text.includes('love'));
console.log(text.includes('move'));


// sanitization
console.log(text.trimStart());
console.log(text.trimEnd());
console.log(text.trim());
console.log(text.trim().length);


const sentence = 'I love JavaScript';

// text cutting
console.log(sentence.slice(7));
console.log(sentence.slice(0, 7));
console.log(sentence.slice(7, 11));

console.log(sentence.substring(7));
console.log(sentence.substring(7, 11));
console.log(sentence.substr(7, 4));


// concatenation
console.log(sentence.concat('!', ' Yeah'));
console.log(sentence + ' Ohh!');


// concert string to array
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split(','));
console.log(sentence.split());





