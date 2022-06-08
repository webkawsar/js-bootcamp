



// JS Array find in Reference data

const products = [
    {
        id: 101,
        prodName: 'I-phone 10',
        category: 'phone',
        price: 1000,
        isAvailable: true
    },
    {
        id: 102,
        prodName: 'I-phone 11',
        category: 'phone',
        price: 1100,
        isAvailable: true
    },
    {
        id: 103,
        prodName: 'I-phone 12',
        category: 'phone',
        price: 1200,
        isAvailable: true
    },
    {
        id: 104,
        prodName: 'I-phone 13',
        category: 'phone',
        price: 1300,
        isAvailable: true
    },
    {
        id: 105,
        prodName: 'I-phone 14',
        category: 'phone',
        price: 1400,
        isAvailable: true
    },
]

// const product = products.find((item) => item);
const product = products.findIndex((item) => item.id > 103);
console.log(product);






















