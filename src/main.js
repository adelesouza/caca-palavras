import { createDataTable } from './models.js'
import { createHtmlTable } from './views.js'

document.getElementById('btn').addEventListener('click', revealTable)
document.getElementById('btn-reinicia').addEventListener('click', () => {
  location.reload()
})

//global variables
let words = []
const food = []
const sports = []
const object = []
let wordsQuantity = 0
let wordsFounded = []

getWords()

function getWords() {
  axios
  .get('http://localhost:3030/palavra/Comida')
  .then(function (response) {
    let responser = response.data
    for (let i = 0; i < responser.length; i++) {
      food.push(responser[i].Palavra)
    }
  })
  .catch(function (err) {
      console.log(err.message)
  })

  axios
  .get('http://localhost:3030/palavra/Esporte')
  .then(function (response) {
    let responser = response.data
    for (let i = 0; i < responser.length; i++) {
      sports.push(responser[i].Palavra)
    }
  })
  .catch(function (err) {
      console.log(err.message)
  })

  axios
  .get('http://localhost:3030/palavra/Objetos')
  .then(function (response) {
    let responser = response.data
    for (let i = 0; i < responser.length; i++) {
      object.push(responser[i].Palavra)
    }
  })
  .catch(function (err) {
      console.log(err.message)
  })
}

function revealTable() {
  const numRows = document.getElementById('num_rows').value
  const numCols = document.getElementById('num_cols').value
  wordsQuantity = calculateWordsQuantity(numRows)
  const wordsToPlace = []

  const category = document.getElementById('category').value
  if (category == "comida") {
    words = [...food]
  }  if (category == "objeto") {
    words = [...object]
  }  if (category == "esporte") {
    words = [...sports]
  }

  let availableWordsList = [...words]
  while (wordsToPlace.length < wordsQuantity) {
    let word = getRandomWord(availableWordsList)
    wordsToPlace.push(word)
  }
  const dataTable = createDataTable(numRows, numCols, wordsToPlace)
  const table = createHtmlTable(dataTable)
  adjustFrontElements(numRows, numCols)
  createWordsBoard(wordsToPlace)
  appendTableToContainer(table)
  initializeGame()
}

function adjustFrontElements(numRows, numCols) {
  document.querySelector('.caca-palavras').style.display = 'flex'
  document.getElementById('numbers').innerHTML =
    '<h2 id="L">' + numRows + '</h2><h2>x</h2><h2 id="C">' + numCols + '</h2>'
}

function createWordsBoard(wordsToPlace) {
  const words = document.getElementById('words')
  while (words.firstChild) {
    words.removeChild(words.firstChild)
  }
  for (let i = 0; i < wordsToPlace.length; i++) {
    if (i == wordsToPlace.length - 1) {
      const h4 = document.createElement('h4')
      h4.textContent = wordsToPlace[i]
      words.appendChild(h4)
    } else {
      const h4 = document.createElement('h4')
      const traco = document.createElement('h4')
      h4.textContent = wordsToPlace[i]
      traco.textContent  = " - "
      words.appendChild(h4)
      words.appendChild(traco)
    }
  }
}

function appendTableToContainer(table) {
  const wordSearchContainer = document.getElementById('table')
  while (wordSearchContainer.firstChild) {
    wordSearchContainer.removeChild(wordSearchContainer.firstChild)
  }
  wordSearchContainer.appendChild(table)
}

function getRandomWord(availableWordsList) {
  const randomWordIndex = Math.floor(Math.random() * availableWordsList.length)
  return availableWordsList.splice(randomWordIndex, 1)[0]
}

export function calculateWordsQuantity(numRows, rowsPerWord = 3) {
  return Math.floor(numRows / rowsPerWord)
}

function initializeGame() {
  const letters = document.getElementsByTagName('button')
  for (let i = 1; i < letters.length; i++) {
    letters[i].addEventListener('click', function () {
      selectLetter(letters[i])
    })
  }
}

function selectLetter(button) {
  button.classList.toggle('selected')
  checkSelecteds()
}

function checkSelecteds() {
  const letters = document.getElementsByTagName('button')
  let wordSelected = []
  for (let i = 1; i < letters.length; i++) {
    if (letters[i].classList.contains('selected')) {
      wordSelected.push(letters[i].textContent)
      for (let j=0; j < words.length; j++) {
        if (wordSelected.join('') == words[j]) {
          crossWordOff(wordSelected.join(''))
          wordSelected = []
        }
      }
    }
  }
}

function crossWordOff(wordSelected) {
  const wordsCointainer = document.getElementById('words')
  const wordsList = wordsCointainer.childNodes

  for (let i=0; i < wordsList.length; i++) {
    if (wordSelected == wordsList[i].textContent) {
      wordsList[i].style.textDecoration = "line-through"
    }
  }

  if (! wordsFounded.includes(wordSelected)) {
    wordsFounded.push(wordSelected)
  }

  if (wordsFounded.length >= wordsQuantity) {
    let confettiSettings = { target: 'my-canvas' };
    let confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    document.querySelector('.vitoria').style.display = 'block'
  }
}
