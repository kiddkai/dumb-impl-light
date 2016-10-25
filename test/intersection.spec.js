const { RED } = require('../lib/light')
const { DIRECTIONS } = require('../lib/direction')
const i = require('../lib/intersection')

describe('intersection', function () {
  it('create intersection from config', () => {
    let ins = i.intersection({
      N: 'green',
      S: 'green',
      W: 'red',
      E: 'red'
    })

    ins[0].sign.should.equal(RED)
    ins[0].direction.should.equal(DIRECTIONS.EAST)
  })

  describe('.duration', function () {
    it('gets duration of green light', () => {
      let ins = i.intersection({
        N: 'green',
        S: 'green',
        W: 'red',
        E: 'red'
      })

      i.duration(ins).should.equal('5m')
    })

    it('gets duration of yellow light', () => {
      let ins = i.intersection({
        N: 'yellow',
        S: 'yellow',
        W: 'red',
        E: 'red'
      })

      i.duration(ins).should.equal('30s')
    })
  })

  describe('.next', function () {
    it('creates next state of green light', () => {
      let ins = i.intersection({
        N: 'green',
        S: 'green',
        W: 'red',
        E: 'red'
      })

      i.format(i.next(ins)).should.equal('(NORTH, yellow) (EAST, red) (SOUTH, yellow) (WEST, red)')
    })

    it('creates next state of yellow light', () => {
      let ins = i.intersection({
        N: 'yellow',
        S: 'yellow',
        W: 'red',
        E: 'red'
      })

      i.format(i.next(ins)).should.equal('(NORTH, red) (EAST, green) (SOUTH, red) (WEST, green)')
    })
  })
})
