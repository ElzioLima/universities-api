import { AxiosHttpClient } from '@/infra/gateways'

export const makeAxiosHttpClient = (url: string): AxiosHttpClient => {
  return new AxiosHttpClient(url)
}
