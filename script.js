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

const operatorBtns = document.querySelectorAll('.operator')
operatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(isNaN(parseInt(display.innerText)) || state.operand === SECOND) {
            state.operator = e.target.id;
        }
        // If you click the operator button, means you're done inputting first operand
        // We save the value on display and the operator clicked
        // We then await the second operand
        else if(state.operand === FIRST) {
            current = display.innerText;
            state.operator = e.target.id;
            state.operand = SECOND;
            state.append = false;
        }
    });
});

// Executes the operation and displays it
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

// Clears the display and resets the state of the calculator
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', e => {
    display.innerText = 0;
    resetState(state);
    current = 0;
});


// Remove the last number in the display
// const deleteBtn = document.getElementById('delete');
// deleteBtn.addEventListener('click', e => {
//     if(display.innerText.length === 1) {
//         display.innerText = 0;
//         append = false;
//     }
//     else {
//         display.innerText = display.innerText.slice(0, -1);
//     }
// });