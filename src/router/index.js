import Vue from 'vue'
import Router from 'vue-router'
import UIController from '@/components/UIController'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/uicontroller',
      name: 'UIController',
      component: UIController
    }
  ]
})
