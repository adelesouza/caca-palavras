export function createHtmlTable(dataTable) {
  const table = document.createElement('table')
  for (let i = 0; i < dataTable.length; i++) {
    const tr = document.createElement('tr')
    table.appendChild(tr)
    for (let j = 0; j < dataTable[i].length; j++) {
      const td = document.createElement('button')
      const char = document.createTextNode(dataTable[i][j])
      td.appendChild(char)
      tr.appendChild(td)
    }
  }
  return table
}
