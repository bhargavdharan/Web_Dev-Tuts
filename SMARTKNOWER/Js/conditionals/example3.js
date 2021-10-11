const select = document.querySelector('select');
const body = document.querySelector('html');

document.body.style.padding = '10px';

function update(bgColor, textColor) {
    body.style.background = bgColor;
    body.style.color = textColor;
}

select.onchange = function () {
    (select.value === 'black') ? update('black', 'white') : update('white', 'black');
}

