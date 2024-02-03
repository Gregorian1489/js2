/* ""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента
и время задержки (в миллисекундах) в качестве аргументов. 
Функция должна изменить стиль элемента через указанное время. */
setTimeout(() => {
    console.log("Task 3");
}, 5000)

function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        const element = document.getElementById(id);
        element.style.color = "red";
    }, delay);
}