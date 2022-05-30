



// function productDetails() {
//     console.log(`${product.name} price is ${product.price} and ${product.isAvailable} in stock`);
// }


// Object Method
const product = {
    name: 'Printed T-shirt',
    price: 100,
    isAvailable: 'available',
    productDesc: function() {
        return `${product.name} price is $${product.price} and ${product.isAvailable} in stock`;
    },
    productDetails() {  //shortcut syntax
        return `${product.name} price is $${product.price} and ${product.isAvailable} in stock`;
    }
}

console.log(product.productDetails());

console.log(product.productDesc());



