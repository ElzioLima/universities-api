import './config/module-alias'
import { ORMConnection } from '@/infra/repos/typeorm/helpers'

import 'reflect-metadata'

ORMConnection.getInstance().connect()
  .then(async () => {
    const { app } = await import('@/main/config/app')
    app()
  })
  .catch((console.error))