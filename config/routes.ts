export default [
  {
    path: '/',
    component: '../layouts/BasicLayout', // 主页加载layout公共组件
    routes: [
      { path: '/', redirect: '/welcome' },
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: 'grid',
        name: '响应式布局',
        component: './Grid',
      },
      {
        component: './404',
      },
    ],
  },
];
