import { API } from "./constants.js";

import { stateWookiee } from "./index.js";

export const getFilm = (film) => {
 return fetch(`${API}/films/${film}/${stateWookiee.path}`)
  .then((response) => {
   return response.json();
  })
  .catch("getFilmError");
};

export const getCharacter = (charact) => {
 return fetch(`${charact}/${stateWookiee.path}`)
  .then((response) => {
   return response.json();
  })
  .catch("getCharactersError");
};

export const getPlanets = (planetId) => {
 return fetch(`${API}/planets/${planetId}/${stateWookiee.path}`)
  .then((response) => {
   return response.json();
  })
  .catch("getPlanetsError");
};
