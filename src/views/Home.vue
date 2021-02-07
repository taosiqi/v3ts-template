<template>
  <div class="home">home</div>
  <my-svg name="bill"></my-svg>
  <my-svg name="broadcast"></my-svg>
  <div>测试</div>
</template>

<script setup lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { getList } from '@/api/test'
  import { guid } from '@/utils/utils'
  import to from 'await-to-js'
  // ref:num = 100
  onMounted(async () => {
    const [err, data] = await to(getList({ path: '123', content: '123' }))
    console.log(data)
    console.log(err)
    console.log(guid())
  })
  // export default defineComponent({
  //   name: 'Home',
  //
  // })
</script>
