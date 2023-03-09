export interface HttpGetClient {
  get: (input: HttpGetClient.Input) => Promise<HttpGetClient.Output>
}

export namespace HttpGetClient {
  export type Input = {
    url: string
    params: any
  }
  
  export type Output = {
    statusCode: number,
    body: any
  }
}
