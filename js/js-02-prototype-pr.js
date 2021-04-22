// Пример 1 - Реализуйте "класс" Worker (Работник)
// который будет иметь следующие свойства:
// name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Также "класс" должен иметь метод logSalary(),
// который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate
// на количество отработанных дней days.
// И метод logFullName() - имя и фамиля работника.

// Реализуйте статическое свойство count,
// в котором храните число созданных работников

// function Worker({ name, surname, rate, days }) {
//   this.name = name;
//   this.surname = surname;
//   this.rate = rate;
//   this.days = days;

//   // this.logSalary = function () {
//   //   const salary = this.rate * this.days;
//   //   console.log(`Your salary is ${salary}`);
//   // };

//   // this.logFullName = function () {
//   //   const fullName = `${this.name} ${this.surname}`;
//   //   console.log(fullName);
//   // };

//   Worker.count += 1;
// }

// Worker.count = 0;

// console.dir(Worker);

// Worker.prototype.logSalary = function () {
//   const salary = this.rate * this.days;
//   console.log(`Your salary is ${salary}`);
// };

// Worker.prototype.logFullName = function () {
//   const fullName = `${this.name} ${this.surname}`;
//   console.log(fullName);
// };

// const worker1Data = {
//   name: 'Stepan',
//   surname: 'Tkach',
//   rate: 1500,
//   days: 20,
// };

// // const worker1 = new Worker('Stepan', 'Tkach', 1500, 20);
// const worker1 = new Worker(worker1Data);

// console.log(worker1);
// // console.log(worker1.name); //выведет 'Stepan'
// // console.log(worker1.surname); //выведет 'Tkach'
// worker1.logFullName(); //выведет 'Stepan Tkach'
// // console.log(worker1.rate); //выведет 1500
// // console.log(worker1.days); //выведет 20
// worker1.logSalary(); //выведет 30000 - то есть 1500*20

// const worker2 = new Worker({
//   name: 'Maria',
//   surname: 'Petrenko',
//   rate: 1700,
//   days: 20,
// });

// console.log(worker2);
// worker2.logFullName();
// worker2.logSalary();

// console.log(Worker.count); // 2

// for (let i = 0; i < 10; i++) {
//   new Worker({
//     surname: 'Petro',
//     rate: 10,
//     name: 'Petryk',
//     days: 31,
//   });
// }

// console.log(Worker.count); // 12

////////////////////////////////////////////////////////////////

// Пример 2 - Напишите новый "класс" Boss,
// который наследуется от Worker из прошлого задания.
// Появляется новое свойство: workers - количество работников.
// И зарплата считается по другому:
// произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// const Worker = function ({ name, surname, rate, days }) {
//   this.name = name;
//   this.surname = surname;
//   this.rate = rate;
//   this.days = days;
// };

// Worker.prototype.logSalary = function () {
//   const salary = this.rate * this.days;
//   console.log(salary);
// };

// Worker.prototype.logFullName = function () {
//   const fullName = `${this.name} ${this.surname}`;
//   console.log(fullName);
// };

// const Boss = function ({ workers, ...workerSet }) {
//   Worker.call(this, workerSet);

//   this.workers = workers;
// };

// Boss.prototype = Object.create(Worker.prototype);
// Boss.prototype.constructor = Boss;

// Boss.prototype.logSalary = function () {
//   const salary = this.rate * this.days * this.workers;
//   console.log(salary);
// };

// ///////////

// const boss1 = new Boss({
//   name: 'Omelyan',
//   surname: 'Lirnyk',
//   rate: 1000,
//   days: 20,
//   workers: 5,
// });

// console.log(boss1);
// boss1.logFullName();
// boss1.logSalary();

// console.log('logFullName' in boss1);
// console.log(boss1.hasOwnProperty('logFullName'));

// const objKeys = Object.keys(boss1);

// for (const key of objKeys) {
//   console.log(key);
// }

// for (const key in boss1) {
//   console.log(boss1[key]);
// }

// const boss2 = new Boss({
//   name: 'Ignat',
//   surname: 'Knysh',
//   rate: 1100,
//   days: 20,
//   workers: 3,
// });

// console.log(boss2);
// boss2.logFullName();
// boss2.logSalary();

//////////////////////////////////////////////////////////////////////////

// Пример 3 - Реализуйте "класс" Student (Студент),
// который будет наследовать от "класса" User.
// Подобно тому, этот "класс" должен иметь следующие свойства:
// name (имя, наследуется от User),
// surname (фамилия, наследуется от User),
// year (год поступления в вуз).
// "Класс" должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
// Также "класс" должен иметь метод logCourse(),
// который будет выводить текущий курс студента (от 1 до 5).
// "Student [full name] is on the [#] course"
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.

// const User = function (name, surname) {
//   this.name = name;
//   this.surname = surname;
// };

// User.prototype.getFullName = function () {
//   return `${this.name} ${this.surname}`;
// };

// const student = new Student({
//   name: 'Grygoriy',
//   surname: 'Burmaka',
//   year: 2019,
// });

// student.logCourse();

///////////////////////////////////////////////////////////////////////////////

// Пример 4 - Викторина
// Какие значения будут выводиться в коде ниже?

// const animal = { jumps: null };
// const rabbit = { jumps: true };

// Object.setPrototypeOf(rabbit, animal);

// console.log(1, rabbit.jumps); // ? (1)

// delete rabbit.jumps;
// console.log(2, rabbit.jumps); // ? (2)

// delete animal.jumps;
// console.log(3, rabbit.jumps); // ? (3)

////////////////////////////////////////////////////////
