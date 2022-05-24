// В цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на вибір)

// (!) У функціях не потрібно виводити ніяких даних, вони мають бути чистими, по можливості.
// Після чого в кінці ДЗ потрібно обернути виклик ваших функцій в console.log або document.writeln.

// Приклад: Ваша функція об'явлена десь const myFunc = () => { ...}, в кінці вашого ДЗ ви виводите
// результат виклику document.writeln(`Функція №1: ${myFunc("аргументи, якщо є")}`)

// 1) Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

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

const getMaxDigitButtonEl = document.querySelector('#getMaxDigit-button');
const getMaxDigitInputEl = document.querySelector('#getMaxDigit-input');
const getMaxDigitResultEl = document.querySelector('#getMaxDigit-result');

getMaxDigitButtonEl.addEventListener(
 'click',
 () =>
  (getMaxDigitResultEl.textContent = getMaxDigit(
   Number(getMaxDigitInputEl.value),
  )),
);

// 2) Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

const getPow = (base, exponent) => {
 if (base === 1 || exponent === 0) {
  return 1;
 }
 let result = base;
 for (let i = 0; i < Math.abs(exponent) - 1; i++) {
  result = result * base;
 }
 if (exponent < 0) {
  return 1 / result;
 } else {
  return result;
 }
};

const getPowButtonEl = document.querySelector('#getPow-button');
const getPowInputBaseEl = document.querySelector('#getPow-input-base');
const getPowInputExponentEl = document.querySelector('#getPow-input-exponent');
const getPowResultEl = document.querySelector('#getPow-result');

getPowButtonEl.addEventListener(
 'click',
 () =>
  (getPowResultEl.textContent = getPow(
   Number(getPowInputBaseEl.value),
   Number(getPowInputExponentEl.value),
  )),
);

// 3) Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

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

const getFormatingNameButtonEl = document.querySelector(
 '#getFormatingName-button',
);
const getFormatingNameInputEl = document.querySelector(
 '#getFormatingName-input',
);
const getFormatingNameResultEl = document.querySelector(
 '#getFormatingName-result',
);

getFormatingNameButtonEl.addEventListener(
 'click',
 () =>
  (getFormatingNameResultEl.textContent = getFormatingName(
   getFormatingNameInputEl.value,
  )),
);

// 4) Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
// (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

const getSumm = (summ) => {
 const tax = 19.5;
 return summ - (summ * tax) / 100;
};

const getSummButtonEl = document.querySelector('#getSumm-button');
const getSummInputEl = document.querySelector('#getSumm-input');
const getSummResultEl = document.querySelector('#getSumm-result');

getSummButtonEl.addEventListener(
 'click',
 () => (getSummResultEl.textContent = getSumm(Number(getSummInputEl.value))),
);

// 5) Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
// Приклад: getRandomNumber(1, 10) -> 5

const getRandomNumber = (number1, number2) => {
 return Math.round(Math.random() * (number2 - number1) + number1);
};

const getRandomNumberButtonEl = document.querySelector(
 '#getRandomNumber-button',
);
const getRandomNumberMinInputEl = document.querySelector(
 '#getRandomNumber-input-min',
);
const getRandomNumberMaxInputEl = document.querySelector(
 '#getRandomNumber-input-max',
);
const getRandomNumberResultEl = document.querySelector(
 '#getRandomNumber-result',
);

getRandomNumberButtonEl.addEventListener(
 'click',
 () =>
  (getRandomNumberResultEl.textContent = getRandomNumber(
   Number(getRandomNumberMinInputEl.value),
   Number(getRandomNumberMaxInputEl.value),
  )),
);

// 6) Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4

const countLetter = (string, word) => {
 if (!isNaN(Number(string)) && string !== ' ') {
  return 'Ви ввели число';
 }
 let result = 0;
 const stringToLower = string.toLowerCase();
 for (let i = 0; i < word.length; i++) {
  const letterLower = word[i].toLowerCase();
  if (stringToLower === letterLower) {
   result++;
  }
 }
 return result;
};

const countLetterButtonEl = document.querySelector('#countLetter-button');
const countLetterStringInputEl = document.querySelector(
 '#countLetter-input-string',
);
const countLetterWordInputEl = document.querySelector(
 '#countLetter-input-word',
);
const countLetterResultEl = document.querySelector('#countLetter-result');

countLetterButtonEl.addEventListener(
 'click',
 () =>
  (countLetterResultEl.textContent = countLetter(
   countLetterStringInputEl.value,
   countLetterWordInputEl.value,
  )),
);

// 7) Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$

const currencyUAH = 'UAH';
const currency$ = '$';

const convertCurrency = (string) => {
 const isUAH = string.includes(currencyUAH);
 const is$ = string.includes(currency$);
 const number = parseInt(string);
 if (isNaN(number)) {
  return 'Дуже смішно, введіть число';
 }
 if (isUAH) {
  return number / 25 + currency$;
 }
 if (is$) {
  return number * 25 + currencyUAH;
 }
 return 'Помилка';
};

const convertCurrencyButtonEl = document.querySelector(
 '#convertCurrency-button',
);
const convertCurrencyStringInputEl = document.querySelector(
 '#convertCurrency-input',
);
const convertCurrencyResultEl = document.querySelector(
 '#convertCurrency-result',
);

convertCurrencyButtonEl.addEventListener(
 'click',
 () =>
  (convertCurrencyResultEl.textContent = convertCurrency(
   convertCurrencyStringInputEl.value,
  )),
);

// 8) Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

const convertCurrencyUpdated = (string) => {
 const isUAH = string.toLowerCase().includes(currencyUAH.toLocaleLowerCase());
 const is$ = string.includes(currency$);
 const number = parseInt(string);
 if (isNaN(number)) {
  return 'Дуже смішно, введіть число';
 }
 let result = `Будь ласка, вкажiть ${currencyUAH} або ${currency$}`;
 if (isUAH) {
  result = number / 25 + currency$;
 } else if (is$) {
  result = number * 25 + currencyUAH;
 } else {
  alert(result);
 }
 return result;
};

const convertCurrencyUpdatedButtonEl = document.querySelector(
 '#convertCurrencyUpdated-button',
);
const convertCurrencyUpdatedStringInputEl = document.querySelector(
 '#convertCurrencyUpdated-input',
);
const convertCurrencyUpdatedResultEl = document.querySelector(
 '#convertCurrencyUpdated-result',
);

convertCurrencyUpdatedButtonEl.addEventListener(
 'click',
 () =>
  (convertCurrencyUpdatedResultEl.textContent = convertCurrencyUpdated(
   convertCurrencyUpdatedStringInputEl.value,
  )),
);

// 9) Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

const getRandomPassword = (number = 8) => {
 let result = '';
 for (let i = 0; i < number; i++) {
  result += Math.floor(Math.random() * 10);
 }
 return result;
};

const getRandomPasswordButtonEl = document.querySelector(
 '#getRandomPassword-button',
);
const getRandomPasswordInputEl = document.querySelector(
 '#getRandomPassword-input',
);
const getRandomPasswordResultEl = document.querySelector(
 '#getRandomPassword-result',
);

getRandomPasswordButtonEl.addEventListener(
 'click',
 () =>
  (getRandomPasswordResultEl.textContent = getRandomPassword(
   Number(getRandomPasswordInputEl.value) || 8,
  )),
);

// 10) Створіть функцію, яка видаляє всі букви з речення.
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"

const deleteLetters = (letter, string) => {
 if (!isNaN(Number(letter)) && letter !== ' ') {
  return 'Ви ввели число';
 }
 let result = '';
 for (let i = 0; i < string.length; i++) {
  const element = string[i].toLowerCase();
  if (letter !== element) {
   result += element;
  }
 }
 return result;
};

const deleteLettersButtonEl = document.querySelector('#deleteLetters-button');
const deleteLettersStringInputEl = document.querySelector(
 '#deleteLetters-input-string',
);
const deleteLettersWordInputEl = document.querySelector(
 '#deleteLetters-input-word',
);
const deleteLettersResultEl = document.querySelector('#deleteLetters-result');

deleteLettersButtonEl.addEventListener(
 'click',
 () =>
  (deleteLettersResultEl.textContent = deleteLetters(
   deleteLettersStringInputEl.value,
   deleteLettersWordInputEl.value,
  )),
);

// 11) Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

const isPalyndrom = (value) => {
 const string = deleteLetters(' ', value).toLowerCase();
 for (let i = 0; i < string.length; i++) {
  const element = string[i];
  if (element !== string[string.length - i - 1]) {
   return false;
  }
 }
 return true;
};

const isPalyndromButtonEl = document.querySelector('#isPalyndrom-button');
const isPalyndromStringInputEl = document.querySelector('#isPalyndrom-input');
const isPalyndromResultEl = document.querySelector('#isPalyndrom-result');

isPalyndromButtonEl.addEventListener(
 'click',
 () =>
  (isPalyndromResultEl.textContent = isPalyndrom(
   isPalyndromStringInputEl.value,
  )),
);

// 12) Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

const deleteDuplicateLetter = (string) => {
 if (!isNaN(Number(string)) && string !== ' ') {
  return 'Ви ввели число';
 }
 let result = '';
 for (let i = 0; i < string.length; i++) {
  const element = string[i].toLowerCase();
  if (countLetter(element, string) === 1) {
   result += element;
  }
 }
 return result;
};

const deleteDuplicateLetterButtonEl = document.querySelector(
 '#deleteDuplicateLetter-button',
);
const deleteDuplicateLetterStringInputEl = document.querySelector(
 '#deleteDuplicateLetter-input',
);
const deleteDuplicateLetterResultEl = document.querySelector(
 '#deleteDuplicateLetter-result',
);

deleteDuplicateLetterButtonEl.addEventListener(
 'click',
 () =>
  (deleteDuplicateLetterResultEl.textContent = deleteDuplicateLetter(
   deleteDuplicateLetterStringInputEl.value,
  )),
);

console.log(`
    Функція №1: ${getMaxDigit(1236)};
    Функція №2: ${getPow(2, 4)};
    Функція №3: ${getFormatingName('влад')};
    Функція №4: ${getSumm(1000)};
    Функція №5: ${getRandomNumber(1, 10)};
    Функція №6: ${countLetter('а', 'Асталавіста')};
    Функція №7: ${convertCurrency('100$')};
    Функція №8: ${convertCurrencyUpdated('2500UAH')};
    Функція №9: ${getRandomPassword(4)};
    Функція №10: ${deleteLetters('a', 'blablabla')};
    Функція №11: ${isPalyndrom('Я несу гусеня')};
    Функція №12: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')};
`);
