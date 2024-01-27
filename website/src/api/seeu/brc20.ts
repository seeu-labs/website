import { Client } from './client'

export type SeeUDetail = {
  detail: {
    token: string
    precision: string
    totalSupply: string
    mintAmount: string
    limitPerMint: string
    holder: string
    deployAddress: string
    logoUrl: string
    txId: string
    inscriptionId: string
    deployHeight: string
    deployTime: string
    inscriptionNumber: string
    state: string
    tokenType: string
    msg: string
  }
  marketplace: {
    floorPrice: string
    inscriptionNumRange: string
    isBrc20: boolean
    slug: string
    totalVolume: string
    volume24h: string
  }
}

export class SeeUApi {
  constructor(private c: Client) {}

  getSeeUDetails(): Promise<SeeUDetail> {
    return this.c.instance.get('/api/seeu/detail').then((res) => res.data)
  }
}
