import Vue from 'vue'
import App from './App.vue'
import router from "../router/router";
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faHatWizard
} from '@fortawesome/free-solid-svg-icons'
import {
  faMoon
} from '@fortawesome/free-solid-svg-icons'
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import {
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
import {
  faFilter
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faHatWizard, faMoon, faSearch, faFilter, faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')