// Кожне завдання виконується у вигляді чистої функції. Функція повертає масив або інше значення, але не змінює його!
// У консоль/html виводите результат виклику функції:

// const pairs = getPairs(students);
// console.log(pairs);

// Перед виконанням цього домашнього завдання необхідно створити 3 масиви:

const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];

const themes = [
 'Диференційне рівняння',
 'Теорія автоматів',
 'Алгоритми і структури даних',
];

const marks = [4, 5, 5, 3, 4, 5];

// 1) Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

const getTeam = (students) => {
 const girls = students.filter((stud) => {
  return stud[stud.length - 1] === 'а';
 });
 const guys = students.filter((stud) => {
  return stud[stud.length - 1] !== 'а';
 });
 const result = [];
 for (let i = 0; i < girls.length; i++) {
  result.push([guys[i], girls[i]]);
 }
 return result;
};

const getTeamResultEl = document.querySelector('#getTeam-result');

getTeamResultEl.innerHTML = `<span>${JSON.stringify(getTeam(students))}</span>`;

// 2) Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

const getProject = (teams, projects) => {
 const result = [];
 const newTeam = teams.map((el) => el.join(' і '));
 for (let i = 0; i < newTeam.length; i++) {
  result.push([newTeam[i], projects[i]]);
 }
 return result;
};

const getProjectResultEl = document.querySelector('#getProject-result');

getProjectResultEl.innerHTML = `<span>${JSON.stringify(
 getProject(getTeam(students), themes),
)}</span>`;

// 3) Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

const getMarks = (students, marks) =>
 students.map((stud, i) => [stud, marks[i]]);

const getMarksResultEl = document.querySelector('#getMarks-result');

getMarksResultEl.innerHTML = `<span>${JSON.stringify(
 getMarks(students, marks),
)}</span>`;

// 4) Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
// [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

const getTeamMarks = (teams) =>
 teams.map((team) => [...team, Math.ceil(Math.random() * 5)]);

const getTeamMarksResultEl = document.querySelector('#getTeamMarks-result');

getTeamMarksResultEl.innerHTML = `<span>${JSON.stringify(
 getTeamMarks(getProject(getTeam(students), themes)),
)}</span>`;
