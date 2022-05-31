




// Constructor Function
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.productDesc = function() {
        return `${this.name} price is $${this.price} `;
    }
    
}


const product2 = new Product('Baby Shoes', 850);
console.log(product2.productDesc());





