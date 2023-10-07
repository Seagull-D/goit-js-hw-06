const moveLine = document.querySelector("#font-size-control");
console.log(moveLine);

const text = document.querySelector("#text");
console.log(text);

moveLine.addEventListener("input", moveOnLine);

function moveOnLine(evt) {
  text.style.fontSize = evt.currentTarget.value + "px";
}
