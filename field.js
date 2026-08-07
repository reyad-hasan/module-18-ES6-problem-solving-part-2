// Challenge 10 — Cart Items
// Return only those cart items whose qty > 0.
const getQuantity = (cart) => {
    return cart.filter((cart) => cart.qty > 0);
}
const cart = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Book", price: 100, qty: 0 },
    { name: "Bag", price: 500, qty: 2 },
    { name: "Pencil", price: 10, qty: 0 }
];
const result = getQuantity(cart);
console.log(result);