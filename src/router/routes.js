import { lazy } from 'react'
import Home from "../pages/Home";

import demoRoutes from './demoRoutes'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'daily-首页'
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: lazy(() => import('../pages/Detail')),
    meta: {
      title: 'daily-详情页'
    }
  },
  {
    path: '/personal',
    component: lazy(() => import('../pages/Personal')),
    name: 'personal',
    meta: {
      title: 'daily-个人中心'
    }
  },
  {
    path: '/login',
    component: lazy(() => import('../pages/Login')),
    name: 'login',
    meta: {
      title: 'daily-登录/注册'
    }
  },
  {
    path: '/store',
    component: lazy(() => import('../pages/Store')),
    name: 'store',
    meta: {
      title: 'daily-收藏'
    }
  },
  {
    path: '/update',
    component: lazy(() => import('../pages/Update')),
    name: 'update',
    meta: {
      title: 'daily-update'
    }
  },
  {
    path: '/zustand',
    name: 'zustand',
    component: lazy(() => import('../pages/zustand/index')),
    children: demoRoutes
  },
  {
    path: '*',
    component: lazy(() => import('../pages/404')),
    name: 'page404',
    meta: {
      title: '404'
    }
  }
]

export default routes