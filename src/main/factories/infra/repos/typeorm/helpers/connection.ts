import { ORMConnection } from '@/infra/repos/typeorm/helpers'

export const makePgConnection = (): ORMConnection => {
  return ORMConnection.getInstance()
}
