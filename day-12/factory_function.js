


// Factory Function
function product(name, price, isAvailable) {
    return {
        name,
        price,
        isAvailable,
        productDesc: function() {
            return `${this.name} price is $${this.price} and ${this.isAvailable} in stock`;
        },
        productDetails() {  //shortcut syntax
            return `${this.name} price is $${this.price} and ${this.isAvailable} in stock`;
        }
    }
}




// console.log(product('Printed T-shirt', 100, 'available'));
console.log(product('Printed Shirt', 250, 'available').productDetails());



