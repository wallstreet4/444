
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'


import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  router
}).$mount('#app')
