import { ORMUniversity } from '@/infra/repos/typeorm/entities'
import { ORMRepository } from '@/infra/repos/typeorm/repository'
import {
  DBPopulateUniversity
} from '@/domain/contracts/repos'

export class ORMUniversityRepository extends ORMRepository implements DBPopulateUniversity {
  async populate (input: DBPopulateUniversity.Input): Promise<DBPopulateUniversity.Output> {
    const ormUniversityRepo = this.getMongoRepository(ORMUniversity)
    const currentDate = new Date(Date.now())
    const operations = input.map(university => {
      const filter = {
        country: university.country,
        stateProvince: university.stateProvince,
        name: university.name,
      };
      const update = {
        $set: {
          domains: university.domains,
          webPages: university.webPages,
          alphaTwoCode: university.alphaTwoCode,
          updatedAt: currentDate
        },
        $setOnInsert: {
          createdAt: currentDate
        }
      };
      return {
        updateOne: {
          filter,
          update,
          upsert: true,
          new: true
        },
      };
    });
    await ormUniversityRepo.bulkWrite(operations)
  }
}
