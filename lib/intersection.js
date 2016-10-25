const light = require('./light')
const direction = require('./direction')
const { DIRECTIONS } = direction

function intersection (init) {
  let { N, S, W, E } = init

  return [
    light[E](DIRECTIONS.EAST),
    light[S](DIRECTIONS.SOUTH),
    light[W](DIRECTIONS.WEST),
    light[N](DIRECTIONS.NORTH)
  ]
}

exports.intersection = intersection

exports.next = (ins) => {
  let greens = ins.filter(l => l.sign === light.GREEN)
  return greens.length === 0
       ? ins.map(l => l.next())
       : ins.map(l => l.sign === light.GREEN ? l.next() : l)
}

exports.duration = (ins) =>
  ins.filter(l => l.sign === light.GREEN).length === 0 ? '30s' : '5m'

exports.format = (ins) =>
  ins.sort((l1, l2) => l1.direction - l2.direction)
     .map(l => `(${direction.nameOf(l.direction)}, ${l.sign})`).join(' ')

