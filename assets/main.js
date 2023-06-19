const btn = document.getElementById('btn')

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

btn.addEventListener('click', () => {
  var L = document.getElementById('num_rows').value //10
  var C = document.getElementById('num_cols').value //15

  document.querySelector('.caca-palavras').style.display = 'flex'

  document.getElementById('numbers').innerHTML =
    '<h2 id="L">' + L + '</h2><h2>x</h2><h2 id="C">' + C + '</h2>'

  createCrossword(L, C)
})

function createCrossword(L, C) {
  const table = document.createElement('table')
  document.getElementById('table').appendChild(table)

  //criacao da estrutura de dados tabela:
  for (i = 0; i < L; i++) {
    var tr = createTr(table)

    for (j = 0; j < C; j++) {
      createTd(tr)
      //esse método, entre outras funções, preenche a tabela com caracteres aleatórios
    }
  }

  var wordsQuantity = calculateWordsQuantity(L) //esse método calcula o número de palavras que vão ser colocadas, baseado no número de linhas da tabela

  //colocação das palavras:
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
  var word = generateRandomWord(words) //esse método gera uma palavra aleatória dentro da lista de palavras
  var firstIndex = generateFirstIndex(word) //esse método gera o index dentro do row onde a palavra vai iniciar
  var lastIndex = firstIndex + word.length //essa variável armazena o index onde a última letra da palavra vai ficar

  var rowsList = table.getElementsByTagName('tr')

  for (i = 0; i < rowsList.length; i++) {
    //esse loop percorre todas as linhas da tabela
    if (rowNumber == i) {
      var row = rowsList[i] //essa variavel armazena a linha  atual
      var wordIndexCounter = 0 //contador do index da palavra
      for (j = firstIndex; j < lastIndex; j++) {
        row.cells[j].textContent = word[wordIndexCounter] //muda o Text Content da celula atual para a letra do index atual da palavra
        wordIndexCounter++
      }
    }
  }
}

function calculateWordsQuantity(L) {
  var wordsQuantity = (L - (L % 3)) / 3
  return wordsQuantity
}

function generateRandomChar() {
  const characters = 'ABCDEFLMNNOPQRSTUVWXYZ'

  var charGenerated = ''
  charGenerated = characters.charAt(
    Math.floor(Math.random() * characters.length)
  )

  return charGenerated
}

function generateRandomWord(words) {
  var wordGenerated = words[Math.floor(Math.random() * words.length)]
  words.splice(words.indexOf(wordGenerated), 1)
  return wordGenerated
}

function generateFirstIndex(word) {
  var numberOfColumnsInRow = document.getElementById('num_cols').value
  var wordLength = word.length
  var ultimoFirstIndexPermitido = numberOfColumnsInRow - wordLength + 1

  var result = Math.floor(Math.random() * ultimoFirstIndexPermitido)

  return result
}
