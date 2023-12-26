/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />
/// <reference types="vite-plugin-pwa/info" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string //定义提示信息 数据是只读的无法被修改
  //多个变量定义多个...
}
export {}
