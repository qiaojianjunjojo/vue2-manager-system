<template>
  <div class="lightgroup">
    <span class="processname">{{ lightdata.process }}</span>
    <span class="ratepercent">{{lightdata.rate}}</span>
    <div class="lightcontainer">
      <div class="red"></div>
      <span>*{{lightdata.rednum}}</span>
      <div class="yellow"></div>
      <span>*{{lightdata.yellownum}}</span>
      <div class="green"></div>
      <span>*{{lightdata.greennum}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return{
          msg:[]
      }
  },
  props: ["lightdata"],
};
</script>

<style lang="" scoped>
.lightgroup {
  width: 100%;
  border-bottom: 1px dotted rgb(189, 183, 183);
}
.lightcontainer {
  float: right;
  margin-right: 15px;
  width: 25%;
  display: flex;
}
.ratepercent{
    float: right;
}
.green {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: green;
  margin: 0 auto;
}

.red{
     width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: red;
    margin: 0 auto;
}
.yellow{
     width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: yellow;
    margin: 0 auto;
}
</style>