import realtimeData from 'modules/realtimeData';
import Login from 'modules/login';
import Home from 'modules/home';

const routers = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'realtime',
    path: '/realtime',
    component: realtimeData
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  { path: '*', redirect: '/' }
];

export default routers;