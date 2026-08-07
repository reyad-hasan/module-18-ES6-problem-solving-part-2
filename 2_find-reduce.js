/*
  Problem 1: User Lookup by ID
  findUserById=(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/
const findUserById = (users, id) => {
    const findById = users.find((user) => user.id === id) || 'User Not Found'
    // if (findById) {
    //     return findById;
    // }
    // else {
    //     return 'User Not Found'
    // }
    return findById;
}
const users = [
    { id: 1, name: "Rafi" },
    { id: 2, name: "Karim" },
    { id: 6, name: "Kamrul" },
]
const id = 2;
// const result = findUserById(users, id);
// console.log(result);



/*
  Problem 2: Shopping Cart Total (reduce)
  getCartTotal=(cart) — sum price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/

// Accumulator -> 0
// Pen -> Accumulator =  0 + (20 * 3) = 60
// Notebook -> Accumulator = 60 + (50 * 2)
// Accumulator -> 160

const getCartTotal = (cart) => {
    const sumPrice = cart.reduce((accumulator, elem) => {
        return accumulator + elem.price * elem.qty;
    }, 0)
    return sumPrice;
}

const cart = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Notebook", price: 50, qty: 2 },
];
const result = getCartTotal(cart);
console.log(result);