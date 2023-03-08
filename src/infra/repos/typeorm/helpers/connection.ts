import { ConnectionNotFoundError, TransactionNotFoundError } from '@/infra/repos/typeorm/helpers'
import { DbTransaction } from '@/application/contracts'

import { createConnection, getConnection, getConnectionManager, ObjectType, QueryRunner, Repository, Connection, getRepository, ObjectLiteral, Entity } from 'typeorm'

export class ORMConnection implements DbTransaction {
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

  async openTransaction (): Promise<void> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    this.query = this.connection.createQueryRunner()
    await this.query.startTransaction()
  }

  async closeTransaction (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.release()
    this.query = undefined
  }

  async commit (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.commitTransaction()
  }

  async rollback (): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.rollbackTransaction()
  }

  getRepository<Entity extends ObjectLiteral> (entity: ObjectType<Entity>): Repository<Entity> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    if (this.query !== undefined) return this.query.manager.getRepository(entity)
    return getRepository(entity)
  }
}
