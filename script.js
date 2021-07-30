const display = document.querySelector('.display');

let current = 0;
let state = {
    operand: FIRST,
    operator: null,
    append: false,
};

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        // Logic for inputting new number
        if(!state.append) {
            display.innerText = e.target.innerText;
            state.append = true;
        }
        else if(display.innerText.length < MAX_DISPLAY_LENGTH)
            display.innerText += e.target.innerText;
    })
});

const addBtn = document.getElementById('+');
addBtn.addEventListener('click', e => { 
    if(isNaN(parseInt(display.innerText)) || state.operand === SECOND) {
        state.operator = '+';
    }
    // If you click the operator button, means you're done inputting first operand
    // We save the value on display and the operator clicked
    // We then await the second operand
    else if(state.operand === FIRST) {
        current = display.innerText;
        state.operator = '+';
        state.operand = SECOND;
        state.append = false;
    }
});

const equalsBtn = document.getElementById('=');
equalsBtn.addEventListener('click', e => {
    if(state.operand === SECOND) {
        const result = operate(current, display.innerText, state.operator);
        if(isOverflowing(result)) {
            display.innerText = "ERR: Result too big";
            resetState(state);
            current = 0;
        } else {
            display.innerText = result;
            resetState(state);
        }
    }
});

const reset = document.querySelector('.reset');
reset.addEventListener('click', e => {
    resetState(state);
    current = 0;
});