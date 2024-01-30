/* Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
*/
console.log("Task 1");
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo() {
        console.table(this);
    }
}

const book = new Book();
book.title = "Test book";
book.author = "Test author";
book.pages = 1000;
book.displayInfo();
