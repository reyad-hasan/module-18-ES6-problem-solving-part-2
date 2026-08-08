// Problem 1 — Sum of Numbers
// Create a getTotal=(numbers) function.
const getTotal = (numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
}

const numbers = [10, 20, 30, 40, 50, 50];
const result = getTotal(numbers);
console.log(result);


// Problem 2 — Sum of Prices
const getTotalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0)
}
const products = [
    { name: "Pen", price: 20 },
    { name: "Book", price: 100 },
    { name: "Bag", price: 500 }
];
console.log(getTotalPrice(products));


// Problem 3 — Shopping Cart Total
const getCartTotal = (cart) => {
    // return cart.reduce((total, item) => {
    //     return total + item.price * item.qty;
    // }, 0)
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
}
const cart = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Notebook", price: 50, qty: 2 },
    { name: "Bag", price: 500, qty: 1 }
];
console.log(getCartTotal(cart));


// Problem 4 — Total Marks
// Create the getTotalMarks=(students) function.
const getTotalMarks = (students) => {
    return students.reduce((total, student) => total + student.marks, 0);
}
const students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 60 },
    { name: "Hasan", marks: 85 }
];
console.log(getTotalMarks(students));



// Problem 5 — Total Salary
// Create the getTotalSalary=(employees) function.
const getTotalSalary = (employees) => {
    return employees.reduce((total, employee) => total + employee.salary, 0);
}
const employees = [
    { name: "Rafi", salary: 30000 },
    { name: "Karim", salary: 40000 },
    { name: "Hasan", salary: 50000 }
];
console.log(getTotalSalary(employees));



// Problem 6 — Find Total Quantity
// Create the getTotalQuantity=(cart) function.
const getTotalQuantity = (cart) => {
    return cart.reduce((total, item) => total + item.qty, 0);
}
const cart = [
    { name: "Pen", qty: 3 },
    { name: "Book", qty: 2 },
    { name: "Bag", qty: 1 }
];
console.log(getTotalQuantity(cart));


// Problem 7 — Calculate Average
// getAverage=(numbers)
const getAverage = (numbers) => {
    // const total = numbers.reduce((total, number) => total + number, 0);
    // return total / numbers.length;
    return numbers.reduce((total, number) => total + number, 0) / numbers.length;
}
const numbers = [10, 20, 30, 40, 50];
console.log(getAverage(numbers));


// Problem 8 — Total Cart Price
// Create the getTotalCartPrice=(cart) function.
const getTotalCartPrice = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
}
const cart = [
    { name: "Pen", price: 20, qty: 5 },
    { name: "Book", price: 100, qty: 2 },
    { name: "Bag", price: 500, qty: 1 }
];
console.log(getTotalCartPrice(cart));



// Problem 9 — Total Income
// Just find out the total income.
const getIncomeTotal = (transactions) => {
    return transactions.reduce((total, transaction) => {
        return transaction.type === 'income' ? total + transaction.amount : total;
    }, 0)
    // return transactions.reduce((total, transaction) => {
    //     if (transaction.type === 'income') {
    //         return total + transaction.amount;
    //     }
    //     return total;
    // }, 0)

    // return transactions.reduce((total, transaction) => transaction.type === 'income' ?
    //     total + transaction.amount : total, 0)
}

const transactions = [
    { type: "income", amount: 5000 },
    { type: "expense", amount: 1000 },
    { type: "income", amount: 3000 },
    { type: "income", amount: 3000 },
    { type: "expense", amount: 500 }
];
console.log(getIncomeTotal(transactions));


// Challenge 10 — Total Expense
// Using the same data above, find the total of just the expenses.
const getExpenseTotal = (transactions) => {
    return transactions.reduce((total, transaction) => {
        return transaction.type === 'expense' ? total + transaction.amount : total;
    }, 0)
}

const transactions = [
    { type: "income", amount: 5000 },
    { type: "expense", amount: 1000 },
    { type: "income", amount: 3000 },
    { type: "expense", amount: 500 }
];
console.log(getExpenseTotal(transactions));



// Challenge 11 — Category Total
// Find the total price of the electronics category.
const categoryTotal = (products) => {
    return products.reduce((total, product) =>
        product.category === 'electronics' ? total + product.price : total, 0)
}
const products = [
    { name: "Laptop", category: "electronics", price: 50000 },
    { name: "Phone", category: "electronics", price: 20000 },
    { name: "Phone", category: "electronics", price: 20000 },
    { name: "Shirt", category: "clothing", price: 1500 },
    { name: "Pant", category: "clothing", price: 2000 }
];
console.log(categoryTotal(products));



// Challenge 12 — Count Students
const countStudents = (students) => {
    return students.reduce((total, student) => student.passed === true ? total + 1 : total, 0)
}
const students = [
    { name: "Rafi", passed: true },
    { name: "Karim", passed: false },
    { name: "Hasan", passed: true },
    { name: "Sakib", passed: true },
    { name: "Sakib", passed: true }
];
console.log(countStudents(students));