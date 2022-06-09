// HTML-elements

import {
 getMyTaxesButtonEl,
 getMyTaxesResultEl,
 getMyTaxesInputCountryEl,
 getMyTaxesInputSalaryEl,
 getMiddleTaxesButtonEl,
 getMiddleTaxesResultEl,
 getMiddleTaxesInputEl,
 getTotalTaxesButtonEl,
 getTotalTaxesResultEl,
 getTotalTaxesInputEl,
 getMySalaryButtonEl,
 getMySalaryInputEl,
} from './elements.js';

// Functions

import {
 getMyTaxes,
 findCountry,
 getMiddleTaxes,
 getTotalTaxes,
 handleStartFunc,
 getMySalary,
} from './functions.js';

// EventListeners

// 1)

getMyTaxesButtonEl.addEventListener(
 'click',
 () =>
  (getMyTaxesResultEl.textContent = getMyTaxes.call(
   findCountry(getMyTaxesInputCountryEl.value),
   getMyTaxesInputSalaryEl.value,
  )),
);

// 2)

getMiddleTaxesButtonEl.addEventListener(
 'click',
 () =>
  (getMiddleTaxesResultEl.textContent = getMiddleTaxes.call(
   findCountry(getMiddleTaxesInputEl.value),
  )),
);

// 3)

getTotalTaxesButtonEl.addEventListener(
 'click',
 () =>
  (getTotalTaxesResultEl.textContent = getTotalTaxes.call(
   findCountry(getTotalTaxesInputEl.value),
  )),
);

// 4)

getMySalaryButtonEl.addEventListener(
 'click',
 () => (
  handleStartFunc(), getMySalary.call(findCountry(getMySalaryInputEl.value))
 ),
);
