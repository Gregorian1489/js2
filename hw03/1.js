/* Задание 1: ""Управление персоналом компании""

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел). */

console.log("Task 1");

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.table(`Имя сотрудника: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        //console.log(`Имя сотрудника: ${this.name}, Отдел: ${this.department}`);
        console.table(this);
    }
}

const employee = new Employee("Thomas");
employee.displayInfo();
const manager = new Manager("John", "IT");
manager.displayInfo();