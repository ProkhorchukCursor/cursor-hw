// Constants

import { BAD_WORDS } from './constants.js';

// HTML-elements

import {
 getRandomArrayButtonEl,
 getRandomArrayInputLengthEl,
 getRandomArrayInputMinEl,
 getRandomArrayResultEl,
 getRandomArrayInputMaxEl,
 getModaButtonEl,
 getModaResultEl,
 getModaInputEl,
 getAverageButtonEl,
 getAverageResultEl,
 getAverageInputEl,
 getMedianButtonEl,
 getMedianResultEl,
 getMedianInputEl,
 filterEvenNumbersButtonEl,
 filterEvenNumbersResultEl,
 filterEvenNumbersInputEl,
 countPositiveNumbersButtonEl,
 countPositiveNumbersResultEl,
 countPositiveNumbersInputEl,
 getDividedByFiveButtonEl,
 getDividedByFiveResultEl,
 getDividedByFiveInputEl,
 replaceBadWordsButtonResultEl,
 replaceBadWordsResultEl,
 replaceBadWordsInputResultEl,
 replaceBadWordsButtonDictionaryEl,
 replaceBadWordsInputDictionaryEl,
 replaceBadWordsListEl,
 divideByThreeButtonEl,
 divideByThreeResultEl,
 divideByThreeInputEl,
 generateCombinationsButtonEl,
 generateCombinationsResultEl,
 generateCombinationsInputEl,
} from './elements.js';

// Functions

import {
 getRandomArray,
 getModa,
 getNumber,
 getAverage,
 getMedian,
 filterEvenNumbers,
 countPositiveNumbers,
 getDividedByFive,
 replaceBadWords,
 addBadWord,
 divideByThree,
 generateCombinations,
} from './functions.js';

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

replaceBadWordsListEl.textContent = BAD_WORDS;

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
