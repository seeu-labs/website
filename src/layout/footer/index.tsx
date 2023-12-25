import ShareAltOutlined from '@ant-design/icons/ShareAltOutlined'
import { TelegramIcon, TwitterIcon } from 'components/icon'
import { onShareX } from 'utils/social'

const Footer = () => {
  const handleShare = async () => {
    const shortUrl = `seeu community official website: %0A https://seeu-brc20.xyz %0A👆👆👆%0A %23brc20 %23seeu`
    onShareX(shortUrl)
  }

  return (
    <div className="flex w-full flex-row flex-wrap-reverse items-center justify-center gap-6 border-[t-1] border-t-black p-6">
      <div className="frc-center md:frc-start text-[#666666]">
        <span className="mr-2 text-xl">copyright</span>
        <span className="mr-2 text-xl">©</span>
        <span className="text-xl"> 2023 seeu-community </span>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <div
          className="!flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-[#1818180f]"
          onClick={() => {
            handleShare()
          }}
        >
          <ShareAltOutlined
            style={{
              fontSize: '20px',
              width: 16,
              height: 16,
              background: 'none'
            }}
            className="!flex cursor-pointer items-center justify-center "
          />
        </div>
        <div
          className="!flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-[#1818180f]"
          onClick={() => {
            window.open('https://twitter.com/seeu_brc20')
          }}
        >
          <TwitterIcon
            style={{
              fontSize: '20px',
              width: 16,
              height: 16,
              background: 'none'
            }}
            className="!flex cursor-pointer items-center justify-center "
          />
        </div>
        <div
          className="!flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-[#1818180f] "
          onClick={() => {
            window.open('https://t.me/+-sylvVN20l5jYzdl')
          }}
        >
          <TelegramIcon width="20px" height="20px" />
        </div>
      </div>
    </div>
  )
}

export default Footer
