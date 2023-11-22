import { createDataTable } from './models.js'
import { createHtmlTable } from './views.js'

document.getElementById('btn').addEventListener('click', revealTable)

const words = [
  'palheta',
  'uva',
  'musica',
  'palco',
  'rua',
  'casa',
  'pincel',
  'carro',
  'caixa',
  'foto',
  'flor',
  'luz'
]

function revealTable() {
  const numRows = document.getElementById('num_rows').value
  const numCols = document.getElementById('num_cols').value
  const wordsQuantity = calculateWordsQuantity(numRows)
  const wordsToPlace = []
  const availableWordsList = [...words]
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
  const words = document.getElementById('words')
  const wordsList = words.childNodes
  for (let i=0; i < wordsList.length; i++) {
    if (wordSelected == wordsList[i].textContent) {
      wordsList[i].style.textDecoration = "line-through"
    }
  }
}
