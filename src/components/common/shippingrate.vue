<template>
  <div id="shipping">
    <div class="shiphead">
      <span class="shititle">入庫達成率</span>
      <span class="shipowner">Owner:{{ owner }}</span>
    </div>
    <div class="shipcontainer">
      <table class="shiptable">
        <tr>
          <th>廠別</th>
          <th>料號</th>
          <th>出貨日期</th>
          <th>出貨時間</th>
          <th>等級</th>
          <th>出貨數量</th>
          <th>目前庫存</th>
          <th>preReach</th>
          <th>燈號預警</th>
        </tr>
        <tr v-for="detail in details" :key="detail.category">
          <td>{{ detail.fabName }}</td>
          <td>{{ detail.productID }}</td>
          <td>{{ detail.shipDate }}</td>
          <td>{{ detail.shipTime }}</td>
          <td>{{ detail.grade }}</td>
          <td>{{ detail.shipCnt }}</td>
          <td>{{ detail.inventory }}</td>
          <td>{{ detail.predictFinshTime }}</td>
          <td><div :class="detail.warmingVal"></div></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [],
      urls: {
        LCM1: "",
        LCM2: "http://10.189.127.62:40012/LCM2ShippingInfo/?fabname=LCM2",
        LCM3: "",
      },
    };
  },
  props: ["owner", "fab"],
  mounted() {
    this.$http
      .get(
        this.urls[this.fab],
        {},
        {
          headers: {},
          emulateJSON: true,
        }
      )
      .then(
        function (response) {
          // 这里是处理正确的回调
          this.details = response.data.shipInfo;
          // this.articles = response.data["subjects"] 也可以
        },
        function (response) {
          // 这里是处理错误的回调
          console.log(response);
        }
      );
  },
};
</script>

<style lang="">
.shititle {
  font-size: 24px;
}
.shipowner {
  font-size: 18px;
  float: right;
  padding-top: 5px;
}
.shipcontainer {
  height: 200px;
  width: 100%;
  overflow-y: scroll;
  background-color: rgba(143, 15, 58, 0.3);
}
.shiptable {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2px;
}
.shiptable th {
  position: sticky;
  top: 0px;
  text-align: center;
  background-color: green;
  border-style: none solid;
  border-color: rgb(97, 16, 228);
  border-width: 1px;
}
.shiptable td {
  border: 1px solid rgba(6, 50, 247, 0.5);
  text-align: center;
}
.green{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: green;
    margin: 0 auto;
}
</style>