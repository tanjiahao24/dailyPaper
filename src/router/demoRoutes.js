import {lazy} from "react";

export default [
  {
    path: '/zustand/count',
    name: 'zustand/count',
    component: lazy(() => import('../pages/zustand/components/Count'))
  },
  {
    path: '/zustand/asyncCount',
    name: 'zustand/asyncCount',
    component: lazy(() => import('../pages/zustand/components/AsyncCount'))
  },
  {
    path: '/zustand/nest',
    name: 'zustand/nest',
    component: lazy(() => import('../pages/zustand/components/Nest'))
  },
  {
    path: '/zustand/presist',
    name: 'zustand/presist',
    component: lazy(() => import('../pages/zustand/components/Presist'))
  },
]