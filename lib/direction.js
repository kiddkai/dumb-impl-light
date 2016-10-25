const DIRECTIONS = {
  NORTH: 1,
  EAST: 2,
  SOUTH: 3,
  WEST: 4
}

const { NORTH, EAST, SOUTH, WEST } = DIRECTIONS

exports.DIRECTIONS = DIRECTIONS

exports.same = (da, db) => da == db

exports.isOpposite = (da, db) => Math.abs(da - db) === 2

exports.isSamePath = (da, db) => exports.same(da, db) || exports.isOpposite(da, db)

exports.neighbours = (d) => [d == NORTH ? WEST : d - 1, d + 1 % 4]

exports.nameOf = (d) => d == NORTH
  ? 'NORTH'
  : d == SOUTH
  ? 'SOUTH'
  : d == EAST
  ? 'EAST'
  : 'WEST'

