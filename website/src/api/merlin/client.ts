import { Axios } from 'axios'
import { MerlinResponse, MerlinChartsQueryParams } from './merlin.model'
import { buildQueryString } from 'utils/api'

export class MerlinApi {
  merlinAxios = new Axios({ baseURL: '/merlinapi' })

  getMerlinDetails(params: MerlinChartsQueryParams): Promise<MerlinResponse> {
    const queryStr = buildQueryString(params)
    return this.merlinAxios
      .get(`/apis/indexer/v1/ticker/history?${queryStr}`)
      .then((res) => res.data)
  }
}

export default new MerlinApi()
