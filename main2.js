var l0 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
var l1 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
var l2 = [ '', '', '', '', '', '', '', 'M','O', 'R','A','N','G','O','','', '', '', '', '']
var l3 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
var l4 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
var l5 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
var l6 = [ '', '', '', '', 'B', '','', '', '', '', '', '', '', '', '', '', '', '', '', '']
var l7 = [ '', '', '', '', 'A', '','', '', '', '', '', '', '', '', '', '', '', '', '', '']
var l8 = [ '', '', '', '', 'N', '','', '', '', '', '', '', 'M','', '', '', '', '', '', '']
var l9 = [ '', 'P','E','R','A', '', '', '', '', '', '', '','A', '', '', '', '', '', '','']
var l10 = [ '', '', '', '','N', '','', '', '', '', '', '', 'C','', '', '', '', '', '', '']
var l11 = [ '', '', '', '','A', '','', '', '', '', '', '', 'A','', '', '', '', '', '', '']
var l12 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','']
var l13 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','']
var l14 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','']
var l15 = [ '', '', '', '', '', '', '', '', '', '','M','E','L','A','O', '', '', '', '','']
var l16 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','']
var l17 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','']
var l18 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','']
var l19 = [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '','']

var linhas = [ l0, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19]

for (var j = 0; j < 20; j++) {
  var linha = linhas[j]
  for (var i = 0; i < 20; i++) {
    if (linha[i] == '') {
      var char = generateRandomChar()
      linha[i] = char
    }
  }
}

var exibicao = ''
for (var j = 0; j < 20; j++) {
  var linha = linhas[j]
  for (var i = 0; i < 20; i++) {
    exibicao += linha[i] + '  '
  }
}

document.getElementById('exibir').innerHTML =
  '<p id="exibir">' + exibicao + '</p>'

function generateRandomChar() {
  const characters = 'ABCDEFLMNNOPQRSTUVWXYZ'

  let result = ''
  result = characters.charAt(Math.floor(Math.random() * characters.length))

  return result
}
