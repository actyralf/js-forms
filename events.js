const button = document.querySelector("button");
const section = document.querySelector("section");
const list = document.querySelector("ul");

button.addEventListener("click", (event) => {
  alert("Button clicked!");
  event.stopPropagation();
});

section.addEventListener("click", () => {
  alert("Section clicked!");
});

list.addEventListener("click", (event) => {
  event.target.remove();
});
