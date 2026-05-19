/**
 * Фільтр за факультетом
 */
const filterByFaculty = (students, faculty) => {
    return students.filter(student => student.faculty === faculty);
};

/**
 * Фільтр за GPA
 */
const filterByMinGPA = (students, minGPA) => {
    return students.filter(student => student.gpa >= minGPA);
};

module.exports = {
    filterByFaculty,
    filterByMinGPA
};