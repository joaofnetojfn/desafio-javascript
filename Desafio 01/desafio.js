var sol = ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o']
var res = document.querySelector('div#res')

function soletrando() {
  for (var n = 0; n < sol.length; n++) {
    res.innerHTML += `${sol[n]}`
  }
}