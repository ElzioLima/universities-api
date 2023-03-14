import { DBPopulateUniversity } from '@/domain/contracts/repos'
import { HttpGetClient } from '@/domain/contracts/gateways'

type Setup = (
  httpClient: HttpGetClient, 
  universityRepo: DBPopulateUniversity
) => PopulateUniversity
type Input = { 
  countryList: string[]
}
type Output = void

export type PopulateUniversity = (input: Input) => Promise<Output>

export const setupPopulateUniversity: Setup = (httpClient, universityRepo) => async ({countryList}) => {
  const promises = countryList.map(country => { 
    return httpClient.get({ 
        url: "search",
        params: {
          country
        }
      })
    }
  )
  
  const results = await Promise.all(promises)

  const bodyList = results.map(({ body }) => {
    return body.map((university: any) => university)
  }) 

  const universityList = bodyList.flat()

  await universityRepo.populate(universityList)
}
