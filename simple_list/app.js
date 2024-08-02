const btn = document.querySelector('.btn');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    const input = document.querySelector('.txt');
    const inputValue = input.value;
    if (inputValue.trim() !== '') {  // Ensure input is not empty
        const li = document.createElement('li');
        li.innerText = inputValue;
        const ul = document.querySelector('ul');
        ul.append(li);
        input.value = '';  // Clear the input field
    }
});

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function(e) {
    e.preventDefault();
    const ul = document.querySelector('ul');
    const lastLi = ul.lastElementChild;
    if (lastLi) {
        ul.removeChild(lastLi);
    }
});

const cng = document.querySelector('.cng');
cng.addEventListener('input', function(e) {
    const h1 = document.querySelector('h1');
    const inputValue = cng.value;  // Get value from the .cng input field
    h1.innerText = inputValue;
});
