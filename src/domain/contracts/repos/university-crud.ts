export interface DBPopulateUniversity {
  populate: (input: DBPopulateUniversity.Input) => Promise<DBPopulateUniversity.Output>
}

export namespace DBPopulateUniversity {
  export type Input = {
    name: string
    stateProvince?: string
    domains: string[]
    country: string
    webPages: string[]
    alphaTwoCode: string
  }[]

  export type Output = void
}
