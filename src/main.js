import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

Vue.config.productionTip = false
import vueSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'

Vue.use(vueSwiper)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
