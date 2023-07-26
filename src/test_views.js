import { createHtmlTable } from './views.js'

describe('Funçao createHtmlTable()', () => {
  const dataTableSample = [
    ['F', 'c', 'a', 'i', 'x', 'a', 'O', 'C', 'C', 'F', 'T', 'D', 'R', 'V', 'L'],
    ['A', 'T', 'Y', 'O', 'V', 'B', 'E', 'Q', 'L', 'E', 'c', 'a', 's', 'a', 'P'],
    ['Q', 'O', 'E', 'L', 'E', 'W', 'C', 'X', 'B', 'E', 'W', 'N', 'W', 'S', 'B'],
    ['E', 'T', 'U', 'C', 'U', 'F', 'F', 'E', 'T', 'U', 'T', 'O', 'Z', 'L', 'O'],
    ['F', 'B', 'Y', 'T', 'P', 'N', 'T', 'F', 'D', 'F', 'U', 'A', 'W', 'B', 'Z'],
    ['Q', 'E', 'Y', 'R', 'N', 'V', 'R', 'U', 'N', 'C', 'V', 'C', 'X', 'Q', 'U'],
    ['D', 'B', 'O', 'D', 'B', 'F', 'Q', 'U', 'p', 'a', 'l', 'h', 'e', 't', 'a'],
    ['R', 'S', 'M', 'N', 'R', 'C', 'M', 'T', 'T', 'Z', 'B', 'M', 'N', 'N', 'T'],
    ['M', 'Y', 'R', 'Z', 'Y', 'N', 'C', 'W', 'Y', 'D', 'E', 'F', 'L', 'F', 'T'],
    ['P', 'P', 'D', 'P', 'Z', 'L', 'S', 'Z', 'V', 'V', 'P', 'L', 'D', 'P', 'T']
  ]
  test('verifica se a tabela retornada é um elemento html', () => {
    expect(typeof createHtmlTable(dataTableSample)).toBe('object')
  })
  test('verifica se a tabela retornada é um elemento html do tipo table', () => {
    const table = createHtmlTable(dataTableSample)
    expect(table.nodeName).toBe('TABLE')
  })
  test('verifica se os filhos da tabela retornada são elementos html do tipo tr e td', () => {
    const table = createHtmlTable(dataTableSample)
    for (let i = 0; i < table.childElementCount; i++) {
      expect(table.children[i].nodeName).toBe('TR')
      let td = table.children[i]
      for (let j = 0; j < td.childElementCount; j++) {
        expect(td.children[j].nodeName).toBe('TD')
      }
    }
  })
  test('verifica se as letras da tabela correspondem aos da dataTable', () => {
    const table = createHtmlTable(dataTableSample)
    for (let i = 0; i < table.childElementCount; i++) {
      let td = table.children[i]
      for (let j = 0; j < td.childElementCount; j++) {
        let char = td.children[j].textContent
        let charExpected = dataTableSample[i][j]
        expect(char).toBe(charExpected)
      }
    }
  })
})
