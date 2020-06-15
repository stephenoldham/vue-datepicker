import Vue from 'vue';
import Docs from './docs.vue';

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(Docs),
}).$mount('#app');
