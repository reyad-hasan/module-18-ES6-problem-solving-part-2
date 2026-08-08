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





// Task 1: getFormattedPrices=(prices) — map() 
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
// Input: [100, 250, 75] 
// Output: ["$100", "$250", "$75"]
const getFormattedPrices = (prices) => {
    return prices.map((price)=>`$${price}`);
}
console.log(getFormattedPrices([100, 250, 75]));



// Task 2: getAvailableProducts=(products) — filter()
// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
// Input: [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }]
// Output: [{ name: "Pen", stock: 5 }, { name: "Notebook", stock: 2 }]
const getAvailableProducts = (products) => {
    return products.filter((product) => product.stock > 0);
}
console.log(getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }]));



// Task 3: findProductByName=(products, name) — find()
// Given an array of product objects, return the first product matching the given name, or undefined if not found.
// Input: products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag"
// Output: { name: "Bag", price: 500 }
const findProductByName = (products, name) => {
    return products.find((product) => product.name === name) || 'Not Found';
}
console.log(findProductByName([{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], "Bag"));



// Task 4: getTotalStockValue=(products) — reduce()
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
// Input:[{ price: 50, stock: 4 }, { price: 20, stock: 10 }]
// Output: 400
const getTotalStockValue = (products) => {
    return products.reduce((total, product) => total + (product.price * product.stock), 0)
}
console.log(getTotalStockValue([{ price: 50, stock: 4 }, { price: 20, stock: 10 }]));



// Task 5: getDiscountedTotalForCategory=(products, category) — Chaining map + filter + reduce
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.
// Input: products = [
// { name: "Pen", category: "stationery", price: 100 },
// { name: "Bag", category: "accessory", price: 500 },
// { name: "Notebook", category: "stationery", price: 60 }],
// category = "stationery"
// Output: 144
// const getDiscountedTotalForCategory = (products, category) => {
//     return products.map((product) => product)
//         .filter((product) => product.category === category)
//         // .reduce((total, product) => {
//         //     const sum = total + product.price - product.price*10/100;
//         //     return sum
//         // }, 0)
//         .reduce((total, product) => total + product.price - product.price * 10 / 100, 0)
// }

const getDiscountedTotalForCategory = (products, category, discount) => {
    return products.filter((product) => product.category === category)
        .map((product) => product.price - (product.price * discount / 100))
        .reduce((total, price) => total + price, 0)
}
const products = [
    { name: "Pen", category: "stationery", price: 100 },
    { name: "Bag", category: "accessory", price: 500 },
    { name: "Notebook", category: "stationery", price: 60 }
];
const category = "stationery";
const discount = 10;
console.log(getDiscountedTotalForCategory(products, category, discount));



// Task 7: sortByPriceAscending=(products) — Callback Function
// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
// Input: [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }]
// Output: [{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]
const sortByPriceAscending = (products) => {
    return [...products].sort((a, b) => a.price - b.price)
}
const products = [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }]
console.log(sortByPriceAscending(products));



// Task 8: applyBonusPoints=(users, bonus) — Pass by Reference vs Value 
// Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.
// Input: users = [{ name: "Rafi", points: 20 }], bonus = 5 
// Output: [{ name: "Rafi", points: 25 }]
//  (original array's object must still have points: 20)
const applyBonusPoints = (users, bonus) => {
    // return users.map((user) => {
    //     return {
    //         ...user,
    //         points: user.points + bonus,
    //     }
    // })
    return users.map((user) => ({ ...user, points: user.points + bonus }))
}
const users = [{ name: "Rafi", points: 20 }];
const bonus = 5;
console.log(applyBonusPoints(users, bonus));



// Task 9: isStrictMatch=(input, target) — Truthy/Falsy and === 
// Return true only if input strictly equals target in both value and type, false otherwise.
// Input: isStrictMatch("18", 18) 
// Output: false
// Input: isStrictMatch(18, 18) 
// Output: true
// const isStrictMatch = (input, target) => {
//     if (input === target) {
//         return true;
//     }
//     return false;
// }
const isStrictMatch = (input, target) => input === target;
console.log(isStrictMatch('18', 18));