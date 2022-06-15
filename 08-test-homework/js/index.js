// HTML-elements

import {
 generateBlocksButtonEl,
 generateBlocksResultResultEl,
} from './elements.js';

// Functions

import { generateBlocks, handleStartFunc } from './functions.js';

// EventListeners

// 1)

let timer = null;

generateBlocksButtonEl.addEventListener('click', () => {
 handleStartFunc(generateBlocksButtonEl);

 if (generateBlocksButtonEl.className !== 'js-start')
  return clearInterval(timer);

 generateBlocks(generateBlocksResultResultEl);
 timer = setInterval(() => generateBlocks(generateBlocksResultResultEl), 1000);
});
