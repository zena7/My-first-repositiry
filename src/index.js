import "./index.css";

// Переписать, используя ? или ||

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   let result = age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {}

// Найти функцию, которая возвращает наименьшее из чисел
function min(a, b) {
  if (a < b) {
    alert(`${a} - наименьшее`);
  }
  alert(`${b} - наименьшее`);
}
min(10, 4);

function sum(a, b) {
  console.log("a", a);
  console.log("b", b);
}

const c = sum(2, 3);

console.log("c", c);
