const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const defaultValue = outputRef.textContent;

inputRef.addEventListener("input", e => {
  const value = e.target.value.trim();
  outputRef.textContent = value ? value : defaultValue;
});
