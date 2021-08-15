function calculateTax() {
  // DEMO: perform validation

  // const errorElement = document.querySelector('#errorMsg')
  // function showError(msg)
  // {
  //   errorElement.classList.remove("hidden")
  //   errorElement.innerHTML = msg
  // }

  function showError(msg) {
    document.querySelector('#errorMsg').innerHTML = msg;
    document.querySelector('#errorAlert').classList.remove('hidden');
  }
  
  function hideError() {
    document.querySelector('#errorMsg').innerHTML = '';
    document.querySelector('#errorAlert').classList.add('hidden');
  }

  // hide previous error
  hideError()
  const salary = document.querySelector('#salary').value;
  const sideIncome = document.querySelector('#sideIncome').value;
  const taxRate = document.querySelector('#taxRate').value;

  // check salary is not empty
  if (!salary)
  {
    //console.log("empty")
    showError("Error! Salary cannot be empty")
  }

  // check salary is not negative
  if (salary < 0)
  {
    showError("Error! Salary cannot be Negative")
  }

  // check side income is not negative if provided
  if (sideIncome < 0)
  {
    showError("Error! Side Income cannot be Negative")
  }

  // check tax rate is not empty
  if (!taxRate)
  {
    showError("Error! Tax cannot be empty")
  }

  // check tax rate is not negative
  if (taxRate < 0)
  {
    showError("Error! Tax cannot be Negative")
  }

  const total = ((Number(salary) + Number(sideIncome)) * Number(taxRate)) / 100;

  document.querySelector('#result').innerHTML = total.toFixed(2);
}

document.querySelector('#calculateBtn').addEventListener('click', calculateTax);
