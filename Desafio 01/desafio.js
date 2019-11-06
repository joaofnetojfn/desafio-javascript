const sol = ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o']
const res = document.querySelector('div#res')

function soletrando() {
  for (let n = 0; n < sol.length; n++) {
    res.innerHTML += sol[n]
  }
}