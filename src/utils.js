export function calculateWordsQuantity(numRows, rowsPerWord = 3) {
  return Math.round(numRows / rowsPerWord)
}

export function generateRandomChar(characters = 'ABCDEFLMNNOPQRSTUVWXYZ') {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

export function getRandomWord(wordsList) {
  const randomWordIndex = Math.floor(Math.random() * wordsList.length)
  return wordsList.splice(randomWordIndex, 1)[0]
}
