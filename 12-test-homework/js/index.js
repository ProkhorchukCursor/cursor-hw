// HTML-elements

import {
 getIdButtonEl,
 getIdResultEl,
 fontGeneratorDecrementButtonEl,
 fontGeneratorResultButtonEl,
 fontGeneratorIncrementButtonEl,
} from "./elements.js";

// Functions

import { idGenerator, fontCounter } from "./functions.js";

// EventListeners

// 1)

getIdButtonEl.addEventListener("click", () => {
 getIdResultEl.textContent = idGenerator.next().value;
});

// 2)

fontGeneratorDecrementButtonEl.addEventListener("click", () =>
 fontCounter("down"),
);

fontGeneratorResultButtonEl.addEventListener("click", fontCounter);

fontGeneratorIncrementButtonEl.addEventListener("click", () =>
 fontCounter("up"),
);
