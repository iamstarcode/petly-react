import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const IndexPage = lazy(() => import('@/pages'))

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={null}>
            <IndexPage />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default MyRoutes
