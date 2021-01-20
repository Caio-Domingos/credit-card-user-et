import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import cards from './modules/cards';
import brands from './modules/brands';
import categories from './modules/categories';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cards,
    brands,
    categories,
  },
});
