import Layout from 'layout/index'
import About from 'pages/About'
import Marketplace from 'pages/Marketplace'
import Mint from 'pages/Mint'
import toolsData from 'pages/Tools'
import { Home } from 'pages/home/Home'
import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter
} from 'react-router-dom'

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mint" element={<Mint />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="tools" element={<toolsData />} />
        {/* <Route path="learn" element={<Learn />} /> */}
        {/* <Route path="404" element={<NotFound />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/mint" />} />
    </Routes>
  )
}

const router = createBrowserRouter([{ path: '*', element: Root() }])

export default function App() {
  return <RouterProvider router={router} />
}
