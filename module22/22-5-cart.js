// const products = [
//     { name: 'shampo', price: 300 },
//     { name: 'chiruni', price: 400 },
//     { name: 'shirt', price: 700 },
//     { name: 'pant', price: 500 },
// ]

// function getShopingtotal(products) {
//     let total = 0;
//     for (const product of products) {
//         total = total + product.price;
//     }
//     return total;
// }
// const total = getShopingtotal(products);
// console.log(total);

// Shopping Cart 
const products = [
    { name: 'shampo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 400, quantity: 1 },
    { name: 'shirt', price: 700, quantity: 6 },
    { name: 'pant', price: 500, quantity: 4 },
]
function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log(shoppingCost)