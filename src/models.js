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
  let tableWithoutWords = []
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numCols; j++) {
      row.push(' ')
    }
    tableWithoutWords.push(row)
  }
  const wordsQuantity = calculateWordsQuantity(numRows, 3)
  const tableWithWords = placeWords(wordsQuantity, tableWithoutWords)
  const dataTable = fillTable(tableWithWords)
  return dataTable
}

export function generateRandomChar(characters = 'ABCDEFLMNNOPQRSTUVWXYZ') {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

export function calculateWordsQuantity(numRows, rowsPerWord = 3) {
  return Math.floor(numRows / rowsPerWord)
}

export function placeWords(wordsQuantity, tableToPlaceWords) {
  let numRows = tableToPlaceWords.length
  let numCols = tableToPlaceWords[0].length
  const availableWordsList = [...words]
  const rowsWithWords = []
  const wordsPlaced = 0
  while (wordsPlaced < wordsQuantity) {
    const rowToPlaceWord = getRandomRowToPlaceWord(numRows)
    if (!rowsWithWords.includes(rowToPlaceWord)) {
      let word = getRandomWord(availableWordsList)
      let wordSplited = word.split('')
      let firstCharIndex = generateFirstCharIndex(wordSplited, numCols)
      let lastCharIndex = firstCharIndex + wordSplited.length
      let wordIndexCounter = 0

      for (let i = firstCharIndex; i < lastCharIndex; i++) {
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
  const wordLength = word.length
  const ultimoFirstIndexPermitido = numCols - wordLength + 1
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
  for (let i = 0; i < tableWithWords.length; i++) {
    for (let j = 0; j < tableWithWords[i].length; j++) {
      if (tableWithWords[i][j] == ' ') {
        tableWithWords[i][j] = generateRandomChar()
      }
    }
  }
  return tableWithWords
}
