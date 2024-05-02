import { Outlet } from 'react-router-dom'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import { Suspense } from "react";

export default function MainLayout() {
  return (
    <>
      <TheHeader />
      <Suspense>
        <Outlet />
      </Suspense>
      <TheFooter />
    </>
  )
}
