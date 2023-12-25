import ConfigProvider from 'antd/es/config-provider'
import 'antd/dist/reset.css'
import type { ReactElement } from 'react'

export const AntdConfigProvider = ({
  children
}: {
  children: ReactElement
}) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#484848',
        colorPrimaryActive: 'black',
        colorPrimaryBgHover: 'black',
        colorPrimaryBorder: 'black',
        colorPrimaryBorderHover: '#d8d8d8',
        colorPrimaryHover: 'black',
        colorBgBase: '#ffffff',
        colorPrimaryText: '#d8d8d8',
        colorPrimaryTextActive: '#ffffff',
        colorPrimaryTextHover: '#ffffff',
        borderRadius: 0,
        fontFamily: 'PingFang, Misans'
      }
    }}
  >
    {children}
  </ConfigProvider>
)
