import { AES256 } from '../../src/apis/Callback'

test('decrypt `hello world`', () => {
  const encrypt = 'P37w+VZImNgPEO1RBhJ6RtKl7n6zymIbEG1pReEzghk='
  const aes = new AES256('test key')
  const decrypt = aes.decrypt(encrypt)

  expect(decrypt).toBe('hello world')
})

test('encrypt `hello world`', () => {
  const aes = new AES256('test key')
  const encrypt = aes.encrypt('hello world')
  const decrypt = aes.decrypt(encrypt)

  expect(decrypt).toBe('hello world')
})
