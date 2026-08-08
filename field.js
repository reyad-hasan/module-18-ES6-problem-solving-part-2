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