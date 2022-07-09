// HTML-elements

import {
 getRandomChineseButtonEl,
 getRandomChineseInputEl,
 getRandomChineseResultEl,
} from "./elements.js";

// Constants

import { TIME, CLASS_START } from "./constants.js";

// Functions

import { handleStartFunc, getRandomChinese } from "./functions.js";

// EventListeners

// 1)

let timer = null;

getRandomChineseButtonEl.addEventListener("click", () => {
 const length = Number(getRandomChineseInputEl.value);
 if (!length)
  return (getRandomChineseResultEl.textContent = "Потрібно ввести довжину");
 if (length < 0)
  return (getRandomChineseResultEl.textContent =
   "Довжина не може бути менше 0");

 handleStartFunc(getRandomChineseButtonEl);

 if (getRandomChineseButtonEl.className !== CLASS_START)
  return clearTimeout(timer);
 getRandomChineseResultEl.textContent = "";

 timer = setInterval(
  () =>
   getRandomChinese(length)
    .then((res) => {
     const li = document.createElement("li");
     li.innerHTML = `<p>${res}</p>`;
     console.log(res);
     getRandomChineseResultEl.appendChild(li);
    })
    .catch((rej) => console.log(rej)),

  TIME * length,
 );
});
