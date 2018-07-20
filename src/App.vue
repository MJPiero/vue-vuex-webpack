<style lang="scss">
    @import './sass/base';
</style>
<template>
    <div id="MobApp">
        <keep-alive><HeaderMenu></HeaderMenu></keep-alive>
        <div class="mob-container">
            <div class="mob-leftnav">
                <Menu theme="dark" width="180" @on-select="selectMenu" :active-name="activeTab" :open-names="activeSubmenu" accordion>
                    <Submenu v-for="submenuItem in menuLists" :key="submenuItem.key" :name="submenuItem.key">
                        <template slot="title">
                            <span>{{submenuItem.name}}</span>
                        </template>
                        <MenuItem v-for="menuItem in submenuItem.child" :key="menuItem.key" :name="menuItem.key"><i class="tip"></i>{{menuItem.name}}</MenuItem>
                    </Submenu>
                </Menu>
            </div>
            <div class="mob-page">
                <div class="mob-page-content" :style="{'height': selfHeight}">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderMenu from 'common/header';

export default {
    components: {
        HeaderMenu
    },
    data(){
        return {
            // 菜单列表
            menuLists: [
                {
                    name: "一级目录",
                    key: "menu1",
                    child: [
                        {
                            name: "二级目录",
                            key: "menu1-child1",
                        }
                    ]
                }
            ],
            activeTab: 'menu1-child1',
            activeSubmenu: ['menu1'],
            // IE和火狐浏览器会出现滚动条不显示的问题，对IE和火狐滚动条的兼容
            selfHeight: 'inherit'   
        }
    },
    mounted(){
        this.pageInit();
    },
    methods: {
         pageInit(){
             this.selfHeight = document.querySelector('.mob-page-content').clientHeight + 'px';
         }
    }
}
</script>
