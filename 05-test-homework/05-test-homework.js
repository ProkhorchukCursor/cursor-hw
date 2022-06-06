// Main array

const students = [
 {
  name: 'Tanya',
  course: 3,
  subjects: {
   math: [4, 4, 3, 4],
   algorithms: [3, 3, 3, 4, 4, 4],
   data_science: [5, 5, 3, 4],
  },
 },
 {
  name: 'Victor',
  course: 4,
  subjects: {
   physics: [5, 5, 5, 3],
   economics: [2, 3, 3, 3, 3, 5],
   geometry: [5, 5, 2, 3, 5],
  },
 },
 {
  name: 'Anton',
  course: 2,
  subjects: {
   statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
   english: [5, 3],
   cosmology: [5, 5, 5, 5],
  },
 },
];

// HTML-elements

// 1)

const getSubjectsButtonEl = document.querySelector('#getSubjects-button');
const getSubjectsInputEl = document.querySelector('#getSubjects-input');
const getSubjectsResultEl = document.querySelector('#getSubjects-result');

// 2)

const getAverageMarkButtonEl = document.querySelector('#getAverageMark-button');
const getAverageMarkInputEl = document.querySelector('#getAverageMark-input');
const getAverageMarkResultEl = document.querySelector('#getAverageMark-result');

// 3)

const getStudentInfoButtonEl = document.querySelector('#getStudentInfo-button');
const getStudentInfoInputEl = document.querySelector('#getStudentInfo-input');
const getStudentInfoResultEl = document.querySelector('#getStudentInfo-result');

// 4)

const getStudentsNamesButtonEl = document.querySelector(
 '#getStudentsNames-button',
);
const getStudentsNamesResultEl = document.querySelector(
 '#getStudentsNames-result',
);

// 5)

const getBestStudentButtonEl = document.querySelector('#getBestStudent-button');
const getBestStudentResultEl = document.querySelector('#getBestStudent-result');

// 6)

const calculateWordLettersButtonEl = document.querySelector(
 '#calculateWordLetters-button',
);
const calculateWordLettersInputEl = document.querySelector(
 '#calculateWordLetters-input',
);
const calculateWordLettersResultEl = document.querySelector(
 '#calculateWordLetters-result',
);

// EventListeners

// 1)

getSubjectsButtonEl.addEventListener(
 'click',
 () =>
  (getSubjectsResultEl.textContent = getSubjects(getSubjectsInputEl.value)),
);

// 2)

getAverageMarkButtonEl.addEventListener(
 'click',
 () =>
  (getAverageMarkResultEl.textContent = getAverageMark(
   getAverageMarkInputEl.value,
  )),
);

// 3)

getStudentInfoButtonEl.addEventListener(
 'click',
 () =>
  (getStudentInfoResultEl.textContent = getStudentInfo(
   getStudentInfoInputEl.value,
  )),
);

// 4)

getStudentsNamesButtonEl.addEventListener(
 'click',
 () => (getStudentsNamesResultEl.textContent = getStudentsNames(students)),
);

// 5)

getBestStudentButtonEl.addEventListener(
 'click',
 () => (getBestStudentResultEl.textContent = getBestStudent(students)),
);

// 6)

calculateWordLettersButtonEl.addEventListener(
 'click',
 () =>
  (calculateWordLettersResultEl.textContent = calculateWordLetters(
   calculateWordLettersInputEl.value,
  )),
);

// Tasks

// 1) Створіть функцію getSubjects(students[0]) --> ["Math", "Algorithms", "Data science"]
// - яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

const findStudent = (name) => {
 const student = students.find(
  (stud) => stud.name.toLowerCase() === name.toLowerCase(),
 );
 if (!student) return;
 return student;
};

const getSubjects = (name) => {
 if (!findStudent(name)) return 'Не знайдено';
 const { subjects } = findStudent(name);
 const titles = Object.keys(subjects).map((title) => {
  const titleToUpper = title[0].toUpperCase() + title.slice(1, title.length);
  return titleToUpper.replace('_', ' ');
 });
 return JSON.stringify(titles);
};

// 2) Створіть функцію getAverageMark(students[0]) --> 3.79
// – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях:)

const getAverage = (numbers) => {
 const summ = numbers.reduce((acc, value) => acc + value, 0);
 return summ / numbers.length;
};

const getAverageMark = (name) => {
 if (!findStudent(name)) return 'Не знайдено';
 const { subjects } = findStudent(name);
 const marks = Object.values(subjects).reduce(
  (acc, value) => (acc = acc.concat(...value)),
 );
 return getAverage(marks).toFixed(2);
};

// 3) Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}
// – яка повертає інформацію загального виду по переданому студенту(вам знадобиться функція з попереднього завдання).
// Пoвинна бути виведена інформація: курс, ім'я, середня оцінка.

const getStudentInfo = (student) => {
 if (!findStudent(student)) return 'Не знайдено';
 const { course, name } = findStudent(student);
 const info = {
  course,
  name,
  averageMark: Number(getAverageMark(student)),
 };
 return JSON.stringify(info);
};

// 4) Створіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
// – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = (students) => {
 return JSON.stringify(students.map((student) => student.name).sort());
};

// 5) Створіть функцію getBestStudent(students) --> "Anton"
// – яка повертає кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = (students) => {
 const result = [];

 const studentsInfo = students
  .map((student) => JSON.parse(getStudentInfo(student.name)))
  .sort((a, b) => b.averageMark - a.averageMark);

 const bestStudents = studentsInfo.filter(
  (student) => student.averageMark === studentsInfo[0].averageMark,
 );

 result.push(...bestStudents.map((bestStud) => bestStud.name));

 return JSON.stringify(result);
};

// 6) Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }
// – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

const calculateWordLetters = (word) => {
 if (!word) return 'Не ввели';
 const array = word.split('');
 let result = {};
 for (let i = 0; i < word.length; i++) {
  const letter = word[i];
  const number = array.filter((let) => let === letter).length;
  const obj = { [letter]: number };
  result = { ...result, ...obj };
 }
 return JSON.stringify(result);
};
