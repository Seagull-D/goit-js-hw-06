const iteams = document.querySelectorAll(".item");

const iteamArr = [...iteams];
console.log(`Number of categories: ${iteamArr.length}`);

iteamArr.forEach((iteam) => {
  console.log(`Category: ${iteam.firstElementChild.textContent}`);
  console.log(`Elements: ${iteam.lastElementChild.children.length}`);
});
