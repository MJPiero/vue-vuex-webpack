import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {};
const getters = {};
const actions = {};
const mutations = {};

const debug = __ENV__ == 'dev';

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    // 命名空间
    //  modules: {},
    strict: debug,
    middlewares: debug ? [] : [] 
})