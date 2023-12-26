import api, { SeeUDetail } from 'api'
import { useEffect, useState } from 'react'
import bitcoin from 'assets/images/bitcoin.png'

export function BitcoinIcon() {
  return <img className="mx-2 w-[28px]" src={bitcoin} alt="bitcoin" />
}

export function Dashbooard() {
  const [data, setData] = useState<SeeUDetail>()

  useEffect(() => {
    api.brc20.getSeeUDetails().then((res) => {
      console.log(res)
      setData(res)
    })
  }, [])
  return data ? (
    <div className="m-auto flex flex-wrap gap-8">
      <div className="min-w-[200px] rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-center text-3xl font-bold">
          <BitcoinIcon />
          {Number.parseFloat(data.marketplace.totalVolume).toFixed(4)}
        </div>
        <div className="mt-1 text-center text-lg text-gray-600">
          Total volume
        </div>
      </div>
      <div className="min-w-[200px] rounded-xl p-4 text-center shadow-md">
        <div className="flex items-center justify-center text-3xl font-bold">
          <BitcoinIcon />
          {Number.parseFloat(data.marketplace.volume24h).toFixed(4)}
        </div>
        <div className="mt-1 text-center text-lg text-gray-600">24h Volume</div>
      </div>
      <div className="min-w-[200px] rounded-xl p-4 shadow-md">
        <div className="flex items-center justify-center text-3xl font-bold">
          {(Number.parseFloat(data.marketplace.floorPrice) * 100000000).toFixed(
            2
          ) + ' sats'}
        </div>
        <div className="mt-1 text-center text-lg text-gray-600">
          Floor price
        </div>
      </div>
      <div className="min-w-[200px] rounded-xl p-4 shadow-md">
        <div className="flex items-center justify-center text-3xl font-bold">
          {data.detail.holder}
        </div>
        <div className="mt-1 text-center text-lg text-gray-600">Holders</div>
      </div>
    </div>
  ) : null
}
