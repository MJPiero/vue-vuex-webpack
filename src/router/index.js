import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 首页
import home from './modules/home';

// 路由配置
const routers = new VueRouter({
    mode: 'hash',
    routes: [
        ...home, 
        { path: '*', redirect: '/home' }
    ]
});

export default routers;