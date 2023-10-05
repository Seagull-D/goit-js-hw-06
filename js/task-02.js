const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((iteam) => {
  console.log(iteam);
  const createIteam = document.createElement("li");
  createIteam.textContent = iteam;
  list.append(createIteam);
});
// console.log(document);
