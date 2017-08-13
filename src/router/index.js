import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CountersPage from '@/components/CountersPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/child-parent-counters/',
      name: 'Child and Parent bindings',
      component: CountersPage
    }
  ]
})
