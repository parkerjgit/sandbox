import Vue from 'vue'
import Router from 'vue-router'
import Quotes from '@/components/Quotes'
import Projects from '@/components/Projects'
import TestForm from '@/components/TestForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/testform',
      name: 'TestForm',
      component: TestForm
    }
  ]
})
