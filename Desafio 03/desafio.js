let sol = ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o']
let res = document.querySelector('div#res')
let n = ' '

function solSettime() {
  for (let i = 0; i < sol.length; i++) {
    Promise.race([
      new Promise((resolve) => {
        setTimeout(function () {
          n += sol[i]
          resolve(res.innerHTML += n)
        }, 3000);
      })
    ])
  }
}