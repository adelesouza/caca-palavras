var btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  var L = document.getElementById('num_rows').value
  var C = document.getElementById('num_cols').value

  document.querySelector('.form').style.display = 'none'
  document.querySelector('.caca-palavras').style.display = 'flex'

  document.getElementById('numbers').innerHTML =
    '<h2 id="L">' + L + '</h2><h2>x</h2><h2 id="C">' + C + '</h2>'

  createTable(L, C)
})

function createTable(L, C) {
  const table = document.createElement('table')
  document.getElementById('table').appendChild(table)

  for (i = 0; i < L; i++) {
    var tr = createTr(table)

    for (j = 0; j < C; j++) {
      createTd(tr)
    }
  }
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

function generateRandomChar() {
  const characters = 'ABCDEFLMNNOPQRSTUVWXYZ'

  let result = ''
  result = characters.charAt(Math.floor(Math.random() * characters.length))

  return result
}

// var l0 = ['b', 'm', 'm', 'r', 'o', 'e', 'r', 'a', 'b', 'p']
// var l1 = ['k', 'r', 'r', 'y', 'b', 'i', 'y', 'w', 'q', 'o']
// var l2 = ['h', 'm', 'o', 'r', 'a', 'n', 'g', 'o', 'e', 'e']
// var l3 = ['e', 'f', 'q', 'q', 'n', 'a', 'a', 'a', 'n', 'b']
// var l4 = ['o', 'n', 't', 'k', 'a', 'c', 'g', 'j', 'm', 'k']
// var l5 = ['b', 'l', 'o', 'd', 'n', 'v', 'a', 'u', 'a', 'e']
// var l6 = ['n', 'c', 'a', 'm', 'a', 'x', 'b', 't', 'c', 'a']
// var l7 = ['e', 'j', 'j', 'w', 'a', 'm', 'o', 'r', 'a', 'r']
// var l8 = ['a', 'i', 'z', 't', 'g', 's', 'n', 'a', 'n', 'a']
// var l9 = ['t', 'p', 'e', 'r', 'a', 'a', 'b', 's', 'p', 'i']

// var linhas = [l0, l1, l2, l3, l4, l5, l6, l7, l8, l9]

// document.getElementById('exibirTabela').innerHTML =
//   ' <table>' +
//   '<tr class="tr-1">' +
//   '<td class="td">' +
//   l0[0] +
//   '</td>' +
//   '<td class="td">' +
//   l0[1] +
//   '</td>' +
//   '<td class="td-1-3">' +
//   l0[2] +
//   '</td>' +
//   '<td class="td-1-4">' +
//   l0[3] +
//   '</td>' +
//   '<td class="td-1-5">' +
//   l0[4] +
//   '</td>' +
//   '<td class="td-1-6">' +
//   l0[5] +
//   '</td>' +
//   '<td class="td-1-7">' +
//   l0[6] +
//   '</td>' +
//   '<td class="td-1-8">' +
//   l0[7] +
//   '</td>' +
//   '<td class="td-1-9">' +
//   l0[8] +
//   '</td>' +
//   '<td class="td-1-10">' +
//   l0[9] +
//   '</td>' +
//   '</tr>' +
//   '<tr class="tr-2">' +
//   '<td class="td-2-1">' +
//   l1[0] +
//   '</td>' +
//   '<td class="td-2-2">' +
//   l1[1] +
//   '</td>' +
//   '<td class="td-2-3">' +
//   l1[2] +
//   '</td>' +
//   '<td class="td-2-4">' +
//   l1[3] +
//   '</td>' +
//   '<td class="td-2-5">' +
//   l1[4] +
//   '</td>' +
//   '<td class="td-2-6">' +
//   l1[5] +
//   '</td>' +
//   '<td class="td-2-7">' +
//   l1[6] +
//   '</td>' +
//   '<td class="td-2-8">' +
//   l1[7] +
//   '</td>' +
//   '<td class="td-2-9">' +
//   l1[8] +
//   '</td>' +
//   '<td class="td-2-10">' +
//   l1[9] +
//   '</td>' +
//   '</tr>' +
//   '<tr class="tr-3">' +
//   '<td class="td-3-1">' +
//   l2[0] +
//   '</td>' +
//   '<td class="td-3-2">' +
//   l2[1] +
//   '</td>' +
//   '<td class="td-3-3">' +
//   l2[2] +
//   '</td>' +
//   '<td class="td-3-4">' +
//   l2[3] +
//   '</td>' +
//   '<td class="td-3-5">' +
//   l2[4] +
//   '</td>' +
//   '<td class="td-3-6">' +
//   l2[5] +
//   '</td>' +
//   '<td class="td-3-7">' +
//   l2[6] +
//   '</td>' +
//   '<td class="td-3-8">' +
//   l2[7] +
//   '</td>' +
//   '<td class="td-3-9">' +
//   l2[8] +
//   '</td>' +
//   '<td class="td-3-10">' +
//   l2[9] +
//   '</td>' +
//   '</tr>' +
//   '<tr class="tr-4">' +
//   '<td class="td-4-1">' +
//   l3[0] +
//   '</td>' +
//   '<td class="td-4-2">' +
//   l3[1] +
//   '</td>' +
//   '<td class="td-4-3">' +
//   l3[2] +
//   '</td>' +
//   '<td class="td-4-4">' +
//   l3[3] +
//   '</td>' +
//   '<td class="td-4-5">' +
//   l3[4] +
//   '</td>' +
//   '<td class="td-4-6">' +
//   l3[5] +
//   '</td>' +
//   '<td class="td-4-7">' +
//   l3[6] +
//   '</td>' +
//   '<td class="td-4-8">' +
//   l3[7] +
//   '</td>' +
//   '<td class="td-4-9">' +
//   l3[8] +
//   '</td>' +
//   '<td class="td-4-10">' +
//   l3[9] +
//   '</td>' +
//   '</tr>' +
//   '<tr class="tr-5">' +
//   '<td class="td-5-1">' +
//   l4[0] +
//   '</td>' +
//   '<td class="td-5-2">' +
//   l4[1] +
//   '</td>' +
//   '<td class="td-5-3">' +
//   l4[2] +
//   '</td>' +
//   '<td class="td-5-4">' +
//   l4[3] +
//   '</td>' +
//   '<td class="td-5-5">' +
//   l4[4] +
//   '</td>' +
//   '<td class="td-5-6">' +
//   l4[5] +
//   '</td>' +
//   '<td class="td-5-7">' +
//   l4[6] +
//   '</td>' +
//   '<td class="td-5-8">' +
//   l4[7] +
//   '</td>' +
//   '<td class="td-5-9">' +
//   l4[8] +
//   '</td>' +
//   '<td class="td-5-10">' +
//   l4[9] +
//   '</td>' +
//   '</tr>' +
//   '<tr class="tr-6">' +
//   '<td class="td-6-1">' +
//   l5[0] +
//   '</td>' +
//   '<td class="td-6-2">' +
//   l5[1] +
//   '</td>' +
//   '<td class="td-6-3">' +
//   l5[2] +
//   '</td>' +
//   '<td class="td-6-4">' +
//   l5[3] +
//   '</td>' +
//   '<td class="td-6-5">' +
//   l5[4] +
//   '</td>' +
//   '<td class="td-6-6">' +
//   l5[5] +
//   '</td>' +
//   '<td class="td-6-7">' +
//   l5[6] +
//   '</td>' +
//   '<td class="td-6-8">' +
//   l5[7] +
//   '</td>' +
//   '<td class="td-6-9">' +
//   l5[8] +
//   '</td>' +
//   '<td class="td-6-10">' +
//   l5[9] +
//   '</td>' +
//   '</tr>' +
//   '<tr class="tr-7">' +
//   '<td class="td-7-1">' +
//   l6[0] +
//   '</td>' +
//   '<td class="td-7-2">' +
//   l6[1] +
//   '</td>' +
//   '<td class="td-7-3">' +
//   l6[2] +
//   '</td>' +
//   '<td class="td-7-4">' +
//   l6[3] +
//   '</td>' +
//   '<td class="td-7-5">' +
//   l6[4] +
//   '</td>' +
//   '<td class="td-7-6">' +
//   l6[5] +
//   '</td>' +
//   '<td class="td-7-7">' +
//   l6[6] +
//   '</td>' +
//   '<td class="td-7-8">' +
//   l6[7] +
//   '</td>' +
//   '<td class="td-7-9">' +
//   l6[8] +
//   '</td>' +
//   '<td class="td-7-10">' +
//   l6[9] +
//   '</td>' +
//   '</tr>' +
//   '<tr class="tr-8">' +
//   '<td class="td-8-1">' +
//   l7[0] +
//   '</td>' +
//   '<td class="td-8-2">' +
//   l7[1] +
//   '</td>' +
//   '<td class="td-8-3">' +
//   l7[2] +
//   '</td>' +
//   '<td class="td-8-4">' +
//   l7[3] +
//   '</td>' +
//   '<td class="td-8-5">' +
//   l7[4] +
//   '</td>' +
//   '<td class="td-8-6">' +
//   l7[5] +
//   '</td>' +
//   '<td class="td-8-7">' +
//   l7[6] +
//   '</td>' +
//   '<td class="td-8-8">' +
//   l7[7] +
//   '</td>' +
//   '<td class="td-8-9">' +
//   l7[8] +
//   '</td>' +
//   '<td class="td-8-10">' +
//   l7[9] +
//   '</td>' +
//   '</tr>' +
//   '<tr class="tr-9">' +
//   '<td class="td-9-1">' +
//   l8[0] +
//   '</td>' +
//   '<td class="td-9-2">' +
//   l8[1] +
//   '</td>' +
//   '<td class="td-9-3">' +
//   l8[2] +
//   '</td>' +
//   '<td class="td-9-4">' +
//   l8[3] +
//   '</td>' +
//   '<td class="td-9-5">' +
//   l8[4] +
//   '</td>' +
//   '<td class="td-9-6">' +
//   l8[5] +
//   '</td>' +
//   '<td class="td-9-7">' +
//   l8[6] +
//   '</td>' +
//   '<td class="td-9-8">' +
//   l8[7] +
//   '</td>' +
//   '<td class="td-9-9">' +
//   l8[8] +
//   '</td>' +
//   '<td class="td-9-10">' +
//   l8[9] +
//   '</td>' +
//   '</tr>' +
//   '<tr class="tr-10">' +
//   '<td class="td-10-1">' +
//   l9[0] +
//   '</td>' +
//   '<td class="td-10-2">' +
//   l9[1] +
//   '</td>' +
//   '<td class="td-10-3">' +
//   l9[2] +
//   '</td>' +
//   '<td class="td-10-4">' +
//   l9[3] +
//   '</td>' +
//   '<td class="td-10-5">' +
//   l9[4] +
//   '</td>' +
//   '<td class="td-10-6">' +
//   l9[5] +
//   '</td>' +
//   '<td class="td-10-7">' +
//   l9[6] +
//   '</td>' +
//   '<td class="td-10-8">' +
//   l9[7] +
//   '</td>' +
//   '<td class="td-10-9">' +
//   l9[8] +
//   '</td>' +
//   '<td class="td-10-10">' +
//   l9[9] +
//   '</td>' +
//   '</tr>' +
//   ' </table>'

// var celula = document.getElementsByTagName('td')

// for (var i = 0; i < celula.length; i++) {
//   celula.item(i).addEventListener('click', () => {
//     console.log('oi', celula.item(i).classList)
//     if (celula.item(i).classList.contains('selected')) {
//       console.log('1')
//       celula.item(i).classList.remove('selected')
//       return
//     }
//     if (!celula.item(i).classList.contains('selected')) {
//       console.log('2')
//       celula.item(i).classList.add('selected')
//     }
//   })
// }

// for (var j = 0; j < 20; j++) {
//   var linha = linhas[j]
//   for (var i = 0; i < 20; i++) {
//     if (linha[i] == '') {
//       var char = generateRandomChar()
//       linha[i] = char
//     }
//   }
// }
