<template>
  <div class="container-main">
    <el-radio value="1" label="1">备选项</el-radio>
    <el-radio value="2" label="2">备选项</el-radio>
    <icon-alarm
      v-waves
      theme="multi-color"
      size="35"
      :fill="['#333', '#2F88FF', '#FFF', '#43CCF8']"
      :strokeWidth="3"
    />
  </div>
  <router-view />
</template>
<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'apps',
    components: {},
    setup() {
      let dialogVisible = ref(true)
      function setLog() {
        console.log(123)
      }
      return {
        setLog,
        dialogVisible
      }
    }
  })
</script>
<style lang="scss">
  @import 'styles/base';

  .container-main {
    color: $red-color;
    @include placeholderColor();
  }
</style>
