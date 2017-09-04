import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile/Profile'
import { store } from '../store/store';

Vue.use(Router)
Vue.use(store);

const routeAuthGuard = ((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.getLoggedIn) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
});

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: routeAuthGuard,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      redirect: {name: 'Home'}
    }
  ]
})
