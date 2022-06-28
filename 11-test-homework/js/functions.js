// Elements

import { getPlanetsPageResultEl, getPlanetsResultEl } from "./elements.js";

// Constants

import { ELEMENT } from "./constants.js";

// Fetches

import { getFilm, getCharacter, getPlanets } from "./fetches.js";

// Functions

// 1)

const addCard = (character, resultEl) => {
 const card = document.createElement(ELEMENT);
 card.innerHTML = `
    <div class="character-card">
      <div class="character-card_image-container">
        <img class="character-card_image" src="./images/character/${
         character.name
        }.jpg" alt="${character.name}" />
      </div>
      <div class="character-card_box">
        ${
         character.gender === "male"
          ? '<img class="character-card_gender" src="./images/male.svg" alt="male" />'
          : ""
        }
        ${
         character.gender === "female"
          ? '<img class="character-card_gender" src="./images/female.svg" alt="female" />'
          : ""
        }
        ${
         character.gender === "n/a"
          ? '<img class="character-card_gender" src="./images/cog.svg" alt="droid" />'
          : ""
        }
        <span class="character-card_name">${character.name}</span>
     </div>
     <p class="character-card_birth">Birth year: ${character.birth_year}</p>
    </div>
   `;
 resultEl.appendChild(card);
};

export const getInfo = async (resultEl, film) => {
 const { characters } = await getFilm(film);
 resultEl.innerHTML = "";
 characters.forEach((charact) =>
  getCharacter(charact).then((character) => {
   addCard(character, resultEl);
  }),
 );
};

// 2)

let numberPlanet = 1;

const getImagePlanet = (planet) => {
 if (planet.climate.includes("arid")) {
  planet.src = "./images/planets/arid planet.jpg";
  return planet;
 }
 if (planet.climate.includes("tropical")) {
  planet.src = "./images/planets/tropical planet.jpg";
  return planet;
 }
 if (planet.climate.includes("frozen") || planet.climate.includes("frigid")) {
  planet.src = "./images/planets/frigid planet.jpg";
  return planet;
 }
 if (planet.climate.includes("murky")) {
  planet.src = "./images/planets/murky planet.jpg";
  return planet;
 }
 if (planet.climate.includes("hot")) {
  planet.src = "./images/planets/hot planet.jpg";
  return planet;
 }
 if (planet.climate.includes("polluted")) {
  planet.src = "./images/planets/polluted planet.jpg";
  return planet;
 }
 planet.src = "./images/planets/temperate planet.jpg";
 return planet;
};

const addPlanet = (planet, resultEl) => {
 const card = document.createElement(ELEMENT);
 card.className = "getPlanets-result_container";
 card.innerHTML = `
    <div class="getPlanets-result_image-container">
       <img
        class="getPlanets-result_image"
        src="${planet.src}"
        alt="${planet.name}"
       />
      </div>
      <div class="getPlanets-result_info">
       <h3 class="getPlanets-result_info-name">${planet.name}</h3>
       <p>Climate: ${planet.climate}</p>
       <p>Terrain: ${planet.terrain}</p>
       <p>Population: ${planet.population} people</p>
      </div>
   `;
 resultEl.appendChild(card);
};

export const getPlanetsInfo = async (resultEl) => {
 const planet = await getPlanets(numberPlanet);
 resultEl.innerHTML = "";
 addPlanet(getImagePlanet(planet), resultEl);
};

export const getPlanetsBack = async () => {
 if (numberPlanet === 1) return;
 numberPlanet--;
 getPlanetsInfo(getPlanetsResultEl);
 getPlanetsPageResultEl.textContent = numberPlanet;
};

export const getPlanetsNext = async () => {
 numberPlanet++;
 getPlanetsInfo(getPlanetsResultEl);
 getPlanetsPageResultEl.textContent = numberPlanet;
};

getPlanetsPageResultEl.textContent = numberPlanet;
