// Constants

import { TIME, CLASS_START, CLASS_STOP } from './constants.js';

// Functions

export const handleStartFunc = (element) => {
 element.className =
  element.className === CLASS_START ? CLASS_STOP : CLASS_START;
 element.textContent =
  element.className === CLASS_START ? 'Зупинити' : 'Перевірити';
};

const genHieroglyph = (arr) => {
 const sign = Date.now().toString().slice(-5);
 return arr.push(String.fromCharCode(sign));
};

export const getRandomChinese = (container, length) => {
 const hieroglyphArr = [];
 let i = 0;

 while (i < length) {
  setTimeout(genHieroglyph(hieroglyphArr), TIME);
  i++;
 }

 const chinesePromise = new Promise((res, rej) => {
  setTimeout(() => {
   if (hieroglyphArr.length < length) {
    rej(new Error('Hieroglyph error'));
   } else {
    res(hieroglyphArr.join(''));
   }
  }, TIME * length);
 })
  .then((res) => {
   const li = document.createElement('li');
   li.innerHTML = `<p>${res}</p>`;
   console.log(res);
   container.appendChild(li);
  })
  .catch((rej) => console.log(rej));

 return chinesePromise;
};
