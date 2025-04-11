// display the input fields
const inputField = document.getElementById('inputField');
        const displayBtn = document.getElementById('displayBtn');
        const inputDisplay = document.getElementById('inputDisplay');

        displayBtn.addEventListener('click', () => {
            const inputValue = inputField.value;
            inputDisplay.textContent = `You entered: ${inputValue}`;
        });