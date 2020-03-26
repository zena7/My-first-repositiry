import "./index.css";

let login = prompt(`Кто Вы?`);
if (login == `Admin`) {
  let passwordS = prompt(`Введите пароль`);
  if (passwordS == `Я главный`) {
    alert(`Здравствуйте!`);
  } else {
    alert(`Я Вас не знаю! `);
  }
} else {
  alert(`Я Вас не знаю! `);
}
