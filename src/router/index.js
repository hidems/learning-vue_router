import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeSub from '@/components/HomeSub.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '../views/BookDetail.vue'
import ItemList from '../views/ItemList.vue'
import NotFound from '../views/NotFound.vue'
import EmitPractise from '../views/EmitPractise.vue'
import EmitCountUp from '../views/EmitCountUp.vue'
import UserView from '../views/UserView.vue'
import UserProfile from '@/components/user/UserProfile.vue'
import UserPost from '@/components/user/UserPost.vue'
import XstateView from '../views/XstateView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      sub: HomeSub
    }
  },
  {
    path: '/route-info',
    name: 'route-info',
    component: () => import(/* webpackChunkName: "RouteInfo" */ '../views/RouteInfo.vue'),
    beforeEnter: (to, from, next) => {
      const answer = window.confirm('Do you really want to leave?')
      if (answer) {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id',
    name: 'BookDetail',
    component: BookDetail,
    props: route => ({
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content
    })
  },
  {
    path: '/item/:id',
    name: 'ItemList',
    component: ItemList
  },
  {
    path: '/emit',
    name: 'EmitPractise',
    component: EmitPractise
  },
  {
    path: '/emit/countup',
    name: 'EmitCountUp',
    component: EmitCountUp
  },
  {
    path: '/user',
    component: UserView,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'post',
        component: UserPost
      }
    ]
  },
  {
    path: '/Xstate',
    name: 'Xstate',
    component: XstateView
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
  next()
})

export default router
