/* Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс). */

console.log("Task 2");
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.table(this);
    }
}    

const student_1 = new Student("Tom", 16, "10A");
const student_2 = new Student("Ann", 12, "7B");
student_1.displayInfo();
student_2.displayInfo();
