
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/PageTodo.vue') },
      { path: '/settings', component: () => import('pages/PageSettings.vue') },

      { path: '/index2', component: () => import('pages/index2.vue') },
      { path: '/index3', component: () => import('pages/index3.vue') },
      { path: '/todo', component: () => import('pages/todo.vue') },
      { path: '/helloWorld', component: () => import('pages/HelloWorld.vue') },
      { path: '/help', component: () => import('pages/help.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
