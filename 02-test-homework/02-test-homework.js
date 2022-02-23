// В цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на вибір)

// (!) У функціях не потрібно виводити ніяких даних, вони мають бути чистими, по можливості.
// Після чого в кінці ДЗ потрібно обернути виклик ваших функцій в console.log або document.writeln.

// Приклад: Ваша функція об'явлена десь const myFunc = () => { ...}, в кінці вашого ДЗ ви виводите
// результат виклику document.writeln(`Функція №1: ${myFunc("аргументи, якщо є")}`)

//? 1) Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
//? 2) Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
//? 3) Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
//? 4) Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
// (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
//? 5) Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
// Приклад: getRandomNumber(1, 10) -> 5
// 6) Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4
// 7) Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// 8) Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
// 9) Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
// 10) Створіть функцію, яка видаляє всі букви з речення.
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"
// 11) Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
// 12) Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

// 1)

const getMaxDigit = (number) => {
  const string = number.toString();
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    if (result < string[i]) {
      result = string[i];
    }
  }

  return result;
};

// 2)

const getPow = (base, exponent) => {
  let result = base;
  for (let i = 0; i < exponent - 1; i++) {
    result = result * base;
  }
  return result;
};

// 3)

const getFormatingName = (name) => {
  let result = '';
  let isFirstTurn = true;
  for (let i = 0; i < name.length; i++) {
    if (isFirstTurn) {
      isFirstTurn = false;
      result = result + name[i].toUpperCase();
    } else {
      result = result + name[i].toLowerCase();
    }
  }
  return result;
};

// 4)

const getSumm = (summ) => {
  const tax = 19.5;
  return summ - (summ * tax) / 100;
};

// 5)

const getRandomNumber = (number1, number2) => {
  return Math.round(Math.random() * (number2 - number1) + number1);
};

console.log(getRandomNumber(5, 15));
