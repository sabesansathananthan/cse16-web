import Vue from 'vue'
import Router from 'vue-router'

import Blogs from '@/components/main/Blogs'
import Home from '@/components/main/Home'
import Profile from '@/components/main/Profile'
import Resources from '@/components/main/Resources'
import Results from '@/components/main/Results'
import Students from '@/components/main/Students'

import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
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
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/results',
        name: 'Results',
        component: Results,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/students',
        name: 'Students',
        component: Students,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/resources',
        name: 'Resources',
        component: Resources
      },
      {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
      }
  ]
})

router.beforeEach((to, from, next) => {
  // check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if(user) {
      // user signed in, proceed to route
      next()
    } else {
      // no user signed in, redirect to login
      next({ name: 'Home' })
    }
  } else {
    next()
  }
})

export default router