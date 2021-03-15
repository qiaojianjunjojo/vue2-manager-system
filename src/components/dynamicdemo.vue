<template>
  <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab;showinfo()"
    >
      {{ tab }}
    </button>
    {{currentTab}}
    <keep-alive>
     <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentTab: "Posts",
      tabs: ["Posts", "Archive"],
    };
  },
  methods:{
      showinfo(){
          if(this.currentTab=='Posts'){
              this.$router.push({name:'post'})
          }
          else{
              this.$router.push({name:'achieve'})
          }
          
      }
  }
};
</script>

<style lang="">
   .active{
    background-color: limegreen;
  }
</style>