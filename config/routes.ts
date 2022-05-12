export const routes = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    name: 'welcome',
    component: './Welcome',
  },
  {
    path: '/grid',
    name: '响应式布局',
    component: './Grid',
  },
  {
    path: '/react',
    name: 'React',
    routes: [
      {
        path: '/react/vdom',
        name: '虚拟DOM',
        component: './React/VDOM',
      },
    ],
  },
  {
    component: './404',
  },
];

export default [
  {
    path: '/',
    component: '../layouts/BasicLayout', // 主页加载layout公共组件
    routes,
  },
];
