import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/posts/create',
    name: 'posts.create',
    component: () => import('../views/posts/Create.vue'),
  },
  {
    path: '/posts/edit/:id',
    name: 'posts.edit',
    component: () => import('../views/posts/Edit.vue'),
  },
  {
    path: '/posts/show/:id',
    name: 'posts.show',
    component: () => import('../views/posts/Show.vue'),
  },
  {
    path: '/auth/signin',
    name: 'auth.signin',
    component: () => import('../views/auth/SignIn.vue'),
  },
  {
    path: '/auth/signup',
    name: 'auth.signup',
    component: () => import('../views/auth/SignUp.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
