// Elements

import { getPlanetsPageResultEl, getPlanetsResultEl } from "./elements.js";

// Constants

import {
 ELEMENT,
 PLANETS_CLIMATE,
 PLANETS_CLIMATE_WOOKIEE,
 GENDER_WOOKIEE,
} from "./constants.js";

// States

import { stateWookiee } from "./index.js";

// Fetches

import { getFilm, getCharacter, getPlanets } from "./fetches.js";

// Functions

// 1)

const getPlanetWookiee = (planet) => {
 return {
  name: planet.whrascwo,
  climate: planet.oaanahscraaowo,
  population: planet.akooakhuanraaoahoowh,
  terrain: planet.aoworcrcraahwh,
 };
};

const getGenderWookiee = (gender) => {
 GENDER_WOOKIEE.forEach((gen) => {
  if (gen.rrwowhwaworc === gender) return (gender = gen.gender);
 });
 return gender;
};

const getCharacterWookiee = (character) => {
 return {
  name: character.whrascwo,
  gender: getGenderWookiee(character.rrwowhwaworc),
  birth_year: character.rhahrcaoac_roworarc,
 };
};

// 2)

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
   if (stateWookiee.path) {
    addCard(getCharacterWookiee(character), resultEl);
   } else {
    addCard(character, resultEl);
   }
  }),
 );
};

// 3)

let numberPlanet = 1;

const getImagePlanet = (planet) => {
 planet.src = "./images/planets/temperate planet.jpg";

 if (stateWookiee.path) {
  PLANETS_CLIMATE_WOOKIEE.forEach((climate, i) => {
   if (planet.climate.includes(climate)) {
    planet.src = `./images/planets/${PLANETS_CLIMATE[i]} planet.jpg`;
    return planet;
   }
  });
 } else {
  PLANETS_CLIMATE.forEach((climate) => {
   if (planet.climate.includes(climate)) {
    planet.src = `./images/planets/${climate} planet.jpg`;
    return planet;
   }
  });
 }
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
       <p>Population: ${planet.population}</p>
      </div>
   `;
 resultEl.appendChild(card);
};

export const getPlanetsInfo = async (resultEl) => {
 let planet = await getPlanets(numberPlanet);
 if (stateWookiee.path) planet = getPlanetWookiee(planet);
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
