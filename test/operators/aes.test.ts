import aes256, { decrypt } from '@/operators/aes-256'
import { of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import debug from 'debug'

debug.enable('test*')

const logger = debug('test:chat')

test('encrypt `hello world`', done => {
  of('hello world')
    .pipe(
      aes256('test key')
      // decrypt('test key')
    )
    .subscribe(data => {
      // const decrypt =
      logger('这里是')
    })
})
