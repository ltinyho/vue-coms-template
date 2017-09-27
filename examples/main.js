/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import kyyCom from '../src/index'

Vue.use(VueRouter)
Vue.use(kyyCom)

// 开启debug模式
Vue.config.debug = true

// 路由配置
const router = new VueRouter({
  routes: [
    {
      path: '/lesson',
      component: require('./routers/lesson-lists.vue')
    },
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
