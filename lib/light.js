const GREEN = 'green'
exports.GREEN = GREEN
exports.green = direction => ({
  direction,
  sign: GREEN,
  next: exports.yellow.bind(null, direction)
})

const RED = 'red'
exports.RED = RED
exports.red = direction => ({
  direction,
  sign: RED,
  next: exports.green.bind(null, direction)
})
 
const YELLOW = 'yellow'
exports.YELLOW = YELLOW
exports.yellow = direction => ({
  direction,
  sign: YELLOW,
  next: exports.red.bind(null, direction)
})

