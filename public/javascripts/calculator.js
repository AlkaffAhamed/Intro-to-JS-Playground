/* eslint-disable */

function calculateTax() {
  alert('calculateTax is called');
  // DEMO: perform the tax calculation here

  // get salary, side income, and tax rate
  const sal = Number(document.querySelector('#salary').value);
  const side = Number(document.querySelector('#sideIncome').value);
  const taxrate = Number(document.querySelector('#taxRate').value);

  // calculate tax amount
  let res = ((sal + side) * taxrate) / 100;

  // display result
  document.querySelector('#result').innerHTML = res;
}

function splitBill() {
  alert('splitBill is called');

  // TODO: get bill total and number of pax
  const bill = Number(document.querySelector('#billTotal').value);
  const pax = Number(document.querySelector('#pax').value);

  // TODO: calculate amount for each person
  let res = bill / pax;

  // TODO: display the result
  document.querySelector('#result').innerHTML = res.toFixed(2);
}
