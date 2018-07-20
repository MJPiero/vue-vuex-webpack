import Vue from 'vue';
import router from 'router';

import iView from 'iview';
import './sass/analysdk-theme/dist/iview.css';

import App from './App.vue';
import store from 'store';

Vue.use(iView);

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

const app = new Vue({
    el: '#MobApp',
    router: router,
    store: store,
    render: h => h(App)
});