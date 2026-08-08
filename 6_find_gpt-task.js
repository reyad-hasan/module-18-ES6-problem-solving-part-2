// Problem 1 — User Lookup by ID
// Create a function findUserById(users, id).
// If no user is found: "User not found"
const findUserById = (users, id) => {
    const userId = users.find((user) => user.id === id);
    // if (userId) {
    //     return userId;
    // }
    // else {
    //     return 'User Not Found'
    // }
    return userId || 'User Not Found';
}
const users = [
    { id: 1, name: "Rafi" },
    { id: 2, name: "Karim" },
    { id: 3, name: "Hasan" }
];
const id = 2;
const result = findUserById(users, id);
console.log(result);



// Problem 2 — Find Passing Student
// Create a function findPassingStudent=(students, threshold).
// It will return the first student whose marks are equal to or greater than the threshold.
const findPassingStudent = (students, threshold) => {
    return students.find((student) => student.marks >= threshold);
}
const students = [
    { name: "Rafi", marks: 45 },
    { name: "Karim", marks: 55 },
    { name: "Hasan", marks: 75 },
    { name: "Sakib", marks: 80 }
];
const threshold = 60;
const result = findPassingStudent(students, threshold);
console.log(result);



// Problem 3 — Find Product by Name
// Create a function findProduct=(products, productName).
// If the name of the product matches productName, it will return a product object.
const findProduct = (products, productName) => {
    // const productFind = products.find((product) => product.name === productName);
    // return productFind || 'Product Not Found'
    return products.find((product) => product.name === productName) || 'Product Not Found';
}
const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Mouse", price: 1000 }
];
const productName = "Phone";
const result = findProduct(products, productName);
console.log(result);



// Problem 4 — Find Adult User
// Create a function findAdultUser=(users).
// It will return the first user whose age is 18 or older.
const findAdultUser = (users, age) => {
    return users.find((user) => user.age >= age) || 'Not Found'
}
const users = [
    { name: "Rafi", age: 15 },
    { name: "Karim", age: 17 },
    { name: "Hasan", age: 22 },
    { name: "Sakib", age: 25 }
];
const age = 18;
const result = findAdultUser(users, age);
console.log(result);



// Problem 5 — Find Expensive Product
// Create a function findExpensiveProduct=(products, price).
// It will return the first product whose price is higher than price.
const findExpensiveProduct = (products, price) => {
    return products.find((product) => product.price > price) || 'NOT Available';
}
const products = [
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 3000 },
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 60000 }
];
const price = 10000;
const result = findExpensiveProduct(products, price);
console.log(result);



// Problem 6 — Find Active User
// Return the first user whose isActive === true.
const findActiveUser = (users, active) => {
    return users.find((user) => user.isActive === active);
}

const users = [
    { name: "Rafi", isActive: false },
    { name: "Karim", isActive: false },
    { name: "Hasan", isActive: true },
    { name: "Sakib", isActive: true }
];
const active = true;
const result = findActiveUser(users, active);
console.log(result);



// Problem 7 — Find Available Product
// Return the first product for which inStock === true.
const availableProduct = (products, status) => {
    return products.find((product) => product.inStock === status);
}
const products = [
    { name: "Laptop", inStock: false },
    { name: "Phone", inStock: false },
    { name: "Mouse", inStock: true },
    { name: "Keyboard", inStock: true }
];
const status = true;
console.log(availableProduct(products, status));



// Problem 8 — Find User by Email
// Create the findUserByEmail(users, email) function.
const findUserByEmail = (users, email) => {
    return users.find((user) => user.email === email);
}
const users = [
    { name: "Rafi", email: "rafi@gmail.com" },
    { name: "Karim", email: "karim@gmail.com" },
    { name: "Hasan", email: "hasan@gmail.com" }
];
const email = "karim@gmail.com";
console.log(findUserByEmail(users, email));



// Problem 9 — Find Book by Author
// Return the first book whose author matches.
const bookFindAuthor = (books, author) => {
    return books.find((book) => book.author === author);
}
const books = [
    { title: "JavaScript Basic", author: "Rafi" },
    { title: "Learn React", author: "Karim" },
    { title: "Node.js Guide", author: "Hasan" }
];
const author = "Karim";
console.log(bookFindAuthor(books, author));



// Problem 10 — Multiple Conditions
// Return the first student who: marks >= 60 and age >= 18
const multipleConditions = (students) => {
    return students.find((student) => student.marks >= 60 && student.age >= 18)
}
const students = [
    { name: "Rafi", age: 17, marks: 80 },
    { name: "Karim", age: 20, marks: 50 },
    { name: "Hasan", age: 22, marks: 75 },
    { name: "Sakib", age: 20, marks: 90 }
];
console.log(multipleConditions(students));



// Challenge 11 — Cart Product
// Find the "Laptop" product in the cart.
const findProduct = (cart, productName) => {
    // return cart.find((cart) => cart.name.includes(productName));
    return cart.find((item) => item.name === productName);
}

const cart = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Laptop", price: 50000, qty: 1 },
    { name: "Mouse", price: 1000, qty: 2 }
];
const productName = "Laptop";
console.log(findProduct(cart, productName));


// Challenge 12 — Find Employee
// Return the employee whose salary is 50000 or more and whose department is "IT" first.
const findEmployee = (employee, department, salary) => {
    return employee.find((person) => person.department === department && person.salary >= salary);
}
const employees = [
    { name: "Rafi", department: "HR", salary: 60000 },
    { name: "Karim", department: "IT", salary: 40000 },
    { name: "Hasan", department: "IT", salary: 55000 },
    { name: "Sakib", department: "IT", salary: 70000 }
];
const department = 'IT';
const salary = 50000;
// console.log(findEmployee(employees, department, salary));