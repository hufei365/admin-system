import Vue from 'vue/dist/vue.common.dev';
import VueRouter from 'vue-router/dist/vue-router.common';
Vue.use(VueRouter);

import Dashboard from '../dashboard/dashboard.vue';
import Form from '../form/form.vue';

const routes = [{
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/form',
        component: Form
    }
]
const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router
});