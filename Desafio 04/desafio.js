var pessoa = {
  nome: ['Thiago', 'Caio', 'Bruno'],
  idade: [4567, 8, 24]
}
var res = document.querySelector('div#res')

function somentenome() {
  for (var n = 0; n < pessoa.nome.length; n++) {
    res.innerHTML += `${pessoa.nome[n]}<br>`
  }
}