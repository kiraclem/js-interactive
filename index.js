let message = document.querySelector('#message')

console.log("hello world")

let form = document.querySelector('form')



const addMovie = (evt) => {
evt.preventDefault()
let inputField = document.querySelector('input')

const movie = document.createElement('li')

const movieTitle = document.createElement('span')
movieTitle.textContent = inputField.value
movieTitle.addEventListener('click', crossOffMovie)
movie.appendChild(movieTitle)

const deleteBtn = document.createElement('button')
deleteBtn.textContent = 'X'

deleteBtn.addEventListener('click', deleteMovie)
movie.appendChild(deleteBtn)

const list = document.querySelector('ul')
list.appendChild(movie)

inputField = ''
}  


const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}


const crossOffMovie = (evt) => {
    evt.target.classList.toggle('checked')
    if (evt.target.classList.contains('checked') === true) {
        message.textContent = 'Movie Watched!'
    } else {message.textContent = 'Movie added back!'}
}

form.addEventListener('submit', addMovie)
deleteBtn.addEventListener('click', deleteMovie)

