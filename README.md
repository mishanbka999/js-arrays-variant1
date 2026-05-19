# Student Management System + Sorting Algorithms

Практична робота №7 з дисципліни "Основи програмування мовою JavaScript".

Проєкт реалізує систему управління студентами з використанням масивів та алгоритмів сортування.

У проєкті реалізовано:
- роботу з масивами студентів
- фільтрацію даних
- статистику
- алгоритми сортування
- порівняння швидкості алгоритмів

Структура проєкту:

src/
    students.js
    filters.js
    statistics.js
    bubbleSort.js
    quickSort.js
    benchmark.js

demo.js
README.md
package.json

Файл students.js містить масив студентів.

Кожен студент має:
- name
- age
- gpa
- faculty

Приклад студента:

{
    name: "Misha",
    age: 18,
    gpa: 95,
    faculty: "Computer Science"
}

Файл filters.js містить функції фільтрації студентів.

Функція filterByFaculty() виконує фільтрацію за факультетом.

Приклад:

filterByFaculty(students, "Math")

Функція filterByMinGPA() виконує фільтрацію за мінімальним GPA.

Приклад:

filterByMinGPA(students, 80)

Файл statistics.js містить функції статистики.

averageGPA() — обчислення середнього GPA.

topStudents() — повертає топ-3 студентів.

facultyDistribution() — показує кількість студентів по факультетах.

Файл bubbleSort.js містить реалізацію алгоритму Bubble Sort без використання Array.sort().

Bubble Sort:
- сортує масив
- підраховує кількість порівнянь

Файл quickSort.js містить реалізацію алгоритму Quick Sort без використання Array.sort().

Quick Sort:
- використовує рекурсію
- ділить масив на частини
- працює швидше на великих масивах

Файл benchmark.js використовується для порівняння швидкості:
- Bubble Sort
- Quick Sort

Тестування проводиться на масивах:
- 100 елементів
- 1000 елементів
- 5000 елементів

У проєкті використано методи масивів:
- map()
- filter()
- reduce()
- sort()
- find()

Також використано ES6+ синтаксис:
- arrow functions
- spread operator
- destructuring
- template literals

Запуск проєкту:

1. Встановити Node.js

2. Відкрити термінал у папці проєкту

3. Ініціалізувати npm:

npm init -y

Запуск demo:

node demo.js

Запуск benchmark:

node src/benchmark.js

Приклад роботи:

filterByMinGPA(students, 80)

Результат:

[
  { name: "Misha", gpa: 95 },
  { name: "Anna", gpa: 88 }
]

Quick Sort працює швидше за Bubble Sort на великих масивах, тому що Bubble Sort багаторазово порівнює майже всі елементи, а Quick Sort ділить масив на менші частини.

Автор: Жучок Михайло

Практична робота №7
JavaScript Arrays