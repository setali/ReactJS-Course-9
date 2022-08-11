const { sum, sumString: mySumString } = require('./sum')

const sumString = jest.fn(mySumString)

beforeAll(() => {
  console.log('Execute before All tests')
})

afterAll(() => {
  console.log('Execute after All tests')
})

beforeEach(() => {
  console.log('Execute before each tests')
})

afterEach(() => {
  console.log('Execute after each tests')
})

describe('Sum feature', () => {
  test('Sum testing', () => {
    expect(sum(5, 7)).toBe(12)
    expect(sum('5', 6)).toBe(11)
    expect(sum('Ali', 1)).toBeNaN()
    expect(sum()).toBeNaN()
    expect(sum(NaN)).toBeNaN()
  })

  it('Sum string testing', () => {
    expect(sumString(2, 3)).toBe('Sum is 5')
    expect(sumString('Ali', 2)).toBe('Sum is NaN')
    expect(sumString()).toBe('Sum is NaN')
    expect(sumString).toBeCalledTimes(3)
    expect(sumString).toBeCalledWith(2, 3)
    expect(sumString).toBeCalledWith('Ali', 2)
  })
})

// if (sum(5, 6) !== 11) {
//   throw 'Test fail'
// }

// if (sum('5', 6) !== 11) {
//   throw 'Test fail'
// }

// if (!Number.isNaN(sum('Ali', 1))) {
//   throw 'Test fail'
// }

// if (!Number.isNaN(sum())) {
//   throw 'Test fail'
// }
