// HTML-elements

import {
 getInfoButtonEl,
 getInfoResultEl,
 getPlanetsButtonEl,
 getPlanetsResultEl,
 getPlanetsBackButtonEl,
 getPlanetsNextButtonEl,
} from "./elements.js";

// Constants

// Functions

import {
 getInfo,
 getPlanetsInfo,
 getPlanetsBack,
 getPlanetsNext,
} from "./functions.js";

// EventListeners

// 1)

getInfoButtonEl.addEventListener("click", () => {
 getInfo(getInfoResultEl);
});

// 2)

getPlanetsButtonEl.addEventListener("click", () => {
 getPlanetsInfo(getPlanetsResultEl);
});

getPlanetsInfo(getPlanetsResultEl);

getPlanetsBackButtonEl.addEventListener("click", () => {
 getPlanetsBack();
});

getPlanetsNextButtonEl.addEventListener("click", () => {
 getPlanetsNext();
});
