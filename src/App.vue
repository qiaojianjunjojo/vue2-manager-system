<template>
  <div id="app">
    <!-- <p class="username">Welcome:{{ $store.state.username }}</p> -->
    <!-- <BaseInput v-model="lovingVue"></BaseInput> -->
    <!-- <button @click="increment(10)">++++++</button>
    <button @click="decrement(10)">------</button>
    <button @click="asyncincrement(5)">+++5</button>
    <button @click="asyncdecrement(5)">---5</button>
    <p>{{ getcount }}</p>
    <p>{{ $store.getters.getCount }}</p> -->
    <!-- <p>
      <router-link to="/LCM1">LCM1</router-link>
      <router-link to="/LCM2">LCM2</router-link>
      <router-link to="/LCM3">LCM3</router-link>
      <router-link to="/user">User</router-link>
    </p> -->
    <!-- <router-link to="/user">User</router-link> -->
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import BaseInput from './components/BaseInput'

export default {
  name: "app",
  components:{BaseInput},
  data() {
    return {
      
      msg: "Welcome to Your Vue.js App",
      lovingVue:false
    };
  },
  methods: {
    increment(n) {
      this.$store.commit("mutationsAddCount", n);
    },
    decrement(n) {
      this.$store.commit("mutationsReduceCount", n);
    },
    asyncincrement(n) {
      this.$store.dispatch("actionsAddCount", n);
    },
    asyncdecrement(n) {
      this.$store.dispatch("actionsReduceCount", n);
    },
  },
  computed: {
    getcount() {
      return this.$store.state.count; //子组件能通过 this.$store 访问到 共享數據
    },
  },
};
</script>

<style>
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css";     深色主题

#app {
  /* font-family: "微软雅黑"; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(./assets/bg.jpg);
  background-repeat: no-repeat;
  height: 100vh;
  /* color: white; */
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.username{
    position: absolute;
    z-index: 20;
    right: 20px;
    color: rgb(23, 233, 16);
}
</style>
