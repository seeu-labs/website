import api, { SeeUDetail } from 'api'
import React, { useEffect, useState } from 'react'
import bitcoin from 'assets/images/bitcoin.png'

export function BitcoinIcon() {
  return <img className="mr-2 w-[28px]" src={bitcoin} alt="bitcoin" />
}

function DashbooardItem(props: {
  value: string | React.ReactNode
  label: string
}) {
  return (
    <div className="min-w-[180px] rounded-xl p-4 shadow-xl">
      <div className="flex items-center justify-center text-2xl font-extrabold">
        {props.value}
      </div>
      <div className="mt-1 text-center text-lg text-gray-600">
        {props.label}
      </div>
    </div>
  )
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
      <DashbooardItem
        label="Total volume"
        value={
          <>
            <BitcoinIcon />
            {Number.parseFloat(data.marketplace.totalVolume).toFixed(4)}
          </>
        }
      />
      <DashbooardItem
        label="24h Volume"
        value={
          <>
            <BitcoinIcon />
            {Number.parseFloat(data.marketplace.volume24h).toFixed(4)}
          </>
        }
      />
      <DashbooardItem
        label="Market cap"
        value={
          <>
            <BitcoinIcon />
            {(
              Number.parseFloat(data.marketplace.floorPrice) *
              Number.parseFloat(data.detail.totalSupply)
            ).toFixed(4)}
          </>
        }
      />
      <DashbooardItem
        label="Floor Price"
        value={
          (Number.parseFloat(data.marketplace.floorPrice) * 100000000).toFixed(
            4
          ) + ' sats'
        }
      />
      <DashbooardItem value={data.detail.holder} label="Holders" />
    </div>
  ) : null
}
