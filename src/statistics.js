/**
 * Середній GPA
 */
const averageGPA = students => {
    if (students.length === 0) return 0;

    return (
        students.reduce((sum, s) => sum + s.gpa, 0) /
        students.length
    ).toFixed(2);
};

/**
 * Топ 3 студенти
 */
const topStudents = students => {
    return [...students]
        .sort((a, b) => b.gpa - a.gpa)
        .slice(0, 3);
};

/**
 * Розподіл по факультетах
 */
const facultyDistribution = students => {
    return students.reduce((acc, student) => {
        acc[student.faculty] =
            (acc[student.faculty] || 0) + 1;

        return acc;
    }, {});
};

module.exports = {
    averageGPA,
    topStudents,
    facultyDistribution
};