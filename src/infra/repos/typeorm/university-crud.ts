import { ORMUniversity } from '@/infra/repos/typeorm/entities'
import { ORMRepository } from '@/infra/repos/typeorm/repository'
import {
  DBPopulateUniversity
} from '@/domain/contracts/repos'

export class ORMUniversityRepository extends ORMRepository implements DBPopulateUniversity {
  async populate (input: DBPopulateUniversity.Input): Promise<DBPopulateUniversity.Output> {
    const ormUniversityRepo = this.getRepository(ORMUniversity)
    await ormUniversityRepo.save(input)
  }
}
