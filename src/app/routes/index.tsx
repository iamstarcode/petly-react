import LayoutMain from '@/layouts/index'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const IndexPage = lazy(() => import('@/pages'))
const Details = lazy(() => import('@/pages/details'))

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<LayoutMain />}
      >
        <Route index element={
          <Suspense fallback={null}>
            <IndexPage />
          </Suspense>} />
        <Route path="details">
          <Route path=":id" element={
            <Suspense fallback={null}>
              <Details />
            </Suspense>}>
          </Route>
        </Route>
      </Route>
      {/* Other Routes here */}
    </Routes>
  )
}

export default MyRoutes
