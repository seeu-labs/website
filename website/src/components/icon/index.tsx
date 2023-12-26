import Icon from '@ant-design/icons/es/components/Icon'

export function TwitterIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg {...props} viewBox="0 0 19.6 20" enableBackground="new 0 0 19.6 20" height="20" width="20">
          <path
            d="m11.6 8.5 7.3-8.5h-1.7l-6.3 7.4-5.1-7.4h-5.8l7.6 11.1-7.6 8.9h1.7l6.7-7.8 5.3 7.8h5.8zm-2.3 2.7-.8-1.1-6.2-8.8h2.7l5 7.1.8 1.1 6.5 9.2h-2.7z"
            fill="currentColor"
          />
        </svg>
      )}
    />
  )
}

export function FinishedIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} {...props.style}>
          <path
            d="M13.0002 25.8002C5.93076 25.8002 0.200195 20.0696 0.200195 13.0002C0.200195 5.93076 5.93076 0.200195 13.0002 0.200195C20.0696 0.200195 25.8002 5.93076 25.8002 13.0002C25.8002 20.0696 20.0696 25.8002 13.0002 25.8002ZM11.724 18.1202L20.7736 9.06931L18.9637 7.2594L11.724 14.5004L8.10291 10.8792L6.293 12.6892L11.724 18.1202Z"
            fill="currentColor"
          />
        </svg>
      )}
    />
  )
}

export function FeedbackIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg viewBox="0 0 1024 1024" {...props.style}>
          <path
            d="M827.6992 165.1712H203.3152a101.5296 101.5296 0 0 0-101.376 101.376v389.6832A101.4784 101.4784 0 0 0 203.3152 757.76h10.8032v134.1952L434.8928 757.76h392.8064a101.4784 101.4784 0 0 0 101.376-101.376V266.5472a101.5296 101.5296 0 0 0-101.376-101.376z m-128.8704 184.7296a28.16 28.16 0 0 1 28.16-28.16h17.3056a28.16 28.16 0 0 1 28.16 28.16v67.584a28.16 28.16 0 0 1-28.16 28.16H727.04a28.16 28.16 0 0 1-28.16-28.16z m-321.4336 0a28.16 28.16 0 0 1 28.16-28.16h17.3056a28.2112 28.2112 0 0 1 28.2112 28.16v67.584A28.2112 28.2112 0 0 1 422.8608 445.44h-17.3056a28.16 28.16 0 0 1-28.16-28.16z m388.096 230.8096a403.0464 403.0464 0 0 1-189.0304 60.2112c-7.9872 0.512-16.0256 0.7168-24.0128 0.7168a403.0976 403.0976 0 0 1-164.4032-34.9696 28.16 28.16 0 1 1 23.04-51.2 341.8624 341.8624 0 0 0 161.9968 29.44 346.2144 346.2144 0 0 0 162.5088-51.7632 28.16 28.16 0 0 1 29.9008 47.7696z"
            fill="currentColor"
          />
        </svg>
      )}
    />
  )
}

export function CloseIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={props.color || 'black'}
            d="M7.05669 7.99985L0.457031 14.5995L1.63554 15.778L8.23521 9.17836L14.5992 15.5423L15.7777 14.3638L9.41372 7.99985L15.7777 1.63589L14.5992 0.457382L8.23521 6.82134L1.63554 0.22168L0.457032 1.40019L7.05669 7.99985Z"
          />
        </svg>
      )}
    />
  )
}

export function MaticIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 0H0V4H4V0ZM4 14H0V18H4V14ZM14 0H18V4H14V0ZM18 14H14V18H18V14ZM5 5H7V7H5V5ZM9 7H7V11H5V13H7V11H11V13H13V11H11V7H13V5H11V7H9Z"
            fill="white"
          />
        </svg>
      )}
    />
  )
}

export function NotFoundIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M152.5 5H7.5C6.1175 5 5 6.1175 5 7.5V152.5C5 153.883 6.1175 155 7.5 155H152.5C153.883 155 155 153.883 155 152.5V7.5C155 6.1175 153.883 5 152.5 5ZM47.5 150V145C47.5 135.352 55.3525 127.5 65 127.5H95C104.647 127.5 112.5 135.352 112.5 145V150H47.5ZM35 100H30V75H35V100ZM40 60H120V122.5H40V60ZM77.5 42.5C77.5 41.12 78.62 40 80 40C81.38 40 82.5 41.12 82.5 42.5C82.5 43.88 81.38 45 80 45C78.62 45 77.5 43.88 77.5 42.5ZM125 75H130V100H125V75ZM150 150H117.5V145C117.5 137.935 114.22 131.628 109.113 127.5H122.5C123.882 127.5 125 126.382 125 125V105H132.5C133.883 105 135 103.882 135 102.5V72.5C135 71.1175 133.883 70 132.5 70H125V57.5C125 56.1175 123.882 55 122.5 55H82.5V49.54C85.4025 48.505 87.5 45.755 87.5 42.5C87.5 38.365 84.135 35 80 35C75.865 35 72.5 38.365 72.5 42.5C72.5 45.755 74.5975 48.505 77.5 49.54V55H37.5C36.1175 55 35 56.1175 35 57.5V70H27.5C26.1175 70 25 71.1175 25 72.5V102.5C25 103.882 26.1175 105 27.5 105H35V125C35 126.382 36.1175 127.5 37.5 127.5H50.8875C45.78 131.628 42.5 137.935 42.5 145V150H10V30H150V150ZM150 25H10V10H150V25Z"
            fill="black"
          />
          <path d="M20 15H15V20H20V15Z" fill="black" />
          <path d="M30 15H25V20H30V15Z" fill="black" />
          <path d="M40 15H35V20H40V15Z" fill="black" />
          <path d="M145 15H70V20H145V15Z" fill="black" />
          <path
            d="M68.2324 94.2674L71.7674 90.7324L64.7849 83.7499L71.7674 76.7674L68.2324 73.2324L61.2499 80.2149L54.2674 73.2324L50.7324 76.7674L57.7149 83.7499L50.7324 90.7324L54.2674 94.2674L61.2499 87.2849L68.2324 94.2674Z"
            fill="black"
          />
          <path
            d="M91.7674 94.2674L98.7499 87.2849L105.732 94.2674L109.267 90.7324L102.285 83.7499L109.267 76.7674L105.732 73.2324L98.7499 80.2149L91.7674 73.2324L88.2324 76.7674L95.2149 83.7499L88.2324 90.7324L91.7674 94.2674Z"
            fill="black"
          />
          <path
            d="M95 117.5C96.3825 117.5 97.5 116.382 97.5 115C97.5 105.352 89.6475 97.5 80 97.5C70.3525 97.5 62.5 105.352 62.5 115C62.5 116.382 63.6175 117.5 65 117.5H95ZM80 102.5C86.0375 102.5 91.0875 106.802 92.2475 112.5H67.75C68.9125 106.802 73.9625 102.5 80 102.5Z"
            fill="black"
          />
        </svg>
      )}
    />
  )
}

export function TelegramIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg {...props} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.58817 8.24205C7.78965 5.54017 11.925 3.75892 13.9941 2.89831C19.9018 0.44109 21.1293 0.014245 21.9295 0.000150281C22.1054 -0.00294969 22.4989 0.0406627 22.7538 0.247476C22.969 0.422105 23.0282 0.658004 23.0565 0.823572C23.0849 0.989139 23.1202 1.36631 23.0921 1.66101C22.772 5.02476 21.3867 13.1877 20.682 16.9551C20.3838 18.5493 19.7966 19.0838 19.2282 19.1361C17.9928 19.2498 17.0548 18.3197 15.8582 17.5354C13.986 16.3081 12.9282 15.5441 11.1108 14.3464C9.01054 12.9624 10.3721 12.2017 11.569 10.9584C11.8823 10.6331 17.3253 5.68226 17.4306 5.23314C17.4438 5.17697 17.4561 4.9676 17.3317 4.85704C17.2073 4.74648 17.0237 4.78429 16.8912 4.81436C16.7034 4.85698 13.7124 6.83392 7.91818 10.7452C7.0692 11.3282 6.30021 11.6122 5.61122 11.5973C4.85167 11.5809 3.39059 11.1679 2.30444 10.8148C0.972217 10.3818 -0.0866027 10.1528 0.00559677 9.41735C0.0536199 9.03427 0.581144 8.64251 1.58817 8.24205Z"
            fill="currentColor"
          />
        </svg>
      )}
    />
  )
}

export function SearchIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_214_5564)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.78802 16.7208C2.66382 13.5966 2.66382 8.53131 5.78802 5.40711C8.91221 2.28292 13.9775 2.28292 17.1017 5.40711C20.2259 8.5313 20.2259 13.5966 17.1017 16.7208C13.9775 19.845 8.91221 19.845 5.78802 16.7208ZM4.3738 3.9929C0.468559 7.89814 0.468559 14.2298 4.3738 18.135C8.019 21.7802 13.7782 22.023 17.705 18.8632L21.9887 23.147C22.3793 23.5375 23.0124 23.5375 23.4029 23.147C23.7935 22.7565 23.7935 22.1233 23.4029 21.7328L19.1316 17.4614C22.4091 13.5327 22.2039 7.68083 18.5159 3.9929C14.6107 0.0876545 8.27904 0.0876545 4.3738 3.9929Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_214_5564">
              <rect width="24" height="24" fill="white" transform="translate(0 0.00146484)" />
            </clipPath>
          </defs>
        </svg>
      )}
    />
  )
}

export function Translation(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          fill="currentcolor"
          style={{ display: 'block', height: '19px', width: '19px' }}
        >
          <path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z" />
        </svg>
      )}
    />
  )
}

export function ShareIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="45" viewBox="0 0 43 45" fill="none">
          <path
            d="M29.4902 20.3736L23.2269 13.4839C22.9763 13.2334 22.6005 13.2334 22.35 13.4839C22.0995 13.7345 22.0995 13.8597 22.0995 14.1103V17.743C16.9635 17.743 12.0781 22.0021 12.0781 27.138C12.0781 28.5159 12.7045 30.2697 13.3308 30.896C14.0824 27.0127 17.9657 24.0063 22.0995 24.0063C22.0995 24.3821 22.0995 27.7643 22.0995 27.7643C22.0995 27.8896 22.0995 28.0149 22.2247 28.2654C22.4753 28.5159 22.9763 28.3907 23.1016 28.2654L29.365 21.501C29.6155 21.2505 29.6155 20.9999 29.6155 20.8747C29.6155 20.7494 29.6155 20.4989 29.4902 20.3736Z"
            fill="black"
          />
          <defs>
            <filter
              id="filter0_f_215_5755"
              x="0.125"
              y="0.526001"
              width="42.0117"
              height="43.6258"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_215_5755" />
            </filter>
          </defs>
        </svg>
      )}
    />
  )
}

export function LanguageIcon(props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_213_5511)">
            <path
              d="M22.9403 10.7033C22.6987 10.7515 22.448 10.7017 22.2431 10.565C22.0383 10.4283 21.8961 10.2159 21.8478 9.97439C20.9018 5.27856 16.7595 1.8708 11.9985 1.8708C7.80894 1.8708 4.09976 4.50843 2.62409 8.34001L4.24124 7.79625C4.3569 7.75772 4.47903 7.74244 4.60062 7.75129C4.7222 7.76015 4.84083 7.79297 4.94969 7.84785C5.05854 7.90273 5.15546 7.9786 5.23488 8.07109C5.31429 8.16358 5.37464 8.27086 5.41243 8.38676C5.4906 8.62105 5.4729 8.87676 5.36318 9.09804C5.25346 9.31932 5.06064 9.48819 4.82683 9.56779L1.5341 10.6738C1.37997 10.7256 1.21488 10.7356 1.05561 10.7029C0.896347 10.6701 0.748599 10.5958 0.62741 10.4874C0.505562 10.3784 0.414328 10.2394 0.362753 10.0842C0.311178 9.92907 0.301053 9.76313 0.333382 9.60285C1.45352 4.04094 6.3591 0.00390625 11.9985 0.00390625C17.6373 0.00390625 22.5429 4.04094 23.663 9.60285C23.7124 9.84455 23.664 10.096 23.5286 10.3021C23.3932 10.5083 23.1817 10.6525 22.9403 10.7033ZM16.0602 17.3607C15.7034 17.3607 15.3632 17.1516 15.2113 16.8016L14.2535 14.5952H10.1821L9.22433 16.8016C9.17629 16.9136 9.10655 17.015 9.01913 17.0998C8.93171 17.1847 8.82834 17.2515 8.71499 17.2962C8.60164 17.3409 8.48055 17.3627 8.35872 17.3604C8.23688 17.3581 8.11672 17.3316 8.00516 17.2826C7.77955 17.182 7.60281 16.9963 7.51341 16.7661C7.42402 16.5358 7.4292 16.2795 7.52783 16.053L8.71931 13.3071L8.73592 13.269L11.3693 7.20143C11.5169 6.86188 11.8497 6.64228 12.2181 6.64228C12.5853 6.64228 12.9187 6.86126 13.0664 7.20143L15.6997 13.269C15.7052 13.2807 15.7114 13.2936 15.7163 13.3071L16.9084 16.053C17.007 16.2795 17.0122 16.5358 16.9228 16.7661C16.8334 16.9963 16.6567 17.182 16.4311 17.2826C16.3142 17.3343 16.1879 17.3609 16.0602 17.3607ZM12.2181 9.90488L10.9928 12.7277H13.4428L12.2181 9.90488ZM1.05676 13.2997C1.17638 13.2755 1.2996 13.2752 1.41933 13.2988C1.53907 13.3224 1.65297 13.3694 1.75448 13.4371C1.85599 13.5049 1.94312 13.592 2.01087 13.6935C2.07861 13.795 2.12562 13.9089 2.14922 14.0286C3.09466 18.7239 7.23687 22.1322 11.9985 22.1322C16.1493 22.1322 19.8302 19.542 21.3317 15.7657L20.2337 16.192C20.12 16.2355 19.9988 16.256 19.877 16.2526C19.7553 16.2491 19.6354 16.2217 19.5243 16.1719C19.4132 16.1221 19.313 16.0508 19.2294 15.9622C19.1459 15.8737 19.0806 15.7695 19.0373 15.6556C18.949 15.425 18.9554 15.1687 19.055 14.9427C19.1546 14.7167 19.3395 14.5392 19.5694 14.4488L22.4236 13.3428C22.5786 13.2835 22.7467 13.2669 22.9103 13.2949C23.0739 13.3228 23.227 13.3941 23.3536 13.5015C23.6114 13.7217 23.7307 14.0662 23.663 14.4002C22.5429 19.9621 17.6373 23.9991 11.9985 23.9991C6.3591 23.9991 1.45352 19.9621 0.333382 14.3996C0.283925 14.1578 0.332285 13.9064 0.467871 13.7002C0.603456 13.4941 0.815214 13.3501 1.05676 13.2997Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_213_5511">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    />
  )
}