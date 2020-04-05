import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import GameWindow from './components/GameWindow.vue'
import Settings from './components/Settings.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/gamewindow', component: GameWindow },
  { path: '/settings', component: Settings }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
