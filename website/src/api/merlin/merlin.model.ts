export enum TxType {
  inscribeTransafer = 'inscribe-transafer',
  transafer = 'inscribe-transafer',
  inscribeMint = 'inscribe-mint'
}

export type MerlinChartsQueryParams = {
  tick: string
  offset?: number // default 0
  limit?: number // default 10
  type?: TxType
}

export type BlockItem = {
  inscription_id: string
  from: string
  to: string
  amount: string
  time: number
  txid: string
  block_height: number
}

export type MerlinDetail = {
  total: number
  height: number
  offset: number
  items: BlockItem[]
}

export type MerlinResponse = {
  err: number
  msg: string
  data: MerlinDetail
}
