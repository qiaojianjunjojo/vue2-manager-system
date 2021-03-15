# Vue后台管理系统 demo

>记录自己跟着开源项目(https://github.com/lin-xin/vue-manage-system)一步一步自己搭建项目，学习vue2/vue-cli3用法；耗时2周;因为我本人是做python後端偏多,前端也是刚学
对其中的一些知识的使用做了比较详细的注释说明.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 项目截图
### Echarts
![Image text](https://github.com/qiaojianjunjojo/vue2-manager-system/blob/master/src/assets/1.PNG)

### axios
![Image text](https://github.com/qiaojianjunjojo/vue2-manager-system/blob/master/src/assets/2.PNG)
## 项目使用到的技术点：

1.vue-router(https://router.vuejs.org/zh/guide/#html)  
使用```<router-link to>``` 创建 a 标签来定义导航链接  
router.push,router.replace,router.go进行编程式的导航  
路由重定向redirect来导航不存在的页面  
html5的history hash模式  
路由导航守卫router.beforeEach  
结合 Vue 的异步组件和 Webpack 的代码分割功能，实现路由组件的懒加载  
  
2.vue-x 状态管理模式(https://vuex.vuejs.org/zh/)  
项目中使用state对象的username来全局管理当前登陆的用户。  
  
3.bus中央事件总线实现组件之间的参数传递(https://blog.csdn.net/wy01272454/article/details/77756079)。  
组件之间的参数传递方式有多种，项目这里用到了 props/emit父子传参,bus,vuex  
  
4.element-ui  
刚开始自己写了一些样式，后来懒得写了，就直接用element-ui了。  
  
5.ECharts 图表库  
  
6.使用 axios 访问 API
  
7.vue2  
基础指令v-if,v-else,v-for,v-html,v-bind,v-on,v-model,v-text使用  
```<keep-alive :include="['a', 'b']"> ```包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们  
生命周期钩子函数的使用  
单文件组件.vue   
风格指南(https://cn.vuejs.org/v2/style-guide/)  
vue2响应式原理  
  
8 vue devtools使用  
