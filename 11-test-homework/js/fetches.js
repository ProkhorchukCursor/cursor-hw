import { API } from "./constants.js";

export const getFilm = () => {
 return fetch(`${API}/films/2`)
  .then((response) => {
   return response.json();
  })
  .catch("getFilmError");
};

export const getCharacter = (charact) => {
 return fetch(`${API}/${charact}`)
  .then((response) => {
   return response.json();
  })
  .catch("getCharactersError");
};

export const getPlanets = (planetId) => {
 return fetch(`${API}/planets/${planetId}`)
  .then((response) => {
   return response.json();
  })
  .catch("getPlanetsError");
};
