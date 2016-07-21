import Vuex from 'vuex';
import Vue from 'vue';
import { increment, decrement } from '../mutators';

// important, teaches Vue components how to
// handle Vuex-related options
Vue.use(Vuex);

const state = {
    count: 0
};

const mutations = {
    INCREMENT (state, action) {
        increment(state, action);
    },
    DECREMENT (state, action) {
        decrement(state, action);
    }
};

export default new Vuex.Store({
    state,
    mutations
});
