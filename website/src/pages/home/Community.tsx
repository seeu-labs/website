import { useEffect, useRef } from 'react'

export function TwitterList() {
  const xc = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (xc.current) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      xc.current.appendChild(script)
    }
  }, [])

  return (
    <div>
      <h1 className="my-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
        Twitter
      </h1>
      <div ref={xc} className="">
        <a
          className="twitter-timeline"
          data-lang="zh-cn"
          data-height="1000"
          data-theme="dark"
          href="https://twitter.com/seeu_brc20?ref_src=twsrc%5Etfw"
        >
          Loading Tweets...
        </a>
      </div>
    </div>
  )
}

export function TelegramList() {
  const tc = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tc.current) {
      const script = document.createElement('script')
      script.src = 'https://telegram.org/js/telegram-widget.js?22'
      script.setAttribute('data-telegram-discussion', 'seeubtc/2236')
      script.setAttribute('data-comments-limit', '20')
      script.setAttribute('data-dark', '1')
      script.setAttribute('data-height', '1000')
      tc.current.appendChild(script)
    }
  }, [])

  return (
    <div>
      <h1 className="my-[20px] flex items-center justify-between text-[24px] font-[500] leading-[30px]">
        Telegram
      </h1>
      <div ref={tc} className="">
        <a href="https://t.me/seeubtc/2236"></a>
      </div>
    </div>
  )
}
