import Vue from 'vue';
import store from './store';
import App from './App';
import { remarks } from './filters';

// Register Vue filters globally
Vue.filter('remarks', remarks);

new Vue({
    el: 'body',
    components: { App },
    // provide the store using the "store" option.
    // this will inject the store instance to all child components.
    store
});
