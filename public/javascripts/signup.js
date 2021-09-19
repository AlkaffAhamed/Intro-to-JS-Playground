// use an IIFE to keep everything inside function scope
(function setupSignup()
{
  // listen for click on #signup-button
  const btnSignup = document.querySelector("#signup-button")
  btnSignup.addEventListener('click', () => 
  {
    // remove 'hidden' class on 
    const signupNotification = document.querySelector("#signup-notification")
    signupNotification.classList.remove("hidden")
    // add the 'hidden' class back after 2 second
    setTimeout(() => 
    {
      signupNotification.classList.add("hidden")
    }, 2000)
  })
}) ()

