/* eslint-disable */

/* DEMO: show how to make FAQ collapsible */
function makeCollapsible(panelId) {
  // get button that controls the panel
  const btn = document.querySelector(`button[aria-controls=${panelId}]`);

  // get the panel
  const panel = document.querySelector(`#${panelId}`);

  // hide the panel when js load instead of in HTML directly
  // so if js fail to load, content will still be visible
  panel.classList.add('hidden'); // This is adding a class called "hidden", not playing with attribute "hidden"

  // listen for click on the button
  // This is using normal Callback 
  btn.addEventListener('click', function onClick() {
    panel.classList.toggle('hidden');
  }); 

  // This is using Anonymous Function as Callback
  // Anonymous function has no name
  // btn.addEventListener('click', function onClick() {
  //   panel.classList.toggle('hidden');
  // }); 
}

makeCollapsible('faq-0');
makeCollapsible('faq-1');
makeCollapsible('faq-2');
makeCollapsible('faq-3');
makeCollapsible('faq-4');
makeCollapsible('faq-5');
makeCollapsible('faq-6');
makeCollapsible('faq-7');

/* (Chapter 6) DEMO: allow html editor 
to add more faq in future without js change */
