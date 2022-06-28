// HTML-elements

import {
 getWookieeButtonEl,
 getInfoButtonEl,
 getInfoResultEl,
 getInfoSelectEl,
 getPlanetsResultEl,
 getPlanetsBackButtonEl,
 getPlanetsNextButtonEl,
} from "./elements.js";

// Constants

import { API_WOOKIEE } from "./constants.js";

// Functions

import {
 getInfo,
 getPlanetsInfo,
 getPlanetsBack,
 getPlanetsNext,
} from "./functions.js";

// EventListeners

// 1)

export const stateWookiee = { path: "" };

getWookieeButtonEl.addEventListener("click", () => {
 if (!stateWookiee.path) return (stateWookiee.path = API_WOOKIEE);
 return (stateWookiee.path = "");
});

// 2)

getInfoButtonEl.addEventListener("click", () => {
 getInfo(getInfoResultEl, getInfoSelectEl.value);
});

// 3)

getPlanetsInfo(getPlanetsResultEl);

getPlanetsBackButtonEl.addEventListener("click", () => {
 getPlanetsBack();
});

getPlanetsNextButtonEl.addEventListener("click", () => {
 getPlanetsNext();
});
