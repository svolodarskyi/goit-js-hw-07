const inputField = document.querySelector("input");
const namePlaceholder = document.querySelector('span#name-output')

inputField.addEventListener('keyup', event => {
    const enteredText = inputField.value.trim()
    namePlaceholder.textContent = enteredText;
})