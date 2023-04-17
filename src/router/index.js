import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '../views/BookDetail.vue'
import ItemList from '../views/ItemList.vue'
import NotFound from '../views/NotFound.vue'
import EmitPractise from '../views/EmitPractise.vue'
import EmitCountUp from '../views/EmitCountUp.vue'
import UserView from '../views/UserView.vue'
import UserProfile from '@/components/user/UserProfile.vue'
import UserPost from '@/components/user/UserPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/route-info',
    name: 'route-info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "RouteInfo" */ '../views/RouteInfo.vue')
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

export default router
