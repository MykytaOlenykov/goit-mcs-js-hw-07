function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BASE_BOX_SIZE = 30;
const MIN_QUANTITY = 1;
const MAX_QUANTITY = 100;

const controlsRef = document.querySelector("#controls");
const inputRef = controlsRef.querySelector("input");
const createBtnRef = controlsRef.querySelector("button[data-create]");
const destroyBtnRef = controlsRef.querySelector("button[data-destroy]");

const boxesContainerRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", () => {
  const quantity = Number(inputRef.value);
  inputRef.value = "";

  if (quantity < MIN_QUANTITY || MAX_QUANTITY < quantity) {
    alert("Please enter a quantity between 1 and 100.");
    return;
  }

  createBoxes(quantity);
});

destroyBtnRef.addEventListener("click", () => {
  boxesContainerRef.innerHTML = "";
});

function createBoxes(amount) {
  let markup = "";

  for (let i = 0; i < amount; i++) {
    markup += getBoxMarkup({
      size: `${BASE_BOX_SIZE + 10 * i}px`,
      bgColor: getRandomHexColor(),
    });
  }

  console.log(markup);

  boxesContainerRef.innerHTML = markup;
}

function getBoxMarkup({ size, bgColor }) {
  return `
      <div class="box" style="width: ${size}; height: ${size}; background-color: ${bgColor}">
      </div>
    `;
}
