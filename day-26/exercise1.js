

// Exercise-1(Try to create following structure by i=using Dom properties and method)
// ======================================================================
// <div class="container" id="container">
//   <h1 class="h1">Product List</h1>
//   <ul class="product-collection  mb-3">
//     <li class="product-collection-item" id="sample">Shoes</li>
//   </ul>
// </div>

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

ul.appendChild(li);
container.appendChild(h1);
container.appendChild(ul);
main.appendChild(container);

console.log(container, 'container');
console.log(main, 'main');
// console.log(h1, 'h1');
// console.log(ul, 'ul');
// console.log(li, 'li');
























