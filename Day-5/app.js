console.log('Project Starter 🤖 🤖 🤖');

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const colorChange = document.querySelector('.circle');

colorChange.addEventListener('click', function cirRandomColor(){
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    colorChange.style.backgroundColor = randomColor
    console.log('test change here')
    // return randomColor;
})



open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));



// function generateRandomColor(){
//     const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//     return randomColor;
// }
 

// document.body.style.backgroundColor = generateRandomColor();


