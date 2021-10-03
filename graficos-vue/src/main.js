import Vue from 'vue'
import App from './App.vue'
import Chartkick from 'vue-chartkick' //import para os graficos aparecerem de forma global
import Chart from 'chart.js'

//import VueChartkick from 'vue-chartkick'
//import 'chartkick/chart.js' //para quando usar vue3..
//Vue.use(VueChartkick)

Vue.use(Chartkick.use(Chart)) //implementa globalmente o chartjs e chartkick no projeto

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
