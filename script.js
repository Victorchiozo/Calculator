let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
   display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
    
}