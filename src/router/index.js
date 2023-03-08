import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layout/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/quienes-somos',
        name: 'about',
        component: () => import('../views/AboutUs.vue'),
      },
      {
        path: '/servicios',
        name: 'services',
        component: () => import('../views/Services.vue'),
      },
      {
        path: '/preguntas',
        name: 'asks',
        component: () => import('../views/FAQs.vue'),
      },
      {
        path: '/contacto',
        name: 'contact',
        component: () => import('../views/ContactUs.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'aboutView',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
