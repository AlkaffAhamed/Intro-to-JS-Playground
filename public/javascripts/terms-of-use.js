/* EXERCISE: make each section collapsible */

/*
function makeSectionCollapsible(btnId, sectionId) {
  // TODO: get button and the section
  const btn = document.querySelector(`#${btnId}`);
  const section = document.querySelector(`#${sectionId}`);

  // TODO: hide the section
  section.classList.add('hidden');

  // TODO: listen for click event on the button
  btn.addEventListener('click', function () {
    section.classList.toggle('hidden');
  });
}

makeSectionCollapsible('toggle-btn-0', 'section-0');
makeSectionCollapsible('toggle-btn-1', 'section-1');
makeSectionCollapsible('toggle-btn-2', 'section-2');
makeSectionCollapsible('toggle-btn-3', 'section-3');

//console.log(document.querySelectorAll('aria-controls'));
*/

// My Solution didn't work
/*
//const allBtns = document.querySelectorAll('button[id*=“toggle-btn”');
const allBtns = Array.from(document.querySelectorAll('button[id*=“toggle-btn”'))

allBtns.forEach((btn) => {
  let panelId = btn.getAttribute('aria-controls');
  let panel = document.querySelector(`#${panelId}`);
  if (panel) {
    panel.classList.add('hidden');
    btn.addEventListener('click', function onButtonClick() {
      panel.classList.toggle('hidden');
    });
  }
});
*/

// MODEL ANSWER
// the following requires updating HTML to add js-accordion class to the btn
const accordionBtns = Array.from(document.querySelectorAll('.js-accordion'));

accordionBtns.forEach((btn) => {
  const panelId = btn.getAttribute('aria-controls');

  const panel = document.querySelector(`#${panelId}`);

  if (panel) {
    panel.classList.add('hidden');

    btn.addEventListener('click', () => panel.classList.toggle('hidden'));
  }
});
