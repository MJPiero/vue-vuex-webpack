/**
 * —— 首页
 *  | —— 页面1
 */

import home from 'modules/home';

export default [
    // 页面1
    {
        name: 'home',
        path: '/home',
        meta:{ tab:'menu1-child1', opensubmenu:['menu1']},
        component: home
    },
];