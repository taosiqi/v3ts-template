<template>
  <div class="container-main">
    <el-radio value="1" label="1">备选项</el-radio>
    <el-radio value="2" label="2">备选项</el-radio>
    <icon-alarm
      @click="setLog"
      class="totop"
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
  import { scrollTo } from '@/utils/scroll-to'

  export default defineComponent({
    name: 'apps',
    components: {},
    setup() {
      let dialogVisible = ref(true)
      function setLog() {
        scrollTo(0, 800)
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
    height: 3000px;
    color: $red-color;
    @include placeholderColor();
  }
  .totop {
    position: sticky;
    top: 100px;
  }
</style>
