// Задание 5 Добавь в свойство prototype функции-конструктора Car два метода:
// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

const Car = function ({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};
Car.prototype.getPrice = function () {
  return this.price;
};
Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.prototype.hasOwnProperty("getPrice"); // возвращает true.
console.log(Car.prototype.hasOwnProperty("getPrice"));

// Задача 6. Хранилище
// напиши функцию-конструктор  которая будет создавать объекты для управления складом товаров.
// Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
// Добавь методы на прототип:
// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.

const Storage = function (items) {
  this.items = items;
};
Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function (newItem) {
  this.items.push(newItem);
};
Storage.prototype.removeItem = function (item) {
  const ind = this.items.indexOf(item);
  this.items.splice(ind, 1);
};
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);

storage.addItem("Дроид");
storage.removeItem("Пролонгер");

console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// Конструктор строк Задание7
// С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.

function StringBuilder(baseValue) {
  this.value = baseValue;
}
StringBuilder.prototype.getValue = function () {
  return this.value;
};
StringBuilder.prototype.padEnd = function (str) {
  this.value = `${this.value}${str}`;
};
StringBuilder.prototype.padStart = function (str) {
  this.value = `${str}${this.value}`;
};
StringBuilder.prototype.padBoth = function (str) {
  this.value = `${str}${this.value}${str}`;
};
const builder = new StringBuilder(".");

builder.padStart("^");
builder.padEnd("^");
builder.padBoth("=");

console.log(builder.getValue()); // '=^.^='
console.log(builder.getValue()); // '.'
console.log(builder.getValue()); // '^.'
console.log(builder.getValue()); // '^.^'
