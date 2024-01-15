import { ShareAltOutlined } from '@ant-design/icons'
import { TelegramIcon, TwitterIcon } from 'components/icon'
import { onShareX } from 'utils/social'

export function SoialPanel() {
  const handleShare = async () => {
    const shortUrl = `seeu community official website: %0A https://seeu.meme %0A👆👆👆%0A %23brc20 %23seeu`
    onShareX(shortUrl)
  }
  return (
    <div className="flex flex-row items-center gap-4 ">
      <div
        className="!flex cursor-pointer items-center justify-center rounded-full border p-[8px] hover:bg-[#63e3ff]"
        onClick={() => {
          handleShare()
        }}
      >
        <ShareAltOutlined
          style={{
            fontSize: '24px',
            background: 'transparent'
          }}
          className="!flex cursor-pointer items-center justify-center "
        />
      </div>
      <div
        className="!flex cursor-pointer items-center justify-center rounded-full border p-[8px] hover:bg-[#63e3ff]"
        onClick={() => {
          window.open('https://twitter.com/seeu_brc20')
        }}
      >
        <TwitterIcon
          style={{
            fontSize: '24px',
            background: 'transparent'
          }}
          className="!flex cursor-pointer items-center justify-center "
        />
      </div>
      <div
        className="!flex cursor-pointer items-center justify-center rounded-full border p-[8px] hover:bg-[#63e3ff]"
        onClick={() => {
          window.open('https://t.me/+-sylvVN20l5jYzdl')
        }}
      >
        <TelegramIcon
          style={{
            fontSize: '24px',
            background: 'transparent'
          }}
          width="24px"
          height="24px"
        />
      </div>
    </div>
  )
}
