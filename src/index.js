import "./index.css";

// 1. ПЕРЕМЕННЫЕ

// let admin = "Джон";
// let name = admin;
// console.log(name);

//* Типы данных
// let name = "Витя";
// alert(`Привет ${name} !`);

// 2. Взаимодействие: alert, prompt, confirm

// alert(`Hello!`);

// let name = prompt(`Как тебя зовут?`);
// alert(`Привет, ${name}.`);

// let age = confirm(`Тебе есть 18 лет?`);
// if (age == true) alert(`Добро пожаловать!`);
// else alert(`Просмотр запрещен`);

// let userName = prompt(`Как тебя зовут?`);
// let weatherToday = confirm(
//   `Добрый день, ${userName}! Сегодня на улице идет дождь?`
// );
// if (weatherToday == true) {
//   alert(`${userName}, Не забудьте захватить зонт!`);
// } else alert(`Хорошего Вам дня,  ${userName}`);

// Регистрация с паролем
// let userName = prompt(`Добрый день! Как Вас зовут?`);
// let userPassword1 = prompt(`${userName}, придумайте пароль`);
// let userPassword2 = prompt(`Повторите пароль`);
// *if (userPassword1 == userPassword2) {
//   alert(`Добро пожаловать, ${userName}`);
// } else alert(`Неверно введен пароль, повторите еще раз`);

// *если с тернарным оператором
// let userName = prompt(`Добрый день! Как Вас зовут?`);
// let userPassword1 = prompt(`${userName}, придумайте пароль`);
// let userPassword2 = prompt(`Повторите пароль`);
// let access =
//   userPassword1 == userPassword2
//     ? alert(`Добро пожаловать, ${userName}`)
//     : alert(`Неверно введен пароль, повторите еще раз`);

// 3.Условные операторы: if, '?'

// let userAge = prompt(`Добрый день! Сколько Вам лет?`);
// let access =
//   userAge > 50
//     ? `Почтенный возраст `
//     : userAge > 18
//     ? `Совершеннолетие`
//     : `Юность`;
// alert(access);

// let motherName = prompt(`Как зовут мою маму?`);
// motherName == `Лариса`
//   ? alert(`Да, верно`)
//   : alert(`Нет, постарайся вспомнить!`);

// let answer = prompt(`Какое «официальное» название JavaScript?`);
// if (answer == `ECMAScript`) {
//   alert(`Верно!`);
// } else {
//   alert(`Не знаете? ECMAScript!`);
// }

// let number = prompt(`Напишите число`);
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//Перепишите 'if' в '?'
// let result

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';

//   let result = (a + b < 4) ? 'Мало' : 'Много'

// Перепишите 'if..else' в '?'
// let message;

// if (login == "Сотрудник") {
//   message = "Привет";
// } else if (login == "Директор") {
//   message = "Здравствуйте";
// } else if (login == "") {
//   message = "Нет логина";
// } else {
//   message = "";
// }

// let login = prompt(`Назовитесь`);
// let message =
//   login == "Директор"
//     ? "Здравствуйте"
//     : login == "Сотрудник"
//     ? "Привет"
//     : login == ""
//     ? "Нет логина"
//     : "";
// alert(message);

// let familyMember = prompt(`Кто вы?`);
// let greeting =
//   familyMember == `Мама`
//     ? `Доброе утро! Матушка`
//     : familyMember == `Папа`
//     ? `Доброе утро, Папенька!`
//     : familyMember == `Сын`
//     ? `Доброе утро, кровинушка`
//     : `Доброе утро, товарищ!`;
// alert(greeting);

// 4. Логические операторы || (ИЛИ), && (И) и ! (НЕ)

// let timeNow = prompt(`Сколько сейчас времени?`);
// if (timeNow >= 18 || timeNow < 9) {
//   alert(`Магазин закрыт!`);
// } else {
//   alert(`Добро пожаловать!`);
// }

// alert(0 || `` || `Сережа`);

// *
// let age = prompt(`Введите число`);
// if (!(age >= 14 && age <= 90)) {
//   alert(`ОШибка`);
// } else {
//   alert(`Попробуйте еще раз`);
// }

// // if (age < 14 && age > 90)

// // if (age >= 14 && age <= 90)

// Задача на запрос логина
let password;
let login = prompt(`Добрый день! Введите логин`);
if (login == `Админ`) {
  password = prompt(`Введите пароль`);
  if (password == `Я главный`) {
    alert(`Здравствуйте !`);
  } else if (password == `` || password == null) {
    alert(`Отменено`);
  } else {
    alert(`Неверный пароль`);
  }
} else if (login == `` || login == null) {
  alert(`Отменено`);
} else {
  alert(`Я Вас не знаю`);
}
