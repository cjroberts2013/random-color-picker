const colors = ['red', '#f15025', 'aqua', 'rgba(133, 122, 200)'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * colors.length)
    console.log(colors[randomNumber])
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
})