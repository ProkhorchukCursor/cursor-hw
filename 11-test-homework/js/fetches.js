// Elements

import { getPlanetsPageResultEl } from "./elements.js";

// Constants

import { API } from "./constants.js";

// State

import { stateWookiee } from "./index.js";

// Functions

import { loaderToggle, numberPlanet } from "./functions.js";

// Fetches

export const getFilm = (film) => {
 loaderToggle();
 return fetch(`${API}/films/${film}`)
  .then((response) => {
   return response.json();
  })
  .catch(() => console.log("getFilmError"))
  .finally(() => loaderToggle());
};

export const getCharacter = (charact) => {
 loaderToggle();
 return fetch(`${charact}/${stateWookiee.path}`)
  .then((response) => {
   return response.json();
  })
  .catch(() => console.log("getCharactersError"))
  .finally(() => loaderToggle());
};

export const getPlanets = (planetId) => {
 loaderToggle();
 return fetch(`${API}/planets/${planetId}/${stateWookiee.path}`)
  .then((response) => {
   getPlanetsPageResultEl.textContent = numberPlanet;
   return response.json();
  })
  .catch(() => console.log("getPlanetsError"))
  .finally(() => loaderToggle());
};
