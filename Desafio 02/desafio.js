const val = ['o', undefined, null, 'l', undefined, 'a', ' null', null]
const res = document.querySelector('div#res')

function mostravalor() {
  for (let n = 0; n < val.length; n++) {
    if (n != undefined && n != null) {
      res.innerHTML = val
    }
  }
}