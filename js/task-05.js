const inputText = document.querySelector("#name-input");
// console.log(inputText);
const outName = document.querySelector("#name-output");
// console.log(outName);
inputText.addEventListener("input", userName);

function userName(event) {
  if (event.currentTarget.value.length > 0) {
    outName.textContent = event.currentTarget.value;
  } else {
    outName.textContent = "Anonymous";
  }
}
