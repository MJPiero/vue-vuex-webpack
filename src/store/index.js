import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';
import realtime from './realtime';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  	user,
  	realtime
  }
});