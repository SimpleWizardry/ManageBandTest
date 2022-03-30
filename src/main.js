
import Vue from 'vue'

import Vuex from 'vuex';

import App from './App'
import router from './router'
import {store} from './store';


//import { MdButton, MdContent, MdTabs, MdMenu, MdTable, MdCard} from 'vue-material/dist/components'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)
// Vue.use(MdMenu)
// Vue.use(MdTable)
// Vue.use(MdCard)
// Vue.use(MdTableRow)

Vue.use(VueMaterial)

Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})




