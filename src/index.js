import "./index.css";

// 5. Циклы while и for
// Выведите чётные числа

// let i;
// for (i = 1; i <= 20; i++) {
//   if (i % 2 == 0)
//     alert(i);
//   }
// }

// - Замените for на while
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// Повторять цикл, пока ввод неверен
// let currentNumber = prompt(`Введите число больше 100`);
// let i = Number(currentNumber);
// for (; i < 100; ) {
//   i = prompt(`Введите еще раз`);
//   if (i == null || i == ``) break;
// }

// if (i > 100) {
//   alert(`Верно!`);
// }

// 6. Switch
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );

// let browser = prompt(`Какой у вас браузер?`);
// if (browser === `Edge`) {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

let number = +prompt("Введите число между 0 и 3");
switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;

  case 1:
    alert("Вы ввели число 1");
    break;

  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}
