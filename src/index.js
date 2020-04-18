import "./index.css";

// let i = 10;
// while (i) {
//   alert(i);
//   i -= 1;
// }

// for (let i = 0; i < 10; i += 1) {
//   alert(i);
// }

// Только нечетные выводить
// for (let i = 0; i < 7; i += 1) {
//   if (i % 2 == 0) continue;
//   alert(i);
// }

// for (let i = 2; i < 7; i += 1) {
//   if (i % 2 == 1) break;
//   alert(i);
// }

// Метки

// outer: for (let i = 0; i < 3; i += 1) {
//   for (let j = 0; j < 3; j += 1) {
//     let input = prompt(`Введите координаты  ${i}, ${j}`);
//     if (!input) break outer;
//   }
// }
// alert(`Готово !`);

//  Вывести четные числа
// let i;
// let number = i;
// for (i = 1; i <= 10; i += 1) {
//   if (i % 2 == 1) continue;
//   alert(i);
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i += 1;
// }
//

// Повторять цикл пока ввод не верен (бесконечный цикл)

while (true) {
  let value = prompt("Введите число больше 100");

  if (Number(value) >= 100) break;
}
