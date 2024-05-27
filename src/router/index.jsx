import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout"; 
import { lazy } from "react";

const Home = lazy(() => import('@/pages/Home'))
const Works = lazy(() => import('@/pages/Works'))
const WorksDetail = lazy(() => import('@/pages/WorksDetail'))
const Resume = lazy(() => import('@/pages/Resume'))
const Contacts = lazy(() => import('@/pages/Contacts'))

const PageNotFound = lazy(()=> import('@/pages/PageNotFound'))

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
        path: "/works",
        element: <Works />
      },
      {
        path: "/works/:id",
        element: <WorksDetail />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
    ],
  },
  {
  
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <PageNotFound />
      },
      {
        path: "/404",
        element: <PageNotFound />
      },
    ]
  
  },
  
];

const basename = process.env.PUBLIC_URL;
export default createBrowserRouter(routers, { basename });
