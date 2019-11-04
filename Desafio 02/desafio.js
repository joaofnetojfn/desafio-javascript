var val = ['o', undefined, null, 'l', undefined, 'a', ' null', null]
var res = document.querySelector('div#res')

function mostravalor() {
  for (var n = 0; n < val.length; n++) {
    if (n == String()) {
      res.innerHTML = `${val}`
    }
  }
}