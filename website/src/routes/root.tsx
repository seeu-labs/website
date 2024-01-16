import Layout from 'layout/index'
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
      </Route>
      <Route path="*" element={<Navigate to="/Home" />} />
    </Routes>
  )
}

const router = createBrowserRouter([{ path: '*', element: Root() }])

export default function App() {
  return <RouterProvider router={router} />
}
