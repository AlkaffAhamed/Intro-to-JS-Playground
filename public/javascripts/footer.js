/* eslint-disable */

console.log('getCurrentYear', helpers.getCurrentYear());
/* DEMO: show how to update current year */

// get the footer year element

// update the content of the year element to result of helpers.getCurrentYear


console.log('getCurrentDate', helpers.getCurrentDate());
/* EXERCISE: practice how to update current date */

// TODO: get the footer today element
const footerE1 = document.querySelector('#footer-year');
footerE1.innerHTML = helpers.getCurrentYear();

// TODO: update the content of the today element to result of helpers.getCurrentDate
const footerE2 = document.querySelector('#footer-today');
footerE2.innerHTML = helpers.getCurrentDate();
