import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import JwPagination from 'jw-vue-pagination';

import {
  faTimes,
  faPlus,
  faEdit,
  faUser,
  faCheck,
  faUpload,
  faExclamationCircle,
  faCreditCard,
  faArrowLeft,
  faSearch,
  faEnvelope,
  faLock,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

require('@/assets/bulma.scss');

library.add(
  faPlus,
  faTimes,
  faEdit,
  faUser,
  faCheck,
  faUpload,
  faExclamationCircle,
  faCreditCard,
  faArrowLeft,
  faSearch,
  faEnvelope,
  faLock,
  faDollarSign
);
// register jw pagination component globally
Vue.component('jw-pagination', JwPagination);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
