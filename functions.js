function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a+b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return Math.round((a/b + Number.EPSILON) * 100)/100;
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