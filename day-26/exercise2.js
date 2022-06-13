// Exercise-2(Try to Examine the common event like mouse Event and Keyboard event found in MDN DOCS "https://developer.mozilla.org/en-US/docs/Web/Events")

// Exercise-3:(Recap Event bubbling and event delegation by dummy example of your own)

// Exercise-4:(Bonus: Try to use insertAdjacentElement, insertAdjacentHTML, insertBefore from searching and reading MDN docs )
// afterbegin	After the beginning of the element (first child)
// afterend	After the element
// beforebegin	Before the element
// beforeend	Before the end of the element (last child)


const main = document.querySelector('main');
const container = document.createElement('div');
container.setAttribute('id', 'container');
container.className = 'container';

const h1 = document.createElement('h1');
h1.className = 'h1';
h1.innerText = 'Product List';

const ul = document.createElement('ul');
ul.className = 'product-collection';
ul.classList.add('mb-3');

const li = document.createElement('li');
// li.className = 'product-collection-item';
li.setAttribute('id', 'sample');
li.setAttribute('class', 'product-collection-item')
li.appendChild(document.createTextNode('Shoes'));

{/* <input type="text" name="" id="">
<button type="submit"></button> */}
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('name', 'addItem');
const submit = document.createElement('button');
submit.setAttribute('type', 'submit');
submit.innerText = 'Submit';


ul.appendChild(li);
container.appendChild(h1);
container.appendChild(ul);
container.appendChild(input);
container.appendChild(submit);
main.appendChild(container);
console.log(main, 'main');


ul.addEventListener('click', (e) => {

    if(e.target.className === 'product-collection-item') {
        e.target.remove();
    }
})


submit.addEventListener('click', () => {

    const li = document.createElement('li');
    li.setAttribute('class', 'product-collection-item')
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
})


















