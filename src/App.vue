<template>
  <div class="container-main">
    <el-radio value="1" label="1">备选项</el-radio>
    <el-radio value="2" label="2">备选项</el-radio>
    <icon-alarm
      theme="multi-color"
      size="35"
      :fill="['#333', '#2F88FF', '#FFF', '#43CCF8']"
      :strokeWidth="3"
    />
    <el-button type="primary" v-clipboard:copy="123" v-clipboard:success="setLog"
      >主要按钮
    </el-button>
  </div>
  <router-view />
</template>
<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'apps',
    components: {},
    setup() {
      function setLog() {
        console.log(123)
      }
      return {
        setLog
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
