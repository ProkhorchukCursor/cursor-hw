// Main objects

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const DATA_BASE = { ukraine, latvia, litva };

// HTML-elements

// 1)

const getMyTaxesButtonEl = document.querySelector('#getMyTaxes-button');
const getMyTaxesInputCountryEl = document.querySelector(
 '#getMyTaxes-input-country',
);
const getMyTaxesInputSalaryEl = document.querySelector(
 '#getMyTaxes-input-salary',
);
const getMyTaxesResultEl = document.querySelector('#getMyTaxes-result');

// 2)

// 3)

// 4)

// EventListeners

// 1)

getMyTaxesButtonEl.addEventListener(
 'click',
 () =>
  (getMyTaxesResultEl.textContent = getMyTaxes.call(
   findCountry(getMyTaxesInputCountryEl.value),
   parseInt(getMyTaxesInputSalaryEl.value),
  )),
);

// 2)

// 3)

// 4)

// Tasks

// 1) Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите
// як IT - спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this

const findCountry = (string) => {
 return DATA_BASE[string.toLowerCase()];
};

const getMyTaxes = function (salary) {
 //  if (!this.tax) return 'Країни не знайдено';
 //  if (!salary) return 'Введіть вашу зарплатню';
 console.log(this);
 console.log(salary);
};

// 2) Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків
// платятт IT - спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call
// та працювати з даними через this

// 3) Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять
// IT - спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call
// та працювати з даними через this

// 4) Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду:
// { salary: number, taxes: number, profit: number } кожні 10 секунд.Значення salary – генеруйте випадковим чином
// у діапазоні 1500 - 2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;
