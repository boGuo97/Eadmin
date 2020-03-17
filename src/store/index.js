import Vue from "vue";
import Vuex from "vuex";

import theme from './modules/theme.js'
import tabs from './modules/tabs.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme,
    tabs
  }
});
