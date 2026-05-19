const students = require("./src/students");

const {
    filterByFaculty,
    filterByMinGPA
} = require("./src/filters");

const {
    averageGPA,
    topStudents,
    facultyDistribution
} = require("./src/statistics");

console.log("ALL STUDENTS:");
console.log(students);

console.log("\nCOMPUTER SCIENCE:");
console.log(
    filterByFaculty(students, "Computer Science")
);

console.log("\nGPA > 80:");
console.log(
    filterByMinGPA(students, 80)
);

console.log("\nAVERAGE GPA:");
console.log(
    averageGPA(students)
);

console.log("\nTOP 3:");
console.log(
    topStudents(students)
);

console.log("\nFACULTY DISTRIBUTION:");
console.log(
    facultyDistribution(students)
);