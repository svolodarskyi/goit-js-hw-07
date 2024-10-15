function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input[type="number"]');
const boxesContainer = document.querySelector('#boxes');


const validateInput = input => {
  if (input >= 1 && input <= 100) {
    return true
  }
  return false
};

const createBoxes = amount => {
  destroyBoxes();
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div")
    box.className = "inside-box";
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box)

    width += 10;
    height += 10;
  }
};


const destroyBoxes = () => { 
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', event => {
  const inputValue = inputNumber.value;
  
  if (validateInput(inputValue)) {
    inputNumber.value = '';
    createBoxes(inputValue)
  }
  inputNumber.value = '';
})

destroyButton.addEventListener('click', event => {
  destroyBoxes()
})
