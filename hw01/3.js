"use strict";

/* 3. Напишите рекурсивную функцию findElementByClass, которая принимает корневой
элемент дерева DOM и название класса в качестве аргументов и возвращает первый
найденный элемент с указанным классом в этом дереве.

Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); */
console.log("Task 3");
function findElementByClass(rootElem, targetClass) {
    if (rootElem.classList.contains(targetClass)) {
      return rootElem;
    }
  
    for (const child of rootElem.children) {
      const elem = findElementByClass(child, targetClass);
      if (elem) {
        return elem;
      }
    }
    return null;
  }

