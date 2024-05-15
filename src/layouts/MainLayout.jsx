import { Outlet } from 'react-router-dom'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import { Suspense } from "react";
import { ScrollRestoration } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <TheHeader />
      <Suspense>
        <ScrollRestoration />
        <Outlet />
      </Suspense>
      <TheFooter />
    </>
  )
}
