import {
  createDataTable,
  generateRandomChar,
  calculateWordsQuantity,
  placeWords,
  generateFirstCharIndex,
  getRandomRowToPlaceWord,
  getRandomWord,
  fillTable
} from './models.js'

describe('funcao createDataTable()', () => {
  test('verifica tipo de objeto retornado', () => {
    const dataTable = createDataTable(3, 2)
    expect(typeof dataTable).toBe('object')
    expect(typeof dataTable[0]).toBe('object')
    expect(typeof dataTable[0][0]).toBe('string')
  })
  test('verifica numero de linhas e colunas', () => {
    const dataTable = createDataTable(10, 15)
    expect(dataTable.length).toBe(10)
    expect(dataTable[0].length).toBe(15)
  })
})

describe('funcao generateRandomChar()', () => {
  test('verifica tipo de objeto retornado', () => {
    expect(typeof generateRandomChar()).toBe('string')
    expect(generateRandomChar().length).toBe(1)
  })
})

describe('funcao calculateWordsQuantity()', () => {
  test('verifica se o calculo esta sendo feito corretamente', () => {
    expect(calculateWordsQuantity(10, 3)).toBe(3)
    expect(calculateWordsQuantity(20, 3)).toBe(6)
    expect(calculateWordsQuantity(20, 4)).toBe(5)
    expect(calculateWordsQuantity(20, 1)).toBe(20)
    expect(calculateWordsQuantity(15, 'pedro')).toBe(NaN)
  })
})

describe('funcao placeWords()', () => {
  test('verifica se o numero de palavras colocadas está correto', () => {
    const tableAux = [
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
      ]
    ]
    const tableWithWords = placeWords(3, tableAux)
    let rowsWithWordsCounter = 0
    for (let i = 0; i < tableWithWords.length; i++) {
      for (let j = 0; j < tableWithWords[i].length; j++) {
        if (tableWithWords[i][j] != ' ') {
          rowsWithWordsCounter++
          break
        }
      }
    }
    expect(rowsWithWordsCounter).toBe(3)
  })
  test('verifica se existem mais de uma palavra por linha', () => {})
})

describe('funcao generateFirstCharIndex()', () => {
  test('verifica se a funcao retorna um numero', () => {
    expect(typeof generateFirstCharIndex('adele', 10)).toBe('number')
  })
  test('verifica se a palavra cabe com esse index gerado', () => {
    const word = 'teste'
    const index = generateFirstCharIndex(word, 15)
    expect(index).toBeLessThanOrEqual(15 - word.length + 1)
  })
})

describe('funcao getRandomRowToPlaceWord()', () => {
  test('verifica se funcao retorna um numero', () => {
    const numRows = 30
    expect(typeof getRandomRowToPlaceWord(numRows)).toBe('number')
  })
  test('verifica se numero retornado é menor ou igual ao numero de rows', () => {
    const numRows = 14
    expect(getRandomRowToPlaceWord(numRows)).toBeLessThanOrEqual(numRows)
  })
})

describe('funcao getRandomWord()', () => {
  const wordsSample = [
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
  test('verifica se é retornado uma string', () => {
    expect(typeof getRandomWord(wordsSample)).toBe('string')
  })
  test('verifica se não retorna a mesma string mais de uma vez', () => {
    const randomWord = getRandomWord(wordsSample)
    expect(wordsSample.includes(randomWord)).toBe(false)
  })
})

describe('funcao fillTable()', () => {
  const tableWithWordsSample = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'l', 'u', 'z', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'u', 'v', 'a', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'p', 'i', 'n', 'c', 'e', 'l', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ]
  test('verifica se é retornado um objeto', () => {
    expect(typeof fillTable(tableWithWordsSample)).toBe('object')
  })
  test('verifica se todos os espaços estão preenchidos', () => {
    const dataTable = fillTable(tableWithWordsSample)
    let allSpacesFilled = true
    for (let i = 0; i < dataTable.length; i++) {
      for (let j = 0; j < dataTable[i].length; j++) {
        if (dataTable[i][j] == ' ') {
          allSpacesFilled = false
        }
      }
    }
    expect(allSpacesFilled).toBe(true)
  })
})
