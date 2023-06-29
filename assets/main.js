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

  for (i = 0; i < numRows; i++) {
    var tr = createTr(table)
    for (j = 0; j < numCols; j++) {
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
    rowNumber = getRandomRowToPlaceWord()
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
  for (i = 0; i < rowsList.length; i++) {
    if (rowNumber == i) {
      var currentRow = rowsList[i]
      var wordIndexCounter = 0
      for (j = firstCharIndex; j < lastCharIndex; j++) {
        currentRow.cells[j].textContent = wordSplited[wordIndexCounter]
        wordIndexCounter++
      }
    }
  }
}

function calculateWordsQuantity(numRows, rowsPerWord = 3) {
  return Math.round(numRows / rowsPerWord)
}

function generateRandomChar(characters = 'ABCDEFLMNNOPQRSTUVWXYZ') {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

function getRandomWord(wordsList) {
  const randomWordIndex = Math.floor(Math.random() * wordsList.length)
  return wordsList.splice(randomWordIndex, 1)[0]
}

function generateFirstCharIndex(word) {
  var numberOfColumnsInRow = document.getElementById('num_cols').value
  var wordLength = word.length
  var ultimoFirstIndexPermitido = numberOfColumnsInRow - wordLength + 1
  return Math.floor(Math.random() * ultimoFirstIndexPermitido)
}
