import unisats from 'assets/images/Unisats.png'
import okx from 'assets/images/okx.png'

const Marketplace = () => {
  const markets = [
    {
      id: 1,
      name: 'Unisats',
      url: 'https://unisat.io/market/brc20?tick=SeeU',
      image: unisats
    },
    {
      id: 2,
      name: 'OKX',
      url: 'https://www.okx.com/cn/web3/marketplace/ordinals/brc20/SeeU',
      image: okx
    }
  ]

  return (
    <div className="flex w-full flex-col items-center justify-between gap-[36px] overflow-auto px-8 pb-10 pt-[64px]">
      {markets.map((m) => (
        <a
          href={m.url}
          target="_blank"
          rel="noreferrer"
          key={m.id}
          className="block"
        >
          <h1 className="mb-[8px] text-[24px] font-[600]">{m.name}</h1>
          <div className="rounded-lg p-4 shadow hover:shadow-lg">
            <div className="line-wrap one-line-wrap mb-[8px] w-full">
              {m.url}
            </div>
            <img src={m.image} alt={m.name} />
          </div>
        </a>
      ))}
    </div>
  )
}

export default Marketplace
