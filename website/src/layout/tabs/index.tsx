import { useState, type ReactNode, useEffect, MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type Tab = {
  key: string
  label: ReactNode
  path: string
}

type NavTabsProps = {
  items: Array<Tab>
}

const NavTabs: React.FC<NavTabsProps> = ({ items }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState<number>(-1)

  useEffect(() => {
    const { pathname } = location
    const index = items.findIndex(
      (item) => item.path === pathname.slice(1, pathname.length)
    )
    setActive(index)
  }, [items, location])

  const handleClick = (e: MouseEvent, path: string) => {
    e.stopPropagation()
    navigate(path)
  }

  return (
    <div className="frc-center flex-1 gap-[40px]">
      {items.map((tab: Tab, index: number) => (
        <a
          key={tab.key}
          style={active === index ? { color: 'black', fontWeight: 600 } : {}}
          className="cursor-pointer border-b border-b-white text-[#383838] hover:border-b-black hover:font-[500] hover:text-black"
          onClick={(e) => handleClick(e, tab.path)}
        >
          {tab.label}
        </a>
      ))}
    </div>
  )
}

export default NavTabs
