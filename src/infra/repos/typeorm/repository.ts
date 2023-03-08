import { ORMConnection } from '@/infra/repos/typeorm/helpers'

import { ObjectLiteral, ObjectType, Repository } from 'typeorm'

export abstract class ORMRepository {
  constructor (private readonly connection: ORMConnection = ORMConnection.getInstance()) {}

  getRepository<Entity extends ObjectLiteral> (entity: ObjectType<Entity>): Repository<Entity> {
    return this.connection.getRepository(entity)
  }
}
