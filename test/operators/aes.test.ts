import aes256, { decrypt } from '@/operators/aes-256'
import { of } from 'rxjs'
import debug from 'debug'

debug.enable('test*')

const logger = debug('test:chat')

test('encrypt `hello world`', done => {
  const s = 'hello world'

  of(s)
    .pipe(aes256('test key'), decrypt())
    .subscribe(
      data => {
        logger('decrypt info : ', data)
        expect(data).toBe(s)
      },
      error => done(error),
      () => done()
    )
})
