<template>
    <div>
        <Header />
        <Sidebar />
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <HTags />
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import bus from './bus';

import Header from './HomeHeader.vue';
import Sidebar from './HomeSIdebar.vue';
import HTags from './HomeTags.vue';

export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: { Header, Sidebar, HTags },
    created() {
        bus.$on('collapse-content', (msg) => {
            //通过homesidebar组件的折叠属性 来同步中间内容部分的left属性
            this.collapse = msg;
        });
        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', (msg) => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            //   console.log(arr)
            this.tagsList = arr;
        });
    }
};
</script>

