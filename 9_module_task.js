/*
  Practice Task 1: Tag Expensive Products
  Given an array of products, return a NEW array where each product
  also has an "expensive" boolean field (true if price >= 1000).
  Original array must not change.

  Input:
    [{ name: "Mouse", price: 600 }, { name: "Monitor", price: 12000 }]

  Output:
    [
      { name: "Mouse", price: 600, expensive: false },
      { name: "Monitor", price: 12000, expensive: true },
    ]
*/

// const tagExpensiveProducts = (products) => {


//     // return products.map((product) => {
//     //     if (product.price >= 1000) {
//     //         return {
//     //             ...product,
//     //             expensive: true
//     //         }
//     //     } else if (product.price <= 1000) {
//     //         return {
//     //             ...product,
//     //             expensive: false
//     //         }
//     //     }
//     // });

//     return products.map((product) => ({
//         ...product,
//         expensive: product.price >= 1000
//     }))
// };

const tagExpensiveProducts = (products) => {
    return products.map((product) => {
        return {
            ...product,
            expensive: product.price >= 1000
        }
    })
};
console.log(tagExpensiveProducts([{ name: "Mouse", price: 600 }, { name: "Monitor", price: 12000 }]));



/*
  Practice Task 2: Find the First Out-of-Stock Item
  Given an array of items with a "stock" field, return the first item
  where stock === 0. Return undefined if everything is in stock.

  Input:
    [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }]

  Output:
    { name: "Bag", stock: 0 }
*/

const findOutOfStock = (items) => {
    return items.find((item) => item.stock === 0)
};
console.log(findOutOfStock([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }]));


/*
  Practice Task 3: Total Marks of Passing Students (Chaining)
  Given students with marks, filter students who passed (marks >= 40),
  then sum their marks — in one chained expression.

  Input:
    [{ name: "Rafi", marks: 80 }, { name: "Karim", marks: 30 }]

  Output:
    80
*/

const totalPassingMarks = (students) => {
    // TODO: filter -> map/reduce
    return students.filter((student) => student.marks >= 40)
        .map((student) => student.marks)
        .reduce((total, mark) => total + mark, 0)
};
console.log(totalPassingMarks([{ name: "Rafi", marks: 80 }, { name: "Karim", marks: 20 }, { name: "Karim", marks: 30 }]));


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