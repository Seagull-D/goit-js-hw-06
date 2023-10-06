const userInp = document.querySelector("#validation-input");
console.log(userInp);

const border = document.querySelector("style");
console.log(border);

userInp.addEventListener("blur", ValidInput);

function ValidInput(evt) {
  console.log(evt.currentTarget.value);
  switch (evt.currentTarget.value.length) {
    case 0:
      userInp.style.borderColor = "#bdbdbd";
      break;
    case 6:
      userInp.classList.remove("invalid");
      userInp.classList.add("valid");
      break;
    default:
      userInp.classList.remove("valid");
      userInp.classList.add("invalid");
  }
}
