// Main array

import { students } from './students.js';

// HTML-elements

import {
 getSubjectsButtonEl,
 getSubjectsResultEl,
 getSubjectsInputEl,
 getAverageMarkButtonEl,
 getAverageMarkResultEl,
 getAverageMarkInputEl,
 getStudentInfoButtonEl,
 getStudentInfoResultEl,
 getStudentInfoInputEl,
 getStudentsNamesButtonEl,
 getStudentsNamesResultEl,
 getBestStudentButtonEl,
 getBestStudentResultEl,
 calculateWordLettersButtonEl,
 calculateWordLettersResultEl,
 calculateWordLettersInputEl,
} from './elements.js';

// Functions

import {
 getSubjects,
 getAverageMark,
 getStudentInfo,
 getStudentsNames,
 getBestStudent,
 calculateWordLetters,
} from './functions.js';

// EventListeners

// 1)

getSubjectsButtonEl.addEventListener(
 'click',
 () =>
  (getSubjectsResultEl.textContent = getSubjects(
   getSubjectsInputEl.value.trim(),
  )),
);

// 2)

getAverageMarkButtonEl.addEventListener(
 'click',
 () =>
  (getAverageMarkResultEl.textContent = getAverageMark(
   getAverageMarkInputEl.value.trim(),
  )),
);

// 3)

getStudentInfoButtonEl.addEventListener(
 'click',
 () =>
  (getStudentInfoResultEl.textContent = getStudentInfo(
   getStudentInfoInputEl.value.trim(),
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
   calculateWordLettersInputEl.value.trim(),
  )),
);
