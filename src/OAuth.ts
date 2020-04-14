import moment, { max } from 'moment'
moment.locale('zh-cn')

class Cache {
  public maxSize: number

  public ttl: number

  private cache: Map<string, number>

  constructor(maxSize = 256, ttl = 0) {
    this.maxSize = maxSize
    this.ttl = ttl
    this.cache = new Map()
  }

  get length(): number {
    return this.cache.size
  }

  has(key: string): boolean {
    return this.cache.has(key)
  }

  *[Symbol.iterator](): Generator {
    const values = this.cache.values()
    for (const v of values) {
      yield v
    }
  }
}
