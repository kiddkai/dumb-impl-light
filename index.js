const ms = require('ms')
const i = require('./lib/intersection')

let init = i.intersection({
  N: 'green',
  S: 'green',
  E: 'red',
  W: 'red'
})

;(function next (ins) {
  console.log(i.format(ins))
  setTimeout(function () {
    next(i.next(ins))
  }, ms(i.duration(ins)) / 1000)
})(init)

