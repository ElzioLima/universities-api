import { PopulateUniversity, setupPopulateUniversity } from '@/domain/use-cases'
import { makeAxiosHttpClient } from '@/main/factories/infra/gateways'
import { makeORMDeviceRepo } from '@/main/factories/infra/repos/typeorm'
import { env } from '@/main/config'

export const makePopulateUniversity = (): PopulateUniversity => {
  return setupPopulateUniversity(
    makeAxiosHttpClient(
      env.universitiesAPI
    ),
    makeORMDeviceRepo()
  )
}
