export function createDataTable(numRows, numCols, wordsToPlace) {
  let tableWithoutWords = []
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numCols; j++) {
      row.push(' ')
    }
    tableWithoutWords.push(row)
  }
  const wordsQuantity = calculateWordsQuantity(numRows, 3)
  const tableWithWords = placeWords(
    wordsToPlace,
    wordsQuantity,
    tableWithoutWords
  )
  const dataTable = fillTable(tableWithWords)
  return dataTable
}

export function generateRandomChar(characters = 'ABCDEFLMNNOPQRSTUVWXYZ') {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

export function calculateWordsQuantity(numRows, rowsPerWord = 3) {
  return Math.floor(numRows / rowsPerWord)
}

export function placeWords(wordsToPlace, wordsQuantity, tableToPlaceWords) {
  let numRows = tableToPlaceWords.length
  let numCols = tableToPlaceWords[0].length
  //const availableWordsList = [...words]
  const rowsWithWords = []
  let wordsPlaced = 0
  let j = 0
  while (wordsPlaced < wordsQuantity) {
    const rowToPlaceWord = getRandomRowToPlaceWord(numRows)
    if (!rowsWithWords.includes(rowToPlaceWord)) {
      let word = wordsToPlace[j] //getRandomWord(availableWordsList)
      j++
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
