const display = document.getElementById('display');

function appendToCal(elementAdded) {
    display.textContent += elementAdded;
}

function clearDisplay() {
    display.textContent = "";
}

function calculateResult() {
    try {
        const result = eval(display.textContent);
        display.textContent = result;
    }
    catch (e) {
        display.textContent = 'Error'
    }
}