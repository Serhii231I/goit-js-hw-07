function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createInput = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

let sizes = 30;
createButton.addEventListener("click", createMarkup)

destroyButton.addEventListener("click", () => {
  createInput.value = "";
  clearFunction();
})

function clearFunction() {
  boxesContainer.innerHTML = "";
  sizes = 30;
}

function createMarkup(event) {
    event.preventDefault();
  if (createInput.value < 1 || createInput.value > 100) {
    return;
  }
  
  clearFunction();
  createBoxes(createInput.value);
  createInput.value = "";
  
  function createBoxes(amount) {
    const boxes = [];

    for (let i = 0; i < amount; i++){
      const box = document.createElement("div");
      box.style.width = `${sizes}px`
      box.style.height = `${sizes}px`
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box)
      sizes += 10;
    }
    boxesContainer.append(...boxes);  
  }
}