import Button, { ButtonProps } from 'antd/es/button'
import { SoialPanel } from 'components/SocailPanel'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './footer'

function mergeClassNames(...classNames: (string | undefined)[]) {
  return classNames.filter((c) => c).join(' ')
}

export function SeeButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={mergeClassNames(
        'border-0 bg-[#63e3ff] px-[8px] w-[140px] h-[44px]',
        props.className
      )}
    >
      {props.children}
    </Button>
  )
}

export const Header = () => {
  const n = useNavigate()
  return (
    <div className="flex items-center pt-[48px] text-3xl font-[700]">
      <div
        onClick={() => {
          n('/')
        }}
        className="flex cursor-pointer items-center gap-4"
      >
        <img
          src="/favicon.ico"
          className="rounded-full"
          width={52}
          alt="logo"
        />
        SeeU
      </div>
      <div className="flex-1"> </div>
      <SoialPanel />
      {/* <SeeButton>Connect Wallet</SeeButton> */}
    </div>
  )
}

export const Content = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

const Layout = () => {
  return (
    <div className="m-auto w-full max-w-[1440px] px-[10px] text-[#f8f8f8] lg:px-[100px]">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
export default Layout
