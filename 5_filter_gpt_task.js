// Problem 1 — Even Numbers
// Create a function getEvenNumbers=(numbers).
const getEvenNumbers = (numbers) => {
    return numbers.filter(number => number % 2 === 0)
}
const numbers = [10, 15, 20, 25, 30, 35];
console.log(getEvenNumbers(numbers));



// Problem 2 — Passing Students
// Create a function getPassingStudents(students, threshold).
// It will return those whose marks are at or above the threshold.
const getPassingStudents = (students, threshold) => {
    return students.filter((student) => student.marks >= threshold);
}
const students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 40 },
    { name: "Utsho", marks: 60 },
    { name: "Hasan", marks: 45 }
];
const threshold = 60;
const result = getPassingStudents(students, threshold);
console.log(result);



// Problem 3 — Adult Users
// Create a function getAdultUsers=(users).
// It will return users who are 18 years of age or older.
const getAdultUsers = (users, age) => {
    return users.filter((user) => user.age >= age);
}
const users = [
    { name: "Rafi", age: 25 },
    { name: "Karim", age: 16 },
    { name: "Hasan", age: 30 },
    { name: "Sakib", age: 17 }
];
const age = 18;
const result = getAdultUsers(users, age);
console.log(result);



// Problem 4 — Expensive Products
// Create a function getExpensiveProducts=(products, price).
// It will return products whose price is higher than the given price.
const getExpensiveProducts = (products, price) => {
    return products.filter((product) => product.price > price);
}
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 },
    { name: "Monitor", price: 15000 }
];
const price = 10000;
const result = getExpensiveProducts(products, price);
console.log(result);



// Problem 5 — Search Products
// Create a function searchProducts=(products, keyword).
// It will return products that have the keyword in their name.
const searchProducts = (products, keyword) => {
    return products.filter((product) => product.name.toLowerCase().includes(keyword.toLowerCase()));
}
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 },
    { name: "Laptop Bag", price: 2000 }
];
const keyword = "Laptop";
const result = searchProducts(products, keyword);
console.log(result);



// Problem 6 — Active Users
// Return only those users whose isActive is true.
const isActive = (users) => {
    return users.filter((user) => user.isActive === true);
}
const users = [
    { name: "Rafi", isActive: true },
    { name: "Karim", isActive: false },
    { name: "Hasan", isActive: true },
    { name: "Sakib", isActive: false }
];
const result = isActive(users);
console.log(result);



// Problem 7 — Available Products
// Return products that are inStock true.
const inStock = (products) => {
    return products.filter((product) => product.inStock)
}
const products = [
    { name: "Laptop", price: 50000, inStock: true },
    { name: "Phone", price: 20000, inStock: false },
    { name: "Mouse", price: 1000, inStock: true },
    { name: "Keyboard", price: 2000, inStock: false }
];
const result = inStock(products);
console.log(result);



// Problem 8 — Multiple Conditions
// Return students whose: marks >= 60 and age >= 18
const studentsWhose = (students) => {
    return students.filter((student) => student.age >= 18 && student.marks >= 60);
}
const students = [
    { name: "Rafi", age: 20, marks: 75 },
    { name: "Karim", age: 17, marks: 80 },
    { name: "Hasan", age: 22, marks: 55 },
    { name: "Sakib", age: 19, marks: 65 }
];
const result = studentsWhose(students);
console.log(result);



// Challenge 9 — Bangladesh Users
// Return users whose country === "Bangladesh".
const countryWhose = (users, countryName) => {
    return users.filter((user) => user.country === countryName);
}
const users = [
    { name: "Rafi", country: "Bangladesh" },
    { name: "John", country: "USA" },
    { name: "Karim", country: "Bangladesh" },
    { name: "David", country: "UK" }
];
const countryName = 'Bangladesh';
const result = countryWhose(users, countryName);
console.log(result);