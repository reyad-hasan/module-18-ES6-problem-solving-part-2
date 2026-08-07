// Problem 1: Student Names
// Given a students array, use map() to return a new 
// array containing only the names of each student.
const getStudentName = (students) => {
    const studentNames = students.map((student) => student.name);
    return studentNames;
}

const students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 60 },
    { name: "Utsho", marks: 85 }
];
const result = getStudentName(students);
console.log(result);



// Problem 2: Uppercase Names
// Create a new array using map() with each student's name in uppercase.
const getNameUpperCase = (students) => {
    const nameUpperCase = students.map((student) => student.name.toUpperCase());
    return nameUpperCase;
}
const students = [
    { name: "rafi" },
    { name: "karim" },
    { name: "utsho" }
];
const result = getNameUpperCase(students);
console.log(result);



// Problem 3: Product Names
// Just find the name of the product.
const getProductNames = (products) => {
    const productNames = products.map((product) => product.name);
    return productNames;
}
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 }
];
const result = getProductNames(products);
console.log(result);



// Problem 4: Full Name
// Create a full name by combining each user's firstName and lastName.
const getFullName = (users) => {
    const fullName = users.map((user) => `${user.firstName} ${user.lastName}`);
    return fullName;
}
const users = [
    { firstName: "Rafi", lastName: "Ahmed" },
    { firstName: "Karim", lastName: "Hasan" },
    { firstName: "Utsho", lastName: "Rahman" }
];
const result = getFullName(users);
console.log(result);



// 5: Add Prefix
// No "@" before each username, just add "@".
const addPrefix = (users) => {
    const prefixAdd = users.map((user) => `@${user.username}`);
    return prefixAdd;
}
const users = [
    { username: "rafi" },
    { username: "karim" },
    { username: "utsho" }
];
const result = addPrefix(users);
console.log(result);



// Problem 6: Student Result Message
// Create a string for each student.
const studentResultMessage = (students) => {
    const studentMessage = students.map((student) => `${student.name} got ${student.marks} marks.`);
    return studentMessage;
}
const students = [
    { name: "Rafi", marks: 80 },
    { name: "Karim", marks: 65 },
    { name: "Utsho", marks: 90 }
];
const result = studentResultMessage(students);
console.log(result);



// Problem 7: Product Information
// Create a string of this format for each product:
const productsInfo = (products) => {
    const productDetails = products.map((product) => `Product: ${product.name}, Price: ${product.price}`);
    return productDetails;
}
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 }
];
const result = productsInfo(products);
console.log(result);



// Problem 8: Discounted Product Objects
// Create a new object with a 10% discount on the price of each product.
const productDiscount = (products, discount) => {
    const afterDiscount = products.map((product) => ({
        ...product,
        price: product.price - (product.price * discount) / 100
    }))
    return afterDiscount;
}
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 }
];
const discount = 5;
const result = productDiscount(products, discount);
console.log(result);

const productDiscount = (products, discount) => {
    return products.map((product) => {
        const newPrice = product.price - (product.price * discount) / 100;
        return {
            ...product,
            price: newPrice
        };
    });
}
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 1000 }
];
const discount = 10;
const result = productDiscount(products, discount);
console.log(result);



// Problem 9: Student Status
// Create a new object by looking at the marks of each student.
const studentStatus = (students) => {
    return students.map((student) => {
        return {
            name: student.name,
            status: student.marks >= 50 ? 'Pass' : 'Fail'
        }
    })
}
const students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 40 },
    { name: "Utsho", marks: 60 }
];
const result = studentStatus(students);
console.log(result);



// Problem 10: Product Card Text
// Create a complete product description for each product.
const productCardText = (products) => {
    return products.map((product) => {
        return `${product.brand} ${product.name} cost ${product.price} Taka.`
    })
}
const products = [
    { name: "Laptop", brand: "Dell", price: 60000 },
    { name: "Phone", brand: "Samsung", price: 30000 },
    { name: "Watch", brand: "Casio", price: 5000 }
];
const result = productCardText(products);
console.log(result);



// Challenge 11: Employee Salary
// Create a new object that increases the salary of each employee by 20%.
const salaryIncrease = (employees, percentage) => {
    return employees.map((employee) => {
        return {
            name: employee.name,
            salary: employee.salary + (employee.salary * percentage) / 100
        }
    });
}
const employees = [
    { name: "Rafi", salary: 30000 },
    { name: "Karim", salary: 40000 },
    { name: "Hasan", salary: 50000 }
];
const percentage = 20;
const result = salaryIncrease(employees, percentage);
console.log(result);



// Challenge 12: Convert Product Data
const convertProductData = (products) => {
    // return products.map((product) => {
    //     return {
    //         productId: product.id,
    //         productName: product.title,
    //         productPrice: product.price
    //     }
    // })
    // --------------------------------
    return products.map((product) => ({
        productId: product.id,
        productName: product.title,
        productPrice: product.price
    }))

}
const products = [
    { id: 1, title: "Laptop", price: 50000 },
    { id: 2, title: "Phone", price: 20000 },
    { id: 3, title: "Mouse", price: 1000 }
];
const result = convertProductData(products);
console.log(result);