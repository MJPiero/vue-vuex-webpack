import Vue from 'vue'
import iView from 'iview'
import './sass/my-theme/dist/iview.css'

import VueRouter from 'vue-router'
import Routers from 'router'

import App from './App.vue'
import store from 'store'

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
	if(!store.state.user.isLogin && to.name != "login"){
		next({name: 'login'});
	}else{
        next()
    }
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

const app = new Vue({
	el: '#ASApp',
    router: router,
    store: store,
    render: h => h(App)
});