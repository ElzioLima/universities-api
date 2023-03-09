import { DBPopulateUniversity } from '@/domain/contracts/repos'
import { HttpGetClient } from '@/domain/contracts/gateways'

type Setup = (
  httpClient: HttpGetClient, 
  universityRepo: DBPopulateUniversity
) => PopulateUniversity
type Input = { 
  entryPoint: string,
  countryList: string[]
}
type Output = void

export type PopulateUniversity = (input: Input) => Promise<Output>

export const setupPopulateUniversity: Setup = (httpClient, universityRepo) => async ({entryPoint, countryList}) => {
  const promises = countryList.map(country => httpClient.get(
      {
        url: entryPoint, 
        params: {
          country
        }
      }
    )
  )
  
  const results = await Promise.all(promises)

  const universityList = results.map(({ body }) => {
    return body
  }) 

  await universityRepo.populate(universityList)
}
