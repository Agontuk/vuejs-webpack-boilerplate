import Vuex from 'vuex';
import Vue from 'vue';

// important, teaches Vue components how to
// handle Vuex-related options
Vue.use(Vuex);

const state = {
    count: 0
};

const mutations = {
    INCREMENT (state) {
        state.count++;
    },
    DECREMENT (state) {
        state.count--;
    }
};

export default new Vuex.Store({
    state,
    mutations
});
