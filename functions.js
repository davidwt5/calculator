function add(a, b) {
    return parseInt(a)+parseInt(b);
}

function subtract(a, b) {
    return parseInt(a)-parseInt(b);
}

function multiply(a, b) {
    return parseInt(a)*parseInt(b);
}

function divide(a, b) {
    const ROUND_TO_X_DECIMAL_PLACE = 2;
    const adjustment = Math.pow(10, ROUND_TO_X_DECIMAL_PLACE)
    return Math.round((parseInt(a)/parseInt(b) + Number.EPSILON) * adjustment)/adjustment;
}

function operate(a, b, operator) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function resetState(state){
    state.operand = FIRST;
    state.operator = null;
    state.append = false;
}

function isOverflowing(number){
    return (number.toString().length >= MAX_DISPLAY_LENGTH) ? true : false;
}