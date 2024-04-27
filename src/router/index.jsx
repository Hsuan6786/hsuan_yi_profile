import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout"; 
import { lazy } from "react";

const Home = lazy(() => import('@/pages/Home'))
const Works = lazy(() => import('@/pages/Works'))
const Resume = lazy(() => import('@/pages/Resume'))
const Contacts = lazy(() => import('@/pages/Contacts'))

const routers = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />
      },
      {
        path: "works",
        element: <Works />
      },
      {
        path: "resume",
        element: <Resume />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
    ],
  },
  {
    path: "*",
    lazy: () => import("@/pages/PageNotFound"),
  },
  {
    path: "/404",
    lazy: () => import("@/pages/PageNotFound"),
  },
];

export default createBrowserRouter(routers, { basename: "/hsuan_yi_profile" });
