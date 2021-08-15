function splitBill() {
  // TODO: clear previous error message

  const billTotal = document.querySelector('#billTotal').value;
  const pax = document.querySelector('#pax').value;
  const err = document.querySelector('#errorAlert');
  err.classList.add('hidden');

  // TODO: validate bill total is provided
  if (!billTotal) {
    err.classList.remove('hidden');
    err.innerHTML = 'Error: Required Bill total is missing';
    return;
  }

  // TODO: validate bill total is positive
  if (billTotal <= 0) {
    err.classList.remove('hidden');
    err.innerHTML = 'Error: Bill total must be positive value';
    return;
  }

  // TODO: validate num of pax is provided
  if (!pax) {
    err.classList.remove('hidden');
    err.innerHTML = 'Error: Required Pax is missing';
    return;
  }

  // TODO: validate num of pax is positive
  if (pax <= 0) {
    err.classList.remove('hidden');
    err.innerHTML = 'Error: Pax total must be positive value';
    return;
  }

  const amountPerPax = Number(billTotal) / Number(pax);

  document.querySelector('#result').innerHTML = amountPerPax.toFixed(2);
}

document.querySelector('#splitBtn').addEventListener('click', splitBill);
