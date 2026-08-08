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