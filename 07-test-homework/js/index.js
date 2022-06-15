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

// Functions

import {
 addStudent,
 getInfoStudent,
 getMarksStudent,
 setMarksStudent,
 getAverageMarkStudent,
 dismissStudent,
 recoverStudent,
 addBudgetStudent,
} from './functions.js';

// Students

import { students } from './students.js';

// EventListeners

// 1)

constructorButtonEl.addEventListener('click', () =>
 addStudent(
  constructorInputUniversityEl,
  constructorInputCourseEl,
  constructorInputFullNameEl,
  constructorResultEl,
  studentsResultEl,
 ),
);

// 2)

getInfoButtonEl.addEventListener('click', () =>
 getInfoStudent(getInfoInputEl, getInfoResultEl),
);

// 3)

getMarksButtonEl.addEventListener('click', () =>
 getMarksStudent(getMarksInputEl, getMarksResultEl),
);

// 4)

setMarksButtonEl.addEventListener('click', () =>
 setMarksStudent(setMarksInputNameEl, setMarksInputMarkEl, setMarksResultEl),
);

// 5)

getAverageMarkButtonEl.addEventListener('click', () =>
 getAverageMarkStudent(getAverageMarkInputEl, getAverageMarkResultEl),
);

// 6)

dismissButtonEl.addEventListener('click', () =>
 dismissStudent(dismissInputEl, dismissResultEl),
);

// 7)

recoverButtonEl.addEventListener('click', () =>
 recoverStudent(recoverInputEl, recoverResultEl),
);

// Advanced

budgetStudentButtonEl.addEventListener('click', () =>
 addBudgetStudent(
  budgetStudentInputCourseEl,
  budgetStudentInputUniversityEl,
  budgetStudentInputFullNameEl,
  budgetStudentResultEl,
  studentsResultEl,
 ),
);

// Default student

const student = new Student(
 'Вищої Школи Психотерапії м.Одеса',
 1,
 'Остап Бендер',
);
student.marks = 3;
student.marks = 4;
student.marks = 5;
student.marks = 4;
students.push(student);
studentsResultEl.textContent = students.map((stud) => stud.fullName);
