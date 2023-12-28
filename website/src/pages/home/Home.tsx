import Button from 'antd/es/button'
import logo from 'assets/images/logo-640.png'
import { SeeButton } from 'layout'
import demoImage from 'assets/images/1.jpg'
import Image from 'antd/es/image'
import { useEffect, useState } from 'react'
import api, { SeeUDetail } from 'api'
import { BitcoinIcon } from 'pages/Mint/Dashboard'
import Progress from 'antd/es/progress'
import { ToolItem } from 'pages/Tools/ToolItem'
import { toolsData } from 'pages/Tools'
import { useNavigate } from 'react-router-dom'

function DashbooardItem(props: {
  value: string | React.ReactNode
  label: string
}) {
  return (
    <div className="rounded-xl p-4">
      <div className="flex items-center text-[32px] font-extrabold">
        {props.value}
      </div>
      <div className="ml-[6px] mt-[8px] text-[16px] text-[#e4e4e4]">
        {props.label}
      </div>
    </div>
  )
}

export function CreationItem() {
  return (
    <div className="flex h-[300px] w-[220px] flex-col overflow-hidden rounded-lg bg-[#1d1e1f] shadow-[0_4px_6px_-1px_rgba(0,0,0,1)]">
      <Image
        src={demoImage}
        rootClassName="flex-1"
        alt="demoImage"
        width="100%"
        height="100%"
        className="flex-1 object-cover"
      />
      <div className="px-[16px] py-[26px]">
        <div>康师傅</div>
      </div>
    </div>
  )
}

export function Home() {
  const [data, setData] = useState<SeeUDetail>()
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/tools')
  }
  useEffect(() => {
    api.brc20.getSeeUDetails().then((res) => {
      console.log(res)
      setData(res)
    })
  }, [])
  return (
    <div className="w-full">
      {/* Introduction */}
      <div className="flex pt-[80px]">
        <div className="mr-[102px] flex flex-1 flex-col">
          <div className=" flex-1">
            <h1 className="text-[56px] font-[700] leading-[68px]">
              SeeU, The First BRC20 Inscription for the Youth
            </h1>
            <p className="text-[20px] leading-[26px]">
              Allowing companions who missed out on inscriptions to band
              together and strive for the top, achieving a new generation of a
              thousandfold coin.
            </p>
          </div>
          <div>
            <SeeButton
              onClick={() => {
                window.open(
                  'https://www.okx.com/cn/web3/marketplace/ordinals/brc20/SeeU',
                  '_blank'
                )
              }}
              className="h-[40px] w-[180px]"
            >
              OKX maketplace
            </SeeButton>
            <Button
              onClick={() => {
                window.open(
                  'https://unisat.io/market/brc20?tick=SeeU',
                  '_blank'
                )
              }}
              className="ml-4 h-[40px] w-[180px] border-[#63e3ff] text-[#63e3ff] "
            >
              Unisat maketplace
            </Button>
          </div>
          <div className="h-[80px]"></div>
          <div className="flex">
            <DashbooardItem
              value={
                <>
                  <BitcoinIcon />
                  {data
                    ? Number.parseFloat(data.marketplace.totalVolume).toFixed(3)
                    : 0}
                </>
              }
              label="Total volume"
            />
            <div className="mx-[26px] h-full border-r-[1px] border-[#9b9b9b]"></div>
            <DashbooardItem
              value={
                <>
                  <BitcoinIcon />
                  {data
                    ? Number.parseFloat(data.marketplace.volume24h).toFixed(3)
                    : 0}
                </>
              }
              label="24h Volum"
            />
            <div className="mx-[26px] h-full border-r-[1px] border-[#9b9b9b]"></div>
            <DashbooardItem
              value={data ? data.detail.holder : 0}
              label="Hodlers"
            />
          </div>
        </div>
        <div
          className="w-[368px]"
          style={{ boxShadow: '0px 40px 160px rgba(255,255,255,0.32)' }}
        >
          <div className="w-full px-[62px] py-[92px]">
            <img src={logo} width={244} alt="logo" />
          </div>
          <div className="w-full bg-white p-[24px] text-black">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="text-[14px]">Market cap</div>
                <div className="flex items-center pt-[10px] text-[16px] font-[700]">
                  <BitcoinIcon />
                  {data
                    ? (
                        Number.parseFloat(data.marketplace.floorPrice) *
                        Number.parseFloat(data.detail.totalSupply)
                      ).toFixed(4)
                    : 0}
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="text-[14px]">Floor Price</div>
                <div className="flex flex-1 items-center pt-[10px] text-[16px] font-[700]">
                  {(data
                    ? (
                        Number.parseFloat(data.marketplace.floorPrice) *
                        100000000
                      ).toFixed(4)
                    : 0) + ' sats'}
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => {
                  window.open('https://twitter.com/seeu_brc20', '_blank')
                }}
                className="h-[40px] w-[152px] bg-[#111] text-white"
              >
                Follow us
              </Button>
              <Button
                onClick={() => {
                  window.open('https://t.me/seeubtc', '_blank')
                }}
                className="h-[40px] w-[152px] "
              >
                Join us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[120px]"></div>
      {/* Token Details */}
      <h1 className="my-[20px] text-[24px] font-[500] leading-[30px]">
        Token Details
      </h1>
      <div className="flex flex-col gap-2 px-[20px] text-lg text-[#aaa]">
        <div className="flex justify-between text-sm text-[#aaa]">
          <div>Minted: 21,000,000,000</div>
          <div>Supply: 21,000,000,000</div>
        </div>
        <Progress
          percent={100}
          showInfo={false}
          strokeColor={{ '0%': '#63e3ff', '100%': '#87d068' }}
        />
        <div className="flex flex-wrap">
          <div className="w-[240px]">Total supply</div>
          <div>21,000,000,000</div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[240px]">Deployed</div>
          <div>12/21/2023, 13:26:30</div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[240px]">Inscription ID</div>
          <div>
            6e10a5a53028bc945539a5f9a9f18f08141b05ccb6f721bd63386f056b9a5a8fi0
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[240px]">Inscription starting no.</div>
          <div>#49925873</div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[240px]">Inscription ending no.</div>
          <div>#50070419</div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[240px]">Limit per mint</div>
          <div>1,000,000</div>
        </div>
      </div>
      <div className="h-[60px]"></div>
      {/* Community Co-creation */}
      <h1 className="my-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
        <div>Community Co-creation</div>
        <div
          onClick={handleNavigate}
          className=" mr-[20px] cursor-pointer text-lg text-[#63e3ff]"
        >
          More tools
        </div>
      </h1>
      <div className="grid grid-cols-2 gap-[24px]">
        {Object.keys(toolsData)
          .flatMap((t) => toolsData[t].map((tool) => ({ ...tool, group: t })))
          .slice(0, 4)
          .map((tool) => (
            <ToolItem value={tool} key={tool.id} group={tool.group} />
          ))}
      </div>
    </div>
  )
}
