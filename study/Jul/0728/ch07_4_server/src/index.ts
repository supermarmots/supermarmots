import {createServer} from 'http'
import {getPublicDirPath} from './config'
import {makeDir} from './utils'
import {createExpressApp} from './express'
import type {MongoDB} from './mongodb'
import {connectAndUseDB} from './mongodb'

makeDir(getPublicDirPath())

const connectCallback = (db: MongoDB) => {
  const hostname = 'localhost', // 0.0.0.0으로도 수정 시에 정상 동작!
    port = 4000

  createServer(createExpressApp(db)).listen(port, hostname, () =>
    console.log(`connect http://${hostname}:${port}`)
  )
}

connectAndUseDB(connectCallback, 'ch07', 'mongodb://localhost:27017')
// mongodb://192.168.0.20:27017 (공유기 ip 주소)
// => mongodb://localhost:27017 로 수정 (내부 운영체제 로컬 주소)
