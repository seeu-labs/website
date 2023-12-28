const Footer = () => {
  return (
    <div className="mt-[40px] flex h-[87px] items-center border-t-[1px] border-[#383838]">
      <div className="text-[26px] font-[700]">SeeU</div>
      <div className="flex flex-1 gap-[60px] px-[60px] text-[18px]">
        <span
          onClick={() => {
            window.open('https://twitter.com/seeu_brc20', '_blank')
          }}
          className="cursor-pointer"
        >
          Twitter
        </span>
        <span
          onClick={() => {
            window.open('https://t.me/seeubtc', '_blank')
          }}
          className="cursor-pointer"
        >
          Telegram
        </span>
        <span
          onClick={() => {
            window.open(
              'https://seeubtc.notion.site/SeeU-910514ce2de248e4a4ac2ae84ab9c621',
              '_blank'
            )
          }}
          className="cursor-pointer"
        >
          Notion
        </span>
        <span
          onClick={() => {
            window.open('https://seeuclub.xyz', '_blank')
          }}
          className="cursor-pointer"
        >
          Club
        </span>
        <span
          onClick={() => {
            window.open('https://github.com/seeu-labs', '_blank')
          }}
          className="cursor-pointer"
        >
          GitHub
        </span>
      </div>
      <div>© SeeU 2023</div>
    </div>
  )
}

export default Footer
