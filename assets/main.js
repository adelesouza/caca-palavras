const words = [
  ['p', 'a', 'l', 'h', 'e', 't', 'a'],
  ['u', 'v', 'a'],
  ['m', 'u', 's', 'i', 'c', 'a'],
  ['p', 'a', 'l', 'c', 'o'],
  ['r', 'u', 'a'],
  ['c', 'a', 's', 'a'],
  ['p', 'i', 'n', 'c', 'e', 'l'],
  ['c', 'a', 'r', 'r', 'o'],
  ['c', 'a', 'i', 'x', 'a'],
  ['f', 'o', 't', 'o'],
  ['f', 'l', 'o', 'r'],
  ['l', 'u', 'z']
]

// const words = ['palheta', 'uva', 'musica']

const btn = document.getElementById('btn')

function initWordSearch() {
  var L = document.getElementById('num_rows').value //10
  var C = document.getElementById('num_cols').value //15

  document.querySelector('.caca-palavras').style.display = 'flex'

  document.getElementById('numbers').innerHTML =
    '<h2 id="L">' + L + '</h2><h2>x</h2><h2 id="C">' + C + '</h2>'

  createWordSearch(L, C)
}

btn.addEventListener('click', initWordSearch)

function createWordSearch(L, C) {
  const wordSearchContainer = document.getElementById('table')
  while (wordSearchContainer.firstChild) {
    wordSearchContainer.removeChild(wordSearchContainer.firstChild)
  }
  const table = document.createElement('table')
  wordSearchContainer.appendChild(table)

  for (i = 0; i < L; i++) {
    var tr = createTr(table)

    for (j = 0; j < C; j++) {
      createTd(tr)
    }
  }

  var wordsQuantity = calculateWordsQuantity(L)

  placeWords(wordsQuantity)
}

function createTr(table) {
  const tr = document.createElement('tr')
  table.appendChild(tr)
  return tr
}

function createTd(tr) {
  const td = document.createElement('td')
  var char = document.createTextNode(generateRandomChar())
  td.appendChild(char)
  tr.appendChild(td)
  return td
}

function placeWords(wordsQuantity) {
  const rowsWithWords = []
  var i = 0 //contador de palavras colocadas
  while (i < wordsQuantity) {
    rowNumber = generateRowNumber() //gera aleatoriamente a linha em que a palavra vai ser colocada
    if (!rowsWithWords.includes(rowNumber)) {
      placeWordInline(rowNumber)
      rowsWithWords.push(rowNumber)
      i++
    }
  }
}

function generateRowNumber() {
  var numbersOfRows = document.getElementById('num_rows').value
  var randomRowNumber = Math.floor(Math.random() * numbersOfRows)

  return randomRowNumber
}

function placeWordInline(rowNumber) {
  const wordsCopy = [...words]
  var word = getRandomWord(wordsCopy)
  var firstCharIndex = generateFirstCharIndex(word)
  var lastCharIndex = firstCharIndex + word.length
  var rowsList = table.getElementsByTagName('tr')
  for (i = 0; i < rowsList.length; i++) {
    if (rowNumber == i) {
      var currentRow = rowsList[i]
      var wordIndexCounter = 0
      for (j = firstCharIndex; j < lastCharIndex; j++) {
        currentRow.cells[j].textContent = word[wordIndexCounter]
        wordIndexCounter++
      }
    }
  }
}

function calculateWordsQuantity(numRows, rowsPerWord=3) {
  return Math.round(numRows / rowsPerWord)
}

function generateRandomChar(characters='ABCDEFLMNNOPQRSTUVWXYZ') {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

function getRandomWord(words) {
  const randomWordIndex = Math.floor(Math.random() * words.length)
  return words.splice(randomWordIndex, 1)[0]
}

function generateFirstCharIndex(word) {
  var numberOfColumnsInRow = document.getElementById('num_cols').value
  var wordLength = word.length
  var ultimoFirstIndexPermitido = numberOfColumnsInRow - wordLength + 1

  var result = Math.floor(Math.random() * ultimoFirstIndexPermitido)

  return result
}
