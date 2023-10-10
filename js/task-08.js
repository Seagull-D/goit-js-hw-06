const userForm = document.querySelector(".login-form");
const userData = {};
userForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const userEmail = evt.currentTarget.elements.email.value;
  const userPassword = evt.currentTarget.elements.password.value;

  if (userEmail.length > 0 && userPassword.length > 0) {
    userData.email = userEmail;
    userData.password = userPassword;
    console.log(userData);
  } else {
    alert("Are you joke?");
  }
  userForm.reset();
}
