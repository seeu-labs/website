import Button, { ButtonProps } from 'antd/es/button'
import logo160 from 'assets/images/logo-160.png'
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
    <div className="flex items-center pt-[48px] text-2xl font-[600]">
      <div
        onClick={() => {
          n('/')
        }}
        className="flex cursor-pointer items-center gap-2"
      >
        <img src={logo160} width={76} alt="logo" />
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
    <div className="m-auto w-full max-w-[1440px] px-[20px] text-[#f8f8f8] lg:px-[100px]">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
export default Layout
