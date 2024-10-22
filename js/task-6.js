function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input[type="number"]');
const boxesContainer = document.querySelector('#boxes');


const validateInput = input => input >= 1 && input <= 100;


const createBoxes = amount => {
  destroyBoxes();
  let width = 30;
  let height = 30;

  let boxesObjects = [];

  for (let i = 0; i < amount; i++) {
    const backgroundColor = getRandomHexColor();
    const boxDiv = `
    <div
      class="inside-box"
      style="
              width:  ${width}px;
              height: ${height}px;
              background-color: ${backgroundColor};
            ">
    </div>
    `
    boxesObjects.push(boxDiv)
    width += 10;
    height += 10;
  }

  boxesContainer.insertAdjacentHTML('beforeend', boxesObjects);
};


const destroyBoxes = () => { 
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', event => {
  const inputValue = Number(inputNumber.value);
  
  if (validateInput(inputValue)) {
    inputNumber.value = '';
    createBoxes(inputValue)
  }
  inputNumber.value = '';
})

destroyButton.addEventListener('click', event => {
  destroyBoxes()
})
