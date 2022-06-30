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
 handleStartWookiee,
 handleGetWookiee,
 handleBackWookiee,
 handleNextWookiee,
 getInfo,
 getPlanetsInfo,
 getPlanetsBack,
 getPlanetsNext,
} from "./functions.js";

// EventListeners

// 1)

export const stateWookiee = { path: "" };

getWookieeButtonEl.addEventListener("click", () => {
 handleStartWookiee(getWookieeButtonEl);
 handleGetWookiee(getInfoButtonEl);
 handleBackWookiee(getPlanetsBackButtonEl);
 handleNextWookiee(getPlanetsNextButtonEl);
 if (!stateWookiee.path) return (stateWookiee.path = API_WOOKIEE);
 return (stateWookiee.path = "");
});

// 2)

getInfoButtonEl.addEventListener("click", () => {
 getInfoButtonEl.disabled = true;
 getInfo(getInfoResultEl, getInfoSelectEl.value).finally(
  setTimeout(() => (getInfoButtonEl.disabled = false), 5000),
 );
});

// 3)

getPlanetsInfo(getPlanetsResultEl);

getPlanetsBackButtonEl.addEventListener("click", () => {
 getPlanetsBack();
});

getPlanetsNextButtonEl.addEventListener("click", () => {
 getPlanetsNext();
});
