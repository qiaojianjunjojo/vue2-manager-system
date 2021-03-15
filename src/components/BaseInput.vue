<template>
<div>
   <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
      id="text1"
    >
    <label for="text1">{{checked}}</label>
</div>
 
</template>

<script>
export default {
  model:{
      prop:'checked',
      event: 'change'
  },
  props:{
      checked: Boolean
  }
}
</script>

<style lang="">A
input {
  border-collapse: collapse;
  align-items: center;
}
</style>