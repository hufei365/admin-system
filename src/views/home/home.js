import Vue from 'vue/dist/vue.common.dev';
import VueRouter from 'vue-router/dist/vue-router.common';
Vue.use(VueRouter);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import Nav from '../layout/left-aside/nav.vue';
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

new Vue({
    el: '#app',
    data(){
        return {
            value4:true,
            value3:true,
            isCollapse: false,
            mode: ''
        }
    },
    methods:{
        toggleMode(){
            this.isCollapse = !this.isCollapse;
            this.mode = this.mode==='icon-nav' ? '' : 'icon-nav';
        } 
    },
    components:{
        'left-nav':Nav
    },
    router
});