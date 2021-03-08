const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const randomColor = newRandomColor();
    document.body.style.backgroundColor = randomColor;
    h1.innerText = `sua cor é: ${randomColor}`;
})

const newRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return rgbToHex(r, g, b);
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

