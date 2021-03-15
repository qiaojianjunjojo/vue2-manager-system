import Vue from 'vue';

//中央事件總綫 來實現組件之間的通信；也可以使用Vuex 大型的狀態管理模式
// bus.$on 
// bus.$emit
const bus = new Vue();

export default bus;