/* Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
 */

console.log("Task 2");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }    
    displayInfo() {
        console.table(this.products);   // для наглядности
    }
    
}

const product_1 = new Product("Test_product_1", 100);
const product_2 = new Product("Test_product_2", 200);
const product_3 = new Product("Test_product_3", 300);
const order_1 = new Order(1);
order_1.addProduct(product_1);
order_1.addProduct(product_2);
order_1.addProduct(product_3);
order_1.displayInfo();  // убеждаемся, что добавление продуктов прошло успешно
console.log(`Итоговая стоимость: ${order_1.getTotalPrice()}`);