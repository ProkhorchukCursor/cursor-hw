// Students

import { students } from './students.js';

// Validation

// 1)

export const validatorCourse = (string) => {
 const number = Number(string);
 const defaultCourse = 1;
 if (isNaN(number) || !Number.isInteger(number) || number === 0)
  return defaultCourse;
 return number;
};

const validatorFullName = (name) => {
 if (!name) return "Введіть ім'я";
 if (students.find((stud) => stud.fullName === name))
  return "Ім'я вже є в базі";
};

const validatorUniversity = (university) => {
 if (university) return university;
};

export const validator = (university, name) => {
 if (!validatorUniversity(university)) return 'Введіть університет';
 if (validatorFullName(name)) return validatorFullName(name);
};

// 2)

export const validatorFindStudent = (name) => {
 if (!name) return "Введіть ім'я";
 if (!students.find((stud) => stud.fullName === name))
  return "Ім'я не знайдено в базі";
};
