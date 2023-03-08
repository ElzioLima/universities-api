export interface HttpGetClient {
  request: (input: HttpGetClient.Input) => Promise<HttpGetClient.Output>
}

export namespace HttpGetClient {
  export type Input = {
    baseURL: string
    url: string
    method: string
    body: any
    params: any
    headers: any
  }
  
  export type Output = {
    statusCode: number,
    body: any
  }
}
