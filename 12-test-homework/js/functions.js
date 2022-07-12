// HTML-elements

import { fontGeneratorResultEl, bodyEl } from "./elements.js";

// Constants

import { FONT_SIZE } from "./constants.js";

// Functions

// 1)

function* createIdGenerator() {
 let id = 1;
 while (true) {
  yield id++;
 }
}

export const idGenerator = createIdGenerator();

// 2)

export const fontCounter = (command) => {
 const fontSize = fontGenerator.next(command).value;
 bodyEl.style.fontSize = `${fontSize}px`;
 fontGeneratorResultEl.textContent = `${fontSize}px`;
};

function* newFontGenerator(fontSize) {
 let counter;
 while (true) {
  counter = yield fontSize;
  if (counter === "up") {
   fontSize += 2;
  }
  if (counter === "down") {
   fontSize -= 2;
  }
 }
}

const fontGenerator = newFontGenerator(FONT_SIZE);
