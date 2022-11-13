import React, { lazy, Suspense } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import { Spin } from '@douyinfe/semi-ui'
import AuthRoute from './AuthRoute'

const Login = lazy(() => import('@/views/Login'))
const Home = lazy(() => import('@/views/Home'))
const FsLogin = lazy(() => import('@/views/Login/fsLogin'))
export function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spin size="large" />
    </div>
  )
}

export function LazyWrapper(props: { children: React.ReactNode }) {
  const { children } = props

  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route
        path="/login"
        element={
          <LazyWrapper>
            <Login />
          </LazyWrapper>
        }
      ></Route>
      <Route
        path="/fslogin/:code"
        element={
          <LazyWrapper>
            <FsLogin />
          </LazyWrapper>
        }
      ></Route>
      <Route
        path="/"
        element={
          <LazyWrapper>
            <AuthRoute>
              <Home />
            </AuthRoute>
          </LazyWrapper>
        }
      ></Route>
    </React.Fragment>
  )
)

export default router
