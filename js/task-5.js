function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonColorChange = document.querySelector('button.change-color');
const bodySection = document.querySelector('body');
const colorTextElement = document.querySelector('span.color');

buttonColorChange.addEventListener('click', event => {
  const colorHexValue = getRandomHexColor();
  bodySection.style.backgroundColor = colorHexValue;
  colorTextElement.textContent = colorHexValue;
})