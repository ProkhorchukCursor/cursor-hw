// HTML-elements

import {
 getRandomChineseButtonEl,
 getRandomChineseInputEl,
 getRandomChineseResultEl,
} from './elements.js';

// Constants

import { TIME, CLASS_START } from './constants.js';

// Functions

import { handleStartFunc, getRandomChinese } from './functions.js';

// EventListeners

// 1)

let timer = null;

getRandomChineseButtonEl.addEventListener('click', () => {
 const length = Number(getRandomChineseInputEl.value);
 if (!length && length <= 0)
  return (getRandomChineseResultEl.textContent = 'Неправильно ввели');

 handleStartFunc(getRandomChineseButtonEl);

 if (getRandomChineseButtonEl.className !== CLASS_START)
  return clearTimeout(timer);

 timer = setInterval(
  () => getRandomChinese(getRandomChineseResultEl, length),
  TIME * length,
 );
});
