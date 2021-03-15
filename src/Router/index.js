import Vue from 'vue';
import Router from 'vue-router';
import store from '../Vuex/store';
Vue.use(Router);

// import lcm1 from "../components/LCM1.vue";
// import lcm2 from '../components/LCM2.vue';
// import lcm3 from '../components/LCM3.vue';
// import page404 from '../components/page404.vue'
//结合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载。

const UserProfile = { template: '<div>Profile</div>' };
const UserPosts = { template: '<div>Posts</div>' };

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue'),
            meta: { title: '自述文件', requireAuth: true },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/BaseIcon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/BaseTabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/BaseCharts.vue'),
                    meta: { title: 'ECharts图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/401',
                    component: () => import(/* webpackChunkName: "403" */ '../components/401.vue'),
                    meta: { title: '401' }
                },
                {
                    path: '/AjaxTest',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/SidebarAjaxTest.vue'),
                    meta: { title: 'Ajax使用' }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../components/login.vue')
        },
        {
            path: '/LCM1',
            name: 'LCM1',
            component: () => import(/* webpackChunkName: "LCM1" */ '../components/LCM1.vue')
        },
        {
            path: '/LCM2',
            name: 'LCM2',
            component: () => import(/* webpackChunkName: "LCM2" */ '../components/LCM2.vue')
        },
        {
            path: '/LCM3',
            name: 'LCM3',
            component: () => import(/* webpackChunkName: "LCM3" */ '../components/LCM3.vue'),
            children: [
                { path: ':id/profile', component: UserProfile },
                { path: ':id/posts', component: UserPosts }
            ]
        },
        {
            path: '*', // 页面不存在的情况下会跳到404页面
            redirect: '/dashboard'
        }
    ]
});

//你可以使用 router.beforeEach 注册一个全局前置守卫：
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        //如果to的路由是需要身份驗證的
        if (store.state.username) {
            //已经登录
            if (to.matched.some(record => record.meta.permission)) {
                // 如果是管理员权限则可进入
               store.state.username ==='admin'? next() : next('/401');
            } else {
                next();
            }
        } else {//没有登录就去登录
            next('/login');
        }
    } else {
        next();
    }
});

export default router;
