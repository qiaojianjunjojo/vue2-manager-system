<template>
  <div class="header1">
    <h1>{{ fab }}製造管理系統</h1>
    <span class="time">{{ dateFormat(date) }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
  mounted() {
    var _this = this; //声明一个变量指向vue实例this,保证作用域一致
    this.timer = setInterval(function () {
      _this.date = new Date(); //修改数据date
    }, 1000);

  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); //在vue实例销毁钱，清除我们的定时器
    }
  },
  props: {
    fab: {
      type: String,
      required: true,
    },
  },
  methods: {
    dateFormat(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
  },
};
</script>

<style>
.header1{
  text-align: center;
  background: url(./head_bg.png) no-repeat center center;
  position: relative;
}

h1 {
  text-shadow: 0 0 5px rgb(50, 12, 223), 0 0 15px rgb(50, 12, 223),
    0 0 25px rgb(50, 12, 223);
    font-size: 3rem;
    font-family:'Times New Roman', Times, serif;
    padding: 3px 0px;
}

.time{
    position: absolute;
    right: 20px;
    top: 20px;
    color: rgb(16, 208, 233);
    font-size: 25px;
}
</style>