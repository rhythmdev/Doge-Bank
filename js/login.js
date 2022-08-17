//** Step-1 add click event handler with the submit button */
document.getElementById("submit-btn").addEventListener("click", function () {
  //** Step-2 get email address inside the email input field */

  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  //** Step-3 clear the email field */
  emailField.value = "";

  //** Step-4 get password inside the password input field */
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  //** Step-5 clear the password filed */
  passwordField.value = "";

  //! Do not verify email and password on the client side //
  //** Step-4 verify email and password and check whether the user valid or invalid */
  if (email === "dogee@bank.com" && password === "secret") {
    window.location.href = "bank-inside.html";
  } else {
    alert("Wrong Credential! Please provide right Credential.");
  }
});
