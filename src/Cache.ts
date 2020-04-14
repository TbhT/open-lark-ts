import moment from 'moment'
moment.locale('zh-cn')

class Cache {
  public readonly maxSize: number

  public readonly ttl: number

  private cache: Map<string, number>

  private expiredTime: Map<string, number>

  constructor(maxSize = 256, ttl = 0) {
    this.maxSize = maxSize
    this.ttl = ttl
    this.cache = new Map()
    this.expiredTime = new Map()
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

  keys(): IterableIterator<string> {
    return this.cache.keys()
  }

  get full(): boolean {
    return this.cache.size > this.maxSize
  }

  get(key: string): number {
    if (this.has(key)) {
      const value = this.cache.get(key)
      if (this.expired(key)) {
        this.delete(key)
      }

      return value as number
    }

    return -1
  }

  add(key: string, value: number, ttl?: number): void {
    if (!this.cache.has(key)) {
      this.set(key, value, ttl)
    }
  }

  set(key: string, value: number, ttl?: number): void {
    if (!ttl) {
      ttl = this.ttl
    }

    if (this.cache.has(key) === false) {
      this.evict()
    }

    this.delete(key)
    this.cache.set(key, value)

    if (ttl) {
      this.expiredTime.set(key, moment().unix() + ttl)
    }
  }

  delete(key: string): boolean {
    let flag = false

    if (this.cache.has(key)) {
      flag = this.cache.delete(key)
    }

    if (this.expiredTime.has(key)) {
      flag = flag || this.expiredTime.delete(key)
    }

    return flag
  }

  evict(): number {
    let count = this.deleteExpired()

    if (!this.full) {
      return count
    }

    this.pop()
    count++

    return count
  }

  pop(): [string, number] | [] {
    const keys = [...this.keys()]
    const popKey = keys.pop()

    if (popKey) {
      const popValue = this.cache.get(popKey) as number
      this.delete(popKey)
      return [popKey, popValue]
    }

    return []
  }

  private deleteExpired(): number {
    let count = 0

    if (this.expiredTime.size === 0) {
      return count
    }

    const expiredOn = moment().unix()

    for (const [key, expire] of this.expiredTime.entries()) {
      if (expire <= expiredOn) {
        this.delete(key)
        count++
      }
    }

    return count
  }

  expired(key: string, expiredOn?: number): boolean {
    if (!expiredOn) {
      expiredOn = moment().unix()
    }

    if (this.expiredTime.has(key)) {
      return (this.expiredTime.get(key) as number) <= expiredOn
    }

    return this.cache.has(key)
  }
}

export default Cache
