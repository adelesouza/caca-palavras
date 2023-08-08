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
  adjustFrontElements(numRows, numCols, wordsToPlace)
  appendTableToContainer(table)
  console.log('teste')
}

function adjustFrontElements(numRows, numCols, wordsToPlace) {
  document.querySelector('.caca-palavras').style.display = 'flex'
  document.getElementById('numbers').innerHTML =
    '<h2 id="L">' + numRows + '</h2><h2>x</h2><h2 id="C">' + numCols + '</h2>'

  for (let i = 0; i < wordsToPlace.length; i++) {
    const words = document.getElementById('words')
    const word = document.createTextNode(wordsToPlace[i] + ' - ')
    while (words.firstChild) {
      words.removeChild(words.firstChild)
    }
    words.appendChild(word)
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
