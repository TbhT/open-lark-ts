import {
  createHash,
  createDecipheriv,
  createCipheriv,
  randomBytes
} from 'crypto'

const ALGORITHM = 'aes-256-cbc'

export class AES256 {
  private key: Buffer

  constructor(key: string) {
    const HASH_SHA_256 = createHash('sha256')
    this.key = HASH_SHA_256.update(key).digest()
  }

  public decrypt(encrypt: string): string {
    const decodeString = Buffer.from(encrypt, 'base64')

    const iv = decodeString.slice(0, 16)
    const decipher = createDecipheriv(ALGORITHM, Buffer.from(this.key), iv)

    let decrypted = decipher.update(decodeString.slice(16), undefined, 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  }

  public encrypt(data: string): string {
    const iv = randomBytes(16)
    const cipher = createCipheriv(ALGORITHM, Buffer.from(this.key), iv)

    cipher.update(data)
    const cipherText = cipher.final()
    const final = Buffer.concat([iv, cipherText])

    return final.toString('base64')
  }
}
