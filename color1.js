const presentcolorBtnElement = document.getElementById('color_code');
const newcolorBtnElement = document.getElementById('new_color');

const hexvalues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexValue() {
    const randomIndex = Math.floor(Math.random() * hexvalues.length);
    return hexvalues[randomIndex];
}

function getRandomHexString(length) {
    let hexString = '';
    for (let i = 0; i < length; i++) {
        hexString += getRandomHexValue();
    }
    return hexString;
}

newcolorBtnElement.addEventListener('click', function () {
    const randomHexColor = '#' + getRandomHexString(6);
    document.body.style.backgroundColor = randomHexColor;
    presentcolorBtnElement.textContent = randomHexColor;
});

// Enable color buttons to change background
document.querySelectorAll('.button_group button').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.style.backgroundColor;
        document.body.style.backgroundColor = color;
        presentcolorBtnElement.textContent = color;
    });
});