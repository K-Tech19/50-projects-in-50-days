const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const bgChange = document.querySelector('body')

btn.addEventListener('click', ()=> {
  search.classList.toggle('active')
  input.focus()
  document.body.style.backgroundColor = generateRandomColor()
})

function generateRandomColor(){
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}