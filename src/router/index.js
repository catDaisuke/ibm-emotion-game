import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageRtc from '@/components/PageRtc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageRtc',
      component: PageRtc
    }
  ]
})
