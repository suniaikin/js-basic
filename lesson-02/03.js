/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки
 * 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 75 // тестовое значение, можно изменять
let grade

if (score < 0 || score > 100) {
    console.log('Ошибка: балл вне допустимого диапазона');
}  else if  (score <= 49) {
    console.log(grade ='F');
} else if  (score <= 69) {
    console.log(grade = 'D');
} else if  (score <= 79) {
    console.log(grade = 'C');
} else if (score <= 89) {
    console.log(grade = 'B');
} else {
    console.log(grade = 'A');
}



