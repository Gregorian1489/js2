"use strict";

/* 2. Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами:
increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement 
должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы 
объекта, а не напрямую. */

console.log("Task 2");
function createCounter() {
    let count = 0;
    return {
        increment() {
            count += 1;
        },
        decrement() {
            count -= 1;
        },
        getCount() {
            return count;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
