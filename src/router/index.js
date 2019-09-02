import Vue from 'vue';
import NProgress from 'nprogress';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/views/Main'),
      name: 'Main'
    },
    {
        path: '/course',
        component: () => import('@/views/Course'),
        name: 'Course'
    },
    {
      path: '*',
      component: () => import('@/views/Main') // 404
    }
  ]
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;