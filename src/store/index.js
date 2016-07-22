import Vuex from 'vuex';
import Vue from 'vue';
import mutations from '../mutators';

// important, teaches Vue components how to
// handle Vuex-related options
Vue.use(Vuex);

const state = {
    count: 0
};

export default new Vuex.Store({
    state,
    mutations
});
