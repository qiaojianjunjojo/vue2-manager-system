<template>
  <div>
    <!-- 標題組件 -->
    <Header fab="LCM3"></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <h4>產能</h4>
          <!-- 入庫達成率組件 -->
          <Shiprate owner="陳景瑞" fab="LCM3"></Shiprate>
          <!-- 達產率組件 -->
          <Reachrate owner="邱傳升" fab="LCM3" process="BEOL"></Reachrate>
          <Reachrate
            owner="邱傳升/陳維金/邱鹿"
            fab="LCM3"
            process="LCM"
          ></Reachrate>
          <Reachrate owner="陳維金/邱鹿" fab="LCM3" process="SET"></Reachrate>
        </li>
        <li>
          <h4>效能</h4>
          <p>嵌套路由功能演示：
            <router-link to="/LCM3/foo/profile" replace>profile</router-link>
            <router-link to="/LCM3/bar/posts" replace>posts</router-link>
          </p>
          <p>User:{{$route.params.id}}</p>
            <button @click="profile">路由跳轉profile</button><button @click="posts">路由跳轉posts</button>
          <router-view ></router-view>
          <!-- 出勤人力組件 -->
          <!-- API复判系统組件 -->
          <!-- IPM機台點檢系統監控組件 -->
          <!-- OQC判退組件 -->
        </li>
        <li>
          <h4>質能</h4>
          <!-- 良率組件 -->
          <!-- 制損報廢率 組件 -->
          <!-- IMP通报組件 -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "./common/header.vue";
import Shiprate from "./common/shippingrate.vue";
import Reachrate from "./common/reachrate.vue";

export default {
  components: { Header, Shiprate, Reachrate },
  methods:{
      profile(){
          this.$router.push('/LCM3/bar/profile')
      },
      posts(){
          this.$router.push('/LCM3/tar/posts')
      },
  }
};
</script>

<style lang="">
.mainbox {
  padding: 0px 2px 0 2px;
  width: 100%;
  height: 500px;
}
.clearfix {
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
}
.mainbox > ul > li {
  width: 32%;
}
li {
  list-style-type: none;
}

h4 {
  text-align: center;
  font-size: 26px;
}
</style>