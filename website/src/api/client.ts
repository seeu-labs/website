import axios, { AxiosInstance } from 'axios'
import { SeeUApi } from './brc20'

export class Client {
  private _instance: AxiosInstance

  constructor(instance?: AxiosInstance) {
    this._instance = instance || axios
    this._instance.defaults.baseURL = '/api'
  }

  get instance(): AxiosInstance {
    return this._instance
  }

  get brc20() {
    return new SeeUApi(this)
  }
}
