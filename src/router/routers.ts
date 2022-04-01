import { lazy } from 'react';
export const routers = [
  {
    path: '/home',
    name: '首页',
    element: lazy(() => import('@/views/home'))
  },

  {
    path: '/todo',
    name: 'todo',
    element: lazy(() => import('@/views/todo'))
  },
  {
    path: '/result/success',
    name: '成功页面',
    element: lazy(() => import('@/views/result/success'))
  },
  {
    path: '/result/error',
    name: '错误页面',
    element: lazy(() => import('@/views/result/error'))
  },
  {
    path: '/result/page403',
    name: 'page403',
    element: lazy(() => import('@/views/result/page403'))
  },
  {
    path: '/result/page404',
    name: 'page404',
    element: lazy(() => import('@/views/result/page404'))
  },
  {
    path: '/result/page500',
    name: 'page500',
    element: lazy(() => import('@/views/result/page500'))
  },
  {
    path: '/about',
    name: '关于',
    element: lazy(() => import('@/views/about'))
  }
];
