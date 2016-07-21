import Vuex from 'vuex';
import Vue from 'vue';
import * as type from '../constants';
import { increment, decrement } from '../mutators';

// important, teaches Vue components how to
// handle Vuex-related options
Vue.use(Vuex);

const state = {
    count: 0
};

const mutations = {
    [type.INCREMENT]: (state, action) => {
        increment(state, action);
    },
    [type.DECREMENT]: (state, action) => {
        decrement(state, action);
    }
};

export default new Vuex.Store({
    state,
    mutations
});
