function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
console.log(changeBtn);

changeBtn.addEventListener("click", ColorChange);
function ColorChange(evt) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}
