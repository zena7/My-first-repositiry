import "./index.css";

// 7. Функции
// 7.1 Function Declaration (Объявление Функции)

// let userName = `Наталья`;
// let message = "Привет, " + userName;
// alert(message);

// let word = `Привет, ${userName}`;
// alert(word);

// age :: Number -> Boolean
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("А родители разрешили?");
//   }
// }

// // foo :: () -> Void
// const foo = () => {
//   let age = prompt("Сколько вам лет?", 18);
//   const is = checkAge(age);
//   console.log("is", is);

//   if (is) {
//     alert("Доступ получен");
//   } else {
//     alert("Доступ закрыт");
//   }
// };

// foo();

// Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// Функция минимум
// function Min(a, b) {
//   const foo = a > b ? b : a;
//   console.log("min:", foo);

//   return foo;
// }

// Min(-6, 5);

// Функция возведения в степень  - Функция pow(x,n)
// function pow(x, n) {
//   let result = x ** n;

//   console.log(`Решение:`, result);
//   return result;
// }

// let x = +prompt(`Введите число Х`);
// let n = +prompt(`Введите в какую степень нужно возвести это число`);
// if (n > 1) {
//   pow(x, n);
// }

// 7.2. Function Expression (Функциональное Выражение)
// 7.3. Функции-стрелки

// -перепишите с использованием функции-стрелки
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);


function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
  ask ("Вы согласны?", () => alert"Вы согласились.", 
  () = > alert("Вы отменили выполнение."));