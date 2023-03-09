import { HttpGetClient } from '@/domain/contracts/gateways';
import axios, { AxiosResponse, AxiosInstance } from 'axios'

export class AxiosHttpClient implements HttpGetClient {

  readonly axiosInstance: AxiosInstance

  constructor(
    private url: string,
  ){
    this.axiosInstance = axios.create({
      url: this.url
    })
  }

  public async get({ url, params }: HttpGetClient.Input): Promise<HttpGetClient.Output> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.get(url, {
        params
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
