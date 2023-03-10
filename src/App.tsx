import {Suspense} from 'react'
import { Outlet } from 'react-router-dom';
import {LayoutProvider, LayoutSplashScreen} from './_metronic/layout/core'
import {MasterInit} from './_metronic/layout/MasterInit'
import {AuthInit} from './app/components/pages/auth'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
    </Suspense>
  )
}

export default App
