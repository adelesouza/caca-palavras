import { createDataTable } from './models.js'
import { createHtmlTable } from './views.js'

const btn = document.getElementById('btn')

function revealTable() {
  const numRows = document.getElementById('num_rows').value
  const numCols = document.getElementById('num_cols').value
  const dataTable = createDataTable(numRows, numCols)
  const table = createHtmlTable(dataTable)
  adjustFrontElements(numRows, numCols)
  appendTableToContainer(table)
}

function adjustFrontElements(numRows, numCols) {
  document.querySelector('.caca-palavras').style.display = 'flex'
  document.getElementById('numbers').innerHTML =
    '<h2 id="L">' + numRows + '</h2><h2>x</h2><h2 id="C">' + numCols + '</h2>'
}

function appendTableToContainer(table) {
  const wordSearchContainer = document.getElementById('table')
  while (wordSearchContainer.firstChild) {
    wordSearchContainer.removeChild(wordSearchContainer.firstChild)
  }
  wordSearchContainer.appendChild(table)
}

btn.addEventListener('click', revealTable)
