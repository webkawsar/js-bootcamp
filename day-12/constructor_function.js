




// Constructor Function
function Product(name, price) {
    // return {
    //     name,
    //     price,
    //     productDesc: function() {
    //         return `${this.name} price is $${this.price} `;
    //     },
        
    // }
    this.name = name;
    this.price = price;
    this.productDesc = function() {
        return `${this.name} price is $${this.price} `;
    }
}

// const product1 = Product('Shoes', 1100);
// console.log(product1.productDesc());

const product2 = new Product('Baby Shoes', 850);
console.log(product2.productDesc());



// console.log(Product('Printed T-shirt', 100));
// console.log(Product('Printed Shirt', 250));
// console.log(Product('Sneaker', 350).productDesc());
