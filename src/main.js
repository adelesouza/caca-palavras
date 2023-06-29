import { calculateWordsQuantity, generateRandomChar, getRandomWord } from './utils.js'


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

const btn = document.getElementById('btn')

function initWordSearch() {
  var numRows = document.getElementById('num_rows').value
  var numCols = document.getElementById('num_cols').value

  document.querySelector('.caca-palavras').style.display = 'flex'

  document.getElementById('numbers').innerHTML =
    '<h2 id="L">' + numRows + '</h2><h2>x</h2><h2 id="C">' + numCols + '</h2>'

  createWordSearch(numRows, numCols)
}

btn.addEventListener('click', initWordSearch)

function createWordSearch(numRows, numCols) {
  const wordSearchContainer = document.getElementById('table')
  while (wordSearchContainer.firstChild) {
    wordSearchContainer.removeChild(wordSearchContainer.firstChild)
  }
  const table = document.createElement('table')
  wordSearchContainer.appendChild(table)

  for (let i = 0; i < numRows; i++) {
    var tr = createTr(table)
    for (let j = 0; j < numCols; j++) {
      createTd(tr)
    }
  }

  var wordsQuantity = calculateWordsQuantity(numRows)

  placeWords(wordsQuantity)
}

function createTr(table) {
  const tr = document.createElement('tr')
  return table.appendChild(tr)
}

function createTd(tr) {
  const td = document.createElement('td')
  const char = document.createTextNode(generateRandomChar())
  td.appendChild(char)
  return tr.appendChild(td)
}

function placeWords(wordsQuantity) {
  const wordsListCopy = [...words]
  const rowsWithWords = []
  var wordsPlacedCounter = 0
  while (wordsPlacedCounter < wordsQuantity) {
    const rowNumber = getRandomRowToPlaceWord()
    if (!rowsWithWords.includes(rowNumber)) {
      placeWordInline(wordsListCopy, rowNumber)
      rowsWithWords.push(rowNumber)
      wordsPlacedCounter++
    }
  }
}

function getRandomRowToPlaceWord() {
  const numbersOfRows = document.getElementById('num_rows').value
  return Math.floor(Math.random() * numbersOfRows)
}

function placeWordInline(wordsListCopy, rowNumber) {
  var word = getRandomWord(wordsListCopy)
  var wordSplited = word.split('')
  var firstCharIndex = generateFirstCharIndex(wordSplited)
  var lastCharIndex = firstCharIndex + wordSplited.length
  var rowsList = table.getElementsByTagName('tr')
  for (let i = 0; i < rowsList.length; i++) {
    if (rowNumber == i) {
      var currentRow = rowsList[i]
      var wordIndexCounter = 0
      for (let j = firstCharIndex; j < lastCharIndex; j++) {
        currentRow.cells[j].textContent = wordSplited[wordIndexCounter]
        wordIndexCounter++
      }
    }
  }
}

function generateFirstCharIndex(word) {
  var numberOfColumnsInRow = document.getElementById('num_cols').value
  var wordLength = word.length
  var ultimoFirstIndexPermitido = numberOfColumnsInRow - wordLength + 1
  return Math.floor(Math.random() * ultimoFirstIndexPermitido)
}
