import { ORMConnection } from '@/infra/repos/typeorm/helpers'

import { MongoRepository, ObjectLiteral, ObjectType, Repository } from 'typeorm'

export abstract class ORMRepository {
  constructor (private readonly connection: ORMConnection = ORMConnection.getInstance()) {}

  getRepository<Entity extends ObjectLiteral> (entity: ObjectType<Entity>): Repository<Entity> {
    return this.connection.getRepository(entity)
  }

  getMongoRepository<Entity extends ObjectLiteral> (entity: ObjectType<Entity>): MongoRepository<Entity> {
    return this.connection.getMongoRepository(entity)
  }
}
