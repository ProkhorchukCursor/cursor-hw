// HTML-elements

import {
 constructorButtonEl,
 constructorInputUniversityEl,
 constructorInputCourseEl,
 constructorInputFullNameEl,
 constructorResultEl,
 studentsResultEl,
 getInfoButtonEl,
 getInfoInputEl,
 getInfoResultEl,
 getMarksButtonEl,
 getMarksInputEl,
 getMarksResultEl,
 setMarksButtonEl,
 setMarksInputNameEl,
 setMarksInputMarkEl,
 setMarksResultEl,
 getAverageMarkButtonEl,
 getAverageMarkInputEl,
 getAverageMarkResultEl,
 dismissButtonEl,
 dismissInputEl,
 dismissResultEl,
 recoverButtonEl,
 recoverInputEl,
 recoverResultEl,
 budgetStudentButtonEl,
 budgetStudentInputCourseEl,
 budgetStudentInputUniversityEl,
 budgetStudentInputFullNameEl,
 budgetStudentResultEl,
} from './elements.js';

// Classes

import { Student } from './Student.js';
import { BudgetStudent } from './BudgetStudent.js';

// Functions

import {
 validatorCourse,
 validator,
 validatorFindStudent,
} from './functions.js';

// Students

import { students } from './students.js';

// EventListeners

// 1)

constructorButtonEl.addEventListener('click', () => {
 const university = constructorInputUniversityEl.value;
 const course = validatorCourse(constructorInputCourseEl.value);
 const fullName = constructorInputFullNameEl.value;

 if (validator(university, fullName)) {
  return (constructorResultEl.textContent = validator(university, fullName));
 }

 const student = new Student(university, course, fullName);
 students.push(student);
 studentsResultEl.textContent = students.map((stud) => stud.fullName);
 constructorResultEl.textContent = JSON.stringify(student);
});

// 2)

getInfoButtonEl.addEventListener('click', () => {
 if (validatorFindStudent(getInfoInputEl.value)) {
  return (getInfoResultEl.textContent = validatorFindStudent(
   getInfoInputEl.value,
  ));
 }
 const student = students.find(
  (stud) => stud.fullName === getInfoInputEl.value,
 );
 getInfoResultEl.textContent = student.getInfo();
});

// 3)

getMarksButtonEl.addEventListener('click', () => {
 if (validatorFindStudent(getMarksInputEl.value)) {
  return (getMarksResultEl.textContent = validatorFindStudent(
   getMarksInputEl.value,
  ));
 }
 const student = students.find(
  (stud) => stud.fullName === getMarksInputEl.value,
 );
 getMarksResultEl.textContent = JSON.stringify(student.marks);
});

// 4)

setMarksButtonEl.addEventListener('click', () => {
 if (validatorFindStudent(setMarksInputNameEl.value)) {
  return (setMarksResultEl.textContent = validatorFindStudent(
   setMarksInputNameEl.value,
  ));
 }
 if (!setMarksInputMarkEl.value) {
  return (setMarksResultEl.textContent = 'Введіть оцінку');
 }
 const student = students.find(
  (stud) => stud.fullName === setMarksInputNameEl.value,
 );
 student.marks = Number(setMarksInputMarkEl.value);
 setMarksResultEl.textContent = JSON.stringify(student.marks);
});

// 5)

getAverageMarkButtonEl.addEventListener('click', () => {
 if (validatorFindStudent(getAverageMarkInputEl.value)) {
  return (getAverageMarkResultEl.textContent = validatorFindStudent(
   getAverageMarkInputEl.value,
  ));
 }
 const student = students.find(
  (stud) => stud.fullName === getAverageMarkInputEl.value,
 );
 getAverageMarkResultEl.textContent = JSON.stringify(student.getAverageMark());
});

// 6)

dismissButtonEl.addEventListener('click', () => {
 if (validatorFindStudent(dismissInputEl.value)) {
  return (dismissResultEl.textContent = validatorFindStudent(
   dismissInputEl.value,
  ));
 }
 const student = students.find(
  (stud) => stud.fullName === dismissInputEl.value,
 );
 student.dismiss();
 if (student.dismissed) return (dismissResultEl.textContent = 'Виключено');
});

// 7)

recoverButtonEl.addEventListener('click', () => {
 if (validatorFindStudent(recoverInputEl.value)) {
  return (recoverResultEl.textContent = validatorFindStudent(
   recoverInputEl.value,
  ));
 }
 const student = students.find(
  (stud) => stud.fullName === recoverInputEl.value,
 );
 student.recover();
 if (!student.dismissed) return (recoverResultEl.textContent = 'Поновлено');
});

// Advanced

// 1)

budgetStudentButtonEl.addEventListener('click', () => {
 const university = budgetStudentInputUniversityEl.value;
 const course = validatorCourse(budgetStudentInputCourseEl.value);
 const fullName = budgetStudentInputFullNameEl.value;

 if (validator(university, fullName)) {
  return (constructorResultEl.textContent = validator(university, fullName));
 }

 const student = new BudgetStudent(university, course, fullName);
 students.push(student);
 studentsResultEl.textContent = students.map((stud) => stud.fullName);
 budgetStudentResultEl.textContent = JSON.stringify(student);
});
