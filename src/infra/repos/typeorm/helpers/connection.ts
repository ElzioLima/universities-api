import { ConnectionNotFoundError } from '@/infra/repos/typeorm/helpers'

import { createConnection, getConnection, getConnectionManager, ObjectType, QueryRunner, Repository, Connection, getRepository, ObjectLiteral, getMongoRepository, MongoRepository } from 'typeorm'

export class ORMConnection {
  private static instance?: ORMConnection
  private query?: QueryRunner
  private connection?: Connection

  private constructor () {}

  static getInstance (): ORMConnection {
    if (ORMConnection.instance === undefined) ORMConnection.instance = new ORMConnection()
    return ORMConnection.instance
  }

  async connect (): Promise<void> {
    this.connection = getConnectionManager().has('default')
      ? getConnection()
      : await createConnection()
  }

  async disconnect (): Promise<void> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    await getConnection().close()
    this.query = undefined
    this.connection = undefined
  }

  getRepository<Entity extends ObjectLiteral> (entity: ObjectType<Entity>): Repository<Entity> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    if (this.query !== undefined) return this.query.manager.getRepository(entity)
    return getRepository(entity)
  }

  getMongoRepository<Entity extends ObjectLiteral> (entity: ObjectType<Entity>): MongoRepository<Entity> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    if (this.query !== undefined) return this.query.manager.getMongoRepository(entity)
    return getMongoRepository(entity)
  }
}
