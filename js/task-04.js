const buttonMin = document.querySelector("#counter").firstElementChild;
console.log(buttonMin);
const count = document.getElementById("value");
const buttonPlus = document.querySelector("#counter").lastElementChild;
console.log(buttonPlus);

buttonMin.addEventListener("click", onClickM);
buttonPlus.addEventListener("click", onClickP);
let counterValue = 0;

function onClickM() {
  counterValue -= 1;
  count.textContent = counterValue;
}
function onClickP() {
  counterValue += 1;

  count.textContent = counterValue;
}
