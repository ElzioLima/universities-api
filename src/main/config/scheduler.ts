import { JobScheduler } from "@/infra/gateways";
import { makePopulateUniversity } from "../factories/domain/use-cases";
import { env } from "./env";

export const setupJobScheduler = () => {
  JobScheduler.getInstance().scheduleJob(
    "populate-universities",
    env.cronRule,
    async () => {
      const populateUniversitiesUsecase = makePopulateUniversity()
      await populateUniversitiesUsecase({
        countryList: env.countryList
      })
    }
  )
}
