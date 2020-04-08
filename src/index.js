import "./index.css";

// Напишите функцию pow(x,n), которая возвращает x в степени n.
//  Иначе говоря, умножает x на себя n раз и возвращает результат.

foo();

function foo() {
  let x = +prompt(`Введите значение x`);
  let n = +prompt(`Введите значение n (В какую степень возвести число x)`);

  if (x > 1 && n > 1) {
    alert(Math.pow(x, n));
  } else {
    alert("!!!");
  }
}

// function pow(x, n) {
//   return x ** n;
// }
// if (x > 1 && n > 1) {
//   const result = pow(x, n);
//   alert(result);
// } else {
//   alert(`Введите натуральные числа! `);
// // }

// function foo(a, b) {
//   if (a > 1 && b > 1) {
//     return a ** b;
//   } else {
//     alert(`Введите натуральные числа! `);
//   }
// }

// const res = foo(a, n);

// console.log(res);
