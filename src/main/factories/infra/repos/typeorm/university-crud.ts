import { ORMUniversityRepository } from '@/infra/repos/typeorm'

export const makeORMDeviceRepo = (): ORMUniversityRepository => {
  return new ORMUniversityRepository()
}
