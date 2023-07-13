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

export function createDataTable(numRows, numCols) {
  var tableWithoutWords = []
  for (var i = 0; i < numRows; i++) {
    const row = []
    for (var j = 0; j < numCols; j++) {
      row.push(' ')
    }
    tableWithoutWords.push(row)
  }

  var tableWithWords = placeWords(
    calculateWordsQuantity(numRows),
    tableWithoutWords,
    numCols,
    numRows
  )

  var dataTable = fillTable(tableWithWords)

  return dataTable
}

export function generateRandomChar(characters = 'ABCDEFLMNNOPQRSTUVWXYZ') {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

export function calculateWordsQuantity(numRows, rowsPerWord) {
  return Math.floor(numRows / rowsPerWord)
}

export function placeWords(wordsQuantity, tableToPlaceWords) {
  var numRows = tableToPlaceWords.length
  var numCols = tableToPlaceWords[0].length
  const availableWordsList = [...words]
  const rowsWithWords = []
  var wordsPlaced = 0
  while (wordsPlaced < wordsQuantity) {
    var rowToPlaceWord = getRandomRowToPlaceWord(numRows)
    if (!rowsWithWords.includes(rowToPlaceWord)) {
      var word = getRandomWord(availableWordsList)
      var wordSplited = word.split('')
      var firstCharIndex = generateFirstCharIndex(wordSplited, numCols)
      var lastCharIndex = firstCharIndex + wordSplited.length
      var wordIndexCounter = 0

      for (var i = firstCharIndex; i < lastCharIndex; i++) {
        tableToPlaceWords[rowToPlaceWord][i] = wordSplited[wordIndexCounter]
        wordIndexCounter++
      }
      rowsWithWords.push(rowToPlaceWord)
      wordsPlaced++
    }
  }

  return tableToPlaceWords
}

export function generateFirstCharIndex(word, numCols) {
  var wordLength = word.length
  var ultimoFirstIndexPermitido = numCols - wordLength + 1
  return Math.floor(Math.random() * ultimoFirstIndexPermitido)
}

export function getRandomRowToPlaceWord(numRows) {
  return Math.floor(Math.random() * numRows)
}

export function getRandomWord(availableWordsList) {
  const randomWordIndex = Math.floor(Math.random() * availableWordsList.length)
  return availableWordsList.splice(randomWordIndex, 1)[0]
}

export function fillTable(tableWithWords) {
  for (var i = 0; i < tableWithWords.length; i++) {
    for (var j = 0; j < tableWithWords[i].length; j++) {
      if (tableWithWords[i][j] == ' ') {
        tableWithWords[i][j] = generateRandomChar()
      }
    }
  }
  return tableWithWords
}
