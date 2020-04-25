import Cache from '../src/Cache'

let cache: Cache

beforeAll(() => {
  cache = new Cache(10, 3)
})

describe('cache', () => {
  test('should get and set', () => {
    for (let i = 0; i < 10; i++) {
      cache.set(`${i}`, i ** i)
    }

    for (let i = 0; i < 10; i++) {
      expect(cache.get(`${i}`)).toBe(i ** i)
    }
  })
})
