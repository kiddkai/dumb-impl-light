const direction = require('../lib/direction')

describe('Direction', function () {
  const { DIRECTIONS } = direction
  const { NORTH, EAST, SOUTH, WEST } = DIRECTIONS

  describe('.same', function () {
    it('east and east should be the same direction', () => {
      direction.same(EAST, EAST).should.be.true()
    })

    it('east and north should not be the same direction', () => {
      direction.same(EAST, NORTH).should.be.false()
    })
  })

  describe('.isOpposite', function () {
    it('east and west should be opposite', () => {
      direction.isOpposite(EAST, WEST).should.be.true()
    })

    it('east and east should not be opposite', () => {
      direction.isOpposite(EAST, EAST).should.be.false()
    })

    it('east and south should not be opposite', () => {
      direction.isOpposite(EAST, EAST).should.be.false()
    })
  })

  describe('.isSamePath', function () {
    it('east and east are in the same path', () => {
      direction.isSamePath(EAST, EAST).should.be.true()
    })

    it('east and west are in the same path', () => {
      direction.isSamePath(EAST, EAST).should.be.true()
    })

    it('east and south are in the different path', () => {
      direction.isSamePath(EAST, SOUTH).should.be.false()
    })
  })

  describe('.neighbours', function () {
    it('east should have north, south as neighbours', () => {
      direction.neighbours(EAST).should.deepEqual([NORTH, SOUTH])
    })
  })
})
