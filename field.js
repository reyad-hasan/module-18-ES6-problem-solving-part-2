/*
  Practice Task 5: Sort Products by Price (Ascending) — No Mutation
  Return a NEW array of products sorted by price, low to high. The
  original products array must stay in its original order.

  Input:
    [{ name: "Bag", price: 500 }, { name: "Pen", price: 20 }]

  Output:
    [{ name: "Pen", price: 20 }, { name: "Bag", price: 500 }]
*/

const sortByPriceAscending = (products) => {
    // TODO: copy with spread first, then .sort((a, b) => a.price - b.price)
    return [...products].sort((a, b) => a.price - b.price)
};

console.log(sortByPriceAscending([{ name: "Bag", price: 500 }, { name: "Pen", price: 20 }]));