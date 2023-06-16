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
  ['f', 'l', 'o', 'r']
]

btn.addEventListener('click', () => {
  // var L = document.getElementById('num_rows').value
  // var C = document.getElementById('num_cols').value

  var L = 10
  var C = 15

  document.querySelector('.form').style.display = 'none'
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
  var i = 0 //contador de palavras colocadas
  var rowNumber = 0 //contador das rows (para que cada row, a partir da primeira, receba uma palavra)
  while (i < wordsQuantity) {
    //rowNumber = generateRowNumber() AINDA NAO COLOQUEI ISSO
    placeWordInline(rowNumber)
    i++
    rowNumber++
  }
}

function placeWordInline(rowNumber) {
  var word = generateRandomWord(words) //esse método gera uma palavra aleatória dentro da lista de palavras
  var firstIndex = generateFirstIndex(word) //esse método gera o index dentro do row onde a palavra vai iniciar
  var lastIndex = firstIndex + word.length //essa variável armazena o index onde a última letra da palavra vai ficar

  var linhas = table.getElementsByTagName('tr')

  for (i = 0; i < linhas.length; i++) {
    //esse loop percorre todas as linhas da tabela
    if (rowNumber == i) {
      var linha = linhas[i] //essa variavel armazena a linha  atual
      var x = 0 //contador do index da palavra
      for (j = firstIndex; j <= lastIndex; j++) {
        linha.cells[j].textContent = word[x] //muda o Text Content da celula atual para a letra do index atual da palavra
        x++
      }
    }
  }
}

function calculateWordsQuantity(L) {
  var result = L - (L % 3) / 3
  return result
}

function generateRandomChar() {
  const characters = 'ABCDEFLMNNOPQRSTUVWXYZ'

  var result = ''
  result = characters.charAt(Math.floor(Math.random() * characters.length))

  return result
}

function generateRandomWord(words) {
  var result = words[Math.floor(Math.random() * words.length)]
  words.splice(words.indexOf(result), 1)
  return result
}

function generateFirstIndex(word) {
  var linhas = table.getElementsByTagName('tr')
  var indexs = linhas.length
  var x = word.length
  var ultimoFirstIndexPermitido = indexs - x

  var numbers = '0'

  var i = 0
  while (i <= ultimoFirstIndexPermitido) {
    i.toString()
    numbers.concat('', i)
    i++
  }

  console.log(numbers)

  var result = numbers.charAt(Math.floor(Math.random() * numbers.length))
  return result
}
