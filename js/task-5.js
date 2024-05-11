function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetRef = document.querySelector(".widget");
const buttonRef = widgetRef.querySelector(".change-color");
const colorSpanRef = widgetRef.querySelector(".color");

buttonRef.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  colorSpanRef.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
