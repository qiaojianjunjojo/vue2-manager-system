<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input type="text" name="" id="username" v-model="username" />
      <label for="password">password</label>
      <input type="password" name="" id="password" v-model="password" />
      <button class="btn" @click="login">Login</button>
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      msg:null
    };
  },
  methods: {
    login() {
      //省略從API驗證username,password
      if (true) {
        this.$store.commit("mutationUserchange", this.username);
        this.$router.push("/index");
      }else{
          this.msg = '用戶名/密碼錯誤！'
      }
    },
  },
};
</script>

<style scoped>
    .login{
        text-align: center;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
    }
    .form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 23px;
    }
    .btn{
        display: block;
        width: 100%;
        background-color: springgreen;
        height: 20px;
    }
    input{
        border:1px solid green;
        height: 25px;
    }
</style>