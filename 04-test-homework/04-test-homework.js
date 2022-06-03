// У цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на вибір)

// Constants

// 1)

const RANDOM_ARRAY_ARGS = ['довжинa', 'мінімальне число', 'максимальне число'];

// 8)

const BAD_WORDS = ['shit', 'fuck'];

// HTML-elements

// 1)

const getRandomArrayButtonEl = document.querySelector('#getRandomArray-button');
const getRandomArrayInputLengthEl = document.querySelector(
 '#getRandomArray-input-length',
);
const getRandomArrayInputMinEl = document.querySelector(
 '#getRandomArray-input-min',
);
const getRandomArrayInputMaxEl = document.querySelector(
 '#getRandomArray-input-max',
);
const getRandomArrayResultEl = document.querySelector('#getRandomArray-result');

// 2)

const getModaButtonEl = document.querySelector('#getModa-button');
const getModaInputEl = document.querySelector('#getModa-input');
const getModaResultEl = document.querySelector('#getModa-result');

// 3)

const getAverageButtonEl = document.querySelector('#getAverage-button');
const getAverageInputEl = document.querySelector('#getAverage-input');
const getAverageResultEl = document.querySelector('#getAverage-result');

// 4)

const getMedianButtonEl = document.querySelector('#getMedian-button');
const getMedianInputEl = document.querySelector('#getMedian-input');
const getMedianResultEl = document.querySelector('#getMedian-result');

// 5)

const filterEvenNumbersButtonEl = document.querySelector(
 '#filterEvenNumbers-button',
);
const filterEvenNumbersInputEl = document.querySelector(
 '#filterEvenNumbers-input',
);
const filterEvenNumbersResultEl = document.querySelector(
 '#filterEvenNumbers-result',
);

// 6)

const countPositiveNumbersButtonEl = document.querySelector(
 '#countPositiveNumbers-button',
);
const countPositiveNumbersInputEl = document.querySelector(
 '#countPositiveNumbers-input',
);
const countPositiveNumbersResultEl = document.querySelector(
 '#countPositiveNumbers-result',
);

// 7)

const getDividedByFiveButtonEl = document.querySelector(
 '#getDividedByFive-button',
);
const getDividedByFiveInputEl = document.querySelector(
 '#getDividedByFive-input',
);
const getDividedByFiveResultEl = document.querySelector(
 '#getDividedByFive-result',
);

// 8)

const replaceBadWordsButtonDictionaryEl = document.querySelector(
 '#replaceBadWords-button-dictionary',
);
const replaceBadWordsButtonResultEl = document.querySelector(
 '#replaceBadWords-button-result',
);
const replaceBadWordsInputDictionaryEl = document.querySelector(
 '#replaceBadWords-input-dictionary',
);
const replaceBadWordsInputResultEl = document.querySelector(
 '#replaceBadWords-input-result',
);
const replaceBadWordsResultEl = document.querySelector(
 '#replaceBadWords-result',
);
const replaceBadWordsListEl = document.querySelector(
 '#replaceBadWords-words-list',
);

replaceBadWordsListEl.textContent = BAD_WORDS;

// 9)

const divideByThreeButtonEl = document.querySelector('#divideByThree-button');
const divideByThreeInputEl = document.querySelector('#divideByThree-input');
const divideByThreeResultEl = document.querySelector('#divideByThree-result');

// 10)

const generateCombinationsButtonEl = document.querySelector(
 '#generateCombinations-button',
);
const generateCombinationsInputEl = document.querySelector(
 '#generateCombinations-input',
);
const generateCombinationsResultEl = document.querySelector(
 '#generateCombinations-result',
);

// EventListeners

// 1)

getRandomArrayButtonEl.addEventListener(
 'click',
 () =>
  (getRandomArrayResultEl.textContent = getRandomArray(
   Number(getRandomArrayInputLengthEl.value),
   Number(getRandomArrayInputMinEl.value),
   Number(getRandomArrayInputMaxEl.value),
  )),
);

// 2)

getModaButtonEl.addEventListener(
 'click',
 () => (getModaResultEl.textContent = getModa(getNumber(getModaInputEl.value))),
);

// 3)

getAverageButtonEl.addEventListener(
 'click',
 () =>
  (getAverageResultEl.textContent = getAverage(
   getNumber(getAverageInputEl.value),
  )),
);

// 4)

getMedianButtonEl.addEventListener(
 'click',
 () =>
  (getMedianResultEl.textContent = getMedian(
   getNumber(getMedianInputEl.value),
  )),
);

// 5)

filterEvenNumbersButtonEl.addEventListener(
 'click',
 () =>
  (filterEvenNumbersResultEl.textContent = filterEvenNumbers(
   getNumber(filterEvenNumbersInputEl.value),
  )),
);

// 6)

countPositiveNumbersButtonEl.addEventListener(
 'click',
 () =>
  (countPositiveNumbersResultEl.textContent = countPositiveNumbers(
   getNumber(countPositiveNumbersInputEl.value),
  )),
);

// 7)

getDividedByFiveButtonEl.addEventListener(
 'click',
 () =>
  (getDividedByFiveResultEl.textContent = getDividedByFive(
   getNumber(getDividedByFiveInputEl.value),
  )),
);

// 8)

replaceBadWordsButtonResultEl.addEventListener(
 'click',
 () =>
  (replaceBadWordsResultEl.textContent = replaceBadWords(
   replaceBadWordsInputResultEl.value,
  )),
);

replaceBadWordsButtonDictionaryEl.addEventListener('click', () =>
 addBadWord(replaceBadWordsInputDictionaryEl.value),
);

// 9)

divideByThreeButtonEl.addEventListener(
 'click',
 () =>
  (divideByThreeResultEl.textContent = divideByThree(
   divideByThreeInputEl.value,
  )),
);

// 9)

generateCombinationsButtonEl.addEventListener(
 'click',
 () =>
  (generateCombinationsResultEl.textContent = generateCombinations(
   generateCombinationsInputEl.value,
  )),
);

// Tasks

// 1) Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа,
// max – максимальне значення цілого числа.
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const getValidateArgs = (args, response) => {
 const result = [];
 args.forEach((argument, i) => {
  if (!argument || argument < 0 || argument % 1 !== 0) result.push(response[i]);
 });
 if (result.length) {
  return `Ви ввели некоректні: ${result}`;
 }
};

const getRandomArray = (length, min, max) => {
 const isInvalid = getValidateArgs([length, min, max], RANDOM_ARRAY_ARGS);
 if (isInvalid) return isInvalid;
 if (min >= max) return 'Максимальне число має бути більше за мінімальне число';
 const newArray = [];
 for (let index = 0; index < length; index++) {
  newArray.push(Math.round(Math.random() * (max - min) + min));
 }
 return JSON.stringify(newArray);
};

// 2) Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

const getNumber = (value) => {
 const array = value.split(',');
 const numbers = array.map((el) => {
  const num = Number(el);
  if (num % 1 !== 0 || isNaN(num)) return;
  return num;
 });
 return numbers;
};

const getModa = (numbers) => {
 let result = [];
 let maxLength = 0;
 numbers.forEach((num) => {
  const numbersLength = numbers.filter((el) => el === num).length;
  if (numbersLength > maxLength) {
   maxLength = numbersLength;
   result = [num];
  }
  if (numbersLength === maxLength) {
   result.push(num);
  }
 });
 result = new Set(result);
 return JSON.stringify([...result]);
};

// 3) Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const getAverage = (numbers) => {
 const summ = numbers.reduce((acc, value) => acc + value, 0);
 return summ / numbers.length;
};

// 4) Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

const getMedian = (numbers) => {
 const numbersSorted = numbers.sort((a, b) => a - b);
 const medianIndex = Math.floor(numbersSorted.length / 2);
 if (numbersSorted.length % 2 === 0)
  return (numbersSorted[medianIndex] + numbersSorted[medianIndex - 1]) / 2;
 return numbersSorted[medianIndex];
};

// 5) Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const filterEvenNumbers = (numbers) =>
 JSON.stringify(numbers.filter((num) => num % 2 !== 0));

// 6) Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const countPositiveNumbers = (numbers) =>
 numbers.filter((num) => num > 0).length;

// 7) Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті,
// які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const getDividedByFive = (numbers) =>
 JSON.stringify(numbers.filter((num) => num % 5 === 0 && num !== 0));

// 8) Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції.split(" "),
// після чого масив необхідно буде склеїти.join(" ")
// Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy ****!"
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

const replaceBadLetter = (word) => {
 const isBadWord = BAD_WORDS.filter((el) => word.toLowerCase().includes(el));
 if (!isBadWord.length) return word;
 word = word.replace(isBadWord, '****');
 const result = replaceBadLetter(word);
 return result;
};

const replaceBadWords = (string) => {
 if (!string) return 'Ще не ввели';
 const array = string.split(' ').map((el) => replaceBadLetter(el));
 return array.join(' ');
};

const addBadWord = (word) => {
 if (!BAD_WORDS.includes(word)) BAD_WORDS.push(word.toLowerCase());
 replaceBadWordsListEl.textContent = BAD_WORDS;
};

// 9) Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває.Пробіли завжди видаляються.Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander") -> ["com", "man", "der"]
// Приклад: divideByThree("live") -> ["liv", "e"]

const divideByThree = (word) => {
 if (!word) return 'Ще не ввели';
 if (word.length < 3) return word.toLowerCase();
 const result = [];
 let string = '';
 const array = word.split('').filter((letter) => letter !== ' ');
 array.forEach((letter, i) => {
  string += letter;
  if ((i + 1) % 3 === 0 || i === array.length - 1) {
   result.push(string.toLowerCase());
   string = '';
  }
 });
 return JSON.stringify(result);
};

// 10) Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень)
// букв в слові.Для тестів не передавайте слова в яких більше 10 букв.Краще взагалі обмежити работу функції 10 буквами.
// Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"]
// Приклад: generateCombinations("ol") -> ["ol", "lo"]

const generateCombinations = (word) => {
 let result = [];
 if (!word) return ['Ще не ввели'];
 if (word.length > 10) return 'Обмеження 10 букв';
 if (word.length <= 1) {
  return word.length == 0 ? [] : [word];
 }
 for (let i = 0; i < word.length; i++) {
  let first = word[i];
  let newArr = word.slice(0, i) + word.slice(i + 1);
  let others = generateCombinations(newArr);
  others &&
   others.forEach((item) => {
    result.push(first + item);
   });
 }
 result = [...new Set(result)];
 return result;
};
