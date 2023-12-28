// import { Outlet, useLocation } from 'react-router-dom'
// import { useEffect } from 'react'
// import { TwitterIcon, TelegramIcon } from 'components/icon'
// import ShareAltOutlined from '@ant-design/icons/ShareAltOutlined'
// import { onShareX } from 'utils/social'
// import Banner from './banner'
// import NavTabs from './tabs'
// import Footer from './footer'

// const Layout = () => {
//   const location = useLocation()

//   const items = [
//     {
//       key: '1',
//       path: 'mint',
//       label: 'Mint'
//     },
//     {
//       key: '2',
//       path: 'marketplace',
//       label: 'Marketplace'
//     },
//     {
//       key: '3',
//       path: 'tools',
//       label: 'Tools'
//     },
//     {
//       key: '4',
//       path: 'about',
//       label: 'About'
//     }
//   ]

//   useEffect(() => {
//     const sTop = document.documentElement.scrollTop || document.body.scrollTop
//     if (sTop > 0) {
//       window.scrollTo(0, 0)
//     }
//   }, [location])

//   const handleShare = async () => {
//     const shortUrl = `seeu community official website: %0A https://seeu-brc20.xyz %0A👆👆👆%0A %23brc20 %23seeu`
//     onShareX(shortUrl)
//   }

//   return (
//     <div className="flex w-full max-w-[2600px] flex-col lg:h-full lg:flex-row">
//       <Banner />
//       <div className="flex h-full flex-1 flex-col justify-between">
//         <div className="flex h-[64px] px-20">
//           <NavTabs items={items} />
//           <div className="hidden items-center gap-4 text-black lg:flex">
//             <div
//               className="!flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-[#1818180f]"
//               onClick={() => {
//                 handleShare()
//               }}
//             >
//               <ShareAltOutlined
//                 style={{
//                   fontSize: '16px',
//                   width: 14,
//                   height: 14,
//                   background: 'none'
//                 }}
//                 className="!flex cursor-pointer items-center justify-center "
//               />
//             </div>
//             <div
//               className="!flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-[#1818180f]"
//               onClick={() => {
//                 window.open('https://twitter.com/seeu_brc20')
//               }}
//             >
//               <TwitterIcon
//                 style={{
//                   fontSize: '16px',
//                   width: 12,
//                   height: 12,
//                   background: 'none'
//                 }}
//                 className="!flex cursor-pointer items-center justify-center"
//               />
//             </div>
//             <div
//               className="!flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-[#1818180f]"
//               onClick={() => {
//                 window.open('https://t.me/+-sylvVN20l5jYzdl')
//               }}
//             >
//               <TelegramIcon width="14px" height="14px" />
//             </div>
//           </div>
//         </div>
//         <div className="flex-1 overflow-auto">
//           <Outlet />
//         </div>
//         <Footer />
//       </div>
//     </div>
//   )
// }
// export default Layout
