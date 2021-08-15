
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'Home', component: () => import('pages/Index.vue') },
      { path: '/',name:'Cadastro',  component: () => import('pages/Cadastro.vue') },
      { path: '/',name:'Clientes',  component: () => import('pages/Clientes.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
