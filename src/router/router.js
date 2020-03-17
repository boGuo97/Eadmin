import layouAside from '@/layout/layout.vue'

// 在主框架内显示
const frameIn = [
  {
    path: '/a',
    name: 'a',
    meta: {
      title: '表格示例',
      index: 0
    },
    component:() => import('@/views/a.vue')
  },
  {
    path: '/b',
    name: 'b',
    meta: {
      title: '表单示例',
      index: 0
    },
    component:() => import('@/views/b.vue')
  },
  {
    path: '/c',
    name: 'c',
    meta: {
      title: 'c页面',
      index: 1
    },
    component:() => import('@/views/c.vue')
  },
  {
    path: '/d',
    name: 'd',
    meta: {
      title: 'd页面',
      index: 1
    },
    component:() => import('@/views/d.vue')
  },
  {
    path: '/e',
    name: 'e',
    meta: {
      title: 'e页面',
      index: 2
    },
    component:() => import('@/views/e.vue')
  },
  {
    path: '/f',
    name: 'f',
    meta: {
      title: 'f页面',
      index: 2
    },
    component:() => import('@/views/f.vue')
  },
  {
    path: '/g',
    name: 'g',
    meta: {
      title: 'g页面',
      index: 3
    },
    component:() => import('@/views/g.vue')
  }
];

// 导出需要显示的菜单
export const frameInRoutes = frameIn

export default [
  {
    path: '/',
    redirect: { name: 'a' },
    component: layouAside,
    children: [
      ...frameIn
    ]
  }
]