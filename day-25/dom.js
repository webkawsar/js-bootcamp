
// console.log(window);
// console.log(document);

let value =  document;

// get html collections
value = document.all;

// get html collections
value = document.links;

value = document.title;

// get html collections
value = document.forms;

value = location;

// const windowLocation = window.location;
// const documentLocation = document.location;
// console.log({windowLocation});
// console.log({documentLocation});

const container = document.getElementById('container');
// console.log(container, 'container');

// get html collections
let lists = document.getElementsByClassName('list-item');
// console.log(lists, 'lists');
// lists = Array(lists);
// lists.forEach(item=> console.log(item));

// for (let i = 0; i < lists.length; i++) {
//     const element = lists[i];
//     console.log(element, 'element');
// }

// for (const val of lists) {
//     console.log(val);
// }



// get html collections
const nav = document.getElementsByTagName('nav');
// console.log(nav, 'nav');


// select like css selector
const cont = document.querySelector('#container');
// console.log(cont, 'cont');

const list = document.querySelector('.list');
// console.log(list, 'list');

const listItem = document.querySelector('.list-item');
// console.log(listItem, 'listItem');
// console.log(listItem.textContent, 'textContent'); // textContent code e ejevabe ache oivabe dey
// console.log(listItem.innerHTML, 'innerHTML'); // get html 
// console.log(listItem.innerText, 'innerText'); // jevabe display ache oivabe dey


// get node list
const listItemAll = document.querySelectorAll('.list-item');
// console.log(listItemAll);
// listItemAll.forEach(item=> console.log(item))


// get attribute
// const link = document.querySelector('a').getAttribute('href');
// console.log(link, 'link');

// set attribute
// const setAttr = document.querySelector('a');
// setAttr.setAttribute('custom-attr', 'customValue');
// console.log(setAttr, 'setAttr');


// className
// const link = document.querySelector('a');
// console.log(link.getAttribute('class'));
// console.log(link.getAttribute('href'));
// console.log(link.className);

// get dom token list 
// console.log(link.classList.add('second-class'));
// console.log(link.classList);

// get id value
// console.log(link.id);

// get href value
// console.log(link.href);

// get undefined or use className property
// console.log(link.class);
// console.log(link, 'link');

const menu = document.querySelector('.menu');
console.log(menu, 'menu');
// get node lists
console.log(menu.childNodes, 'childNodes');
// get html collections
console.log(menu.children, 'children');
// next sibling text node e cole jay
console.log(menu.children[0].nextSibling, 'nextSibling');
// nextElementSibling next node e jay
console.log(menu.children[0].nextElementSibling, 'nextElementSibling');
console.log(menu.children[0].nextElementSibling.nextElementSibling, 'nextElementSibling');

console.log(menu.children[0].nextElementSibling.parentElement, 'parentElement');
console.log(menu.children[0].parentElement.parentElement, 'parentElement');

console.log(menu.children[0].nextElementSibling.parentNode, 'parentNode');
console.log(menu.children[0].nextElementSibling.parentNode.parentNode, 'parentNode');


// console.log(value, 'value');

























