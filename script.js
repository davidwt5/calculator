const MAX_DISPLAY_LENGTH = 20;
const display = document.querySelector('.display');

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(display.innerText === '0')
            display.innerText = e.target.innerText;
        else if(display.innerText.length <= MAX_DISPLAY_LENGTH)
            display.innerText += e.target.innerText;
    });
});

const reset = document.querySelector('.reset');
reset.addEventListener('click', e => {
    display.innerText = 0;
});