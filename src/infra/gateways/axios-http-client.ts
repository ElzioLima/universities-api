import { HttpGetClient } from '@/domain/contracts/gateways';
import axios, { AxiosResponse, AxiosError } from 'axios'

export class AxiosHttpClient implements HttpGetClient {
  public async request(input: HttpGetClient.Input): Promise<HttpGetClient.Output> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        baseURL: input.baseURL,
        url: input.url,
        method: input.method,
        data: input.body,
        headers: input.headers
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}