const btn1 = document.querySelector('.btn');
btn1.addEventListener('click',function(){
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    const newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    if (yiq < 128) {
        document.body.style.color = 'white';  // Dark background, set text color to white
    } else {
        document.body.style.color = 'black';  // Light background, set text color to black
    }
})