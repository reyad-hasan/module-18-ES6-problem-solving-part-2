// Number Ascending Order
const numbers = [50, 10, 30, 20, 40];
numbers.sort((a, b) => {
    return a - b; //ascending
});


// console.log(numbers);
// Number Descending Order
const numbers = [10, 40, 4, 1, 30, 20, 10];
numbers.sort((a, b) => {
    return b - a; //descending
});
console.log(numbers);



// String Sort ascending
const names = ["Rafi", "Karim", "Hasan", "Abir"];
names.sort();
console.log(names);


// String Descending
const names = ["Rafi", "Karim", "Hasan", "Abir"];
names.sort().reverse()
console.log(names);


// Object Array Sort
const students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 90 },
    { name: "Hasan", marks: 60 }
];
console.log(students, 'before sort');
students.sort((a, b) => {
    return a.marks - b.marks;
})
console.log(students, 'after sort');



// Object Array Sort
const students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 90 },
    { name: "Hasan", marks: 60 }
];
console.log(students, 'before sort');
students.sort((a, b) => {
    return b.marks - a.marks;
})
console.log(students, 'after sort');


// Sort by Price
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Phone", price: 20000 }
];
products.sort((a, b) => {
    return a.price - b.price;
});
console.log(products);


// sort() modifies the original array
const numbers = [30, 10, 20];
const result = numbers.sort((a, b) => a - b);
console.log(result);

// sort() don't modifies the original array
const numbers = [30, 10, 20];
const result = [...numbers].sort((a, b) => a - b);
console.log(result);


// Problem 1 — Sort Numbers ascending
const sortNumbers = (numbers) => {
    return numbers.sort((a, b) => a - b);
}
const numbers = [50, 10, 40, 20, 30];
console.log(sortNumbers(numbers));


// Problem 2 — Descending Numbers
const sortNumbersDescending = (numbers) => {
    return numbers.sort((a, b) => b - a);
}
const numbers = [50, 10, 40, 20, 30];
console.log(sortNumbersDescending(numbers));


// Problem 3 — Sort Names
const sortName = (names) => {
    return names.sort();
}
const names = [
    "Rafi",
    "Hasan",
    "Karim",
    "Abir"
];
console.log(sortName(names));



// Problem 4 — Sort Students by Marks
// Sort in ascending order according to Marks.
const studentsMark = (students) => {
    return students.sort((a, b) => {
        return a.marks - b.marks;
    })
}
const students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 90 },
    { name: "Hasan", marks: 60 },
    { name: "Sakib", marks: 85 }
];
console.log(studentsMark(students));


// Problem 5 — Highest Marks First
// Sort in descending order using the same students array.
const studentsMark = (students) => {
    return students.sort((a, b) => {
        return b.marks - a.marks;
    });
};
const students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 90 },
    { name: "Hasan", marks: 60 },
    { name: "Sakib", marks: 85 }
];
console.log(studentsMark(students));



// Problem 6 — Sort Products by Price
const sortProductPrice = (products) => {
    return products.sort((a, b) => a.price - b.price);
}
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Phone", price: 20000 },
    { name: "Keyboard", price: 3000 }
];
console.log(sortProductPrice(products));



// Problem 7 — Cheapest Product First
// Sort the products in ascending order by price and return a new array.
const cheapestProduct = (products) => {
    return [...products].sort((a, b) => a.price - b.price);
}
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Phone", price: 20000 },
    { name: "Keyboard", price: 3000 }
];
console.log(cheapestProduct(products));



// Problem 8 — Highest Salary
// Arrange the employees in descending order according to salary.
const highestSalaryDescending = (employees) => {
    return [...employees].sort((a, b) => b.salary - a.salary);
}
const employees = [
    { name: "Rafi", salary: 30000 },
    { name: "Karim", salary: 50000 },
    { name: "Hasan", salary: 40000 },
    { name: "Sakib", salary: 70000 }
];
console.log(highestSalaryDescending(employees));


// Challenge 9 — Sort by Age
const sortByAge = (users) => {
    return [...users].sort((a, b) => a.age - b.age);
}
const users = [
    { name: "Rafi", age: 25 },
    { name: "Karim", age: 18 },
    { name: "Hasan", age: 30 },
    { name: "Sakib", age: 22 }
];
console.log(sortByAge(users));


// Challenge 10 — Sort by String Length
// Sort the names from shortest to longest.
const sortByStringLength = (names) => {
    return [...names].sort((a, b) => a.length - b.length);
}
const names = [
    "Rahim",
    "Abir",
    "Mohammad",
    "Rafi",
    "Karim"
];
console.log(sortByStringLength(names));


// Challenge 11 — Sort by Product Name
// Sort the products in alphabetical order by name.
const sortByProductName = (products) => {
    return products.sort((a, b) => a.name.localeCompare(b.name));
}
const products = [
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 3000 }
];
console.log(sortByProductName(products));

// Challenge 12 — Multiple Conditions
// First, marks must be descending.
// If the marks of both are the same, then age must be ascending.
const multiCondition = (students) => {
    return [...students].sort((a, b) => b.marks - a.marks || a.age - b.age);
}
const students = [
    { name: "Rafi", marks: 80, age: 20 },
    { name: "Karim", marks: 90, age: 18 },
    { name: "Hasan", marks: 80, age: 22 },
    { name: "Sakib", marks: 70, age: 19 }
];
console.log(multiCondition(students));