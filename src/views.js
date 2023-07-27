export function createHtmlTable(dataTable) {
  const table = document.createElement('table')
  for (var i = 0; i < dataTable.length; i++) {
    const tr = document.createElement('tr')
    table.appendChild(tr)
    for (var j = 0; j < dataTable[i].length; j++) {
      const td = document.createElement('td')
      const char = document.createTextNode(dataTable[i][j])
      td.appendChild(char)
      tr.appendChild(td)
    }
  }
  return table
}
