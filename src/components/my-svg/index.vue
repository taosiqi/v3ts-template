<template>
  <svg class="mw-svg" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
  import { defineComponent, computed } from 'vue'
  export default defineComponent({
    name: 'my-svg',
    props: {
      name: {
        type: String,
        default: ''
      }
    },

    setup(props) {
      const iconName = computed(() => {
        return `#${props.name}`
      })
      return {
        iconName
      }
    }
  })
</script>
<style lang="scss" scoped>
  .mw-svg {
    width: 1.4em;
    height: 1.4em;
    fill: currentColor;
    overflow: hidden;
    line-height: 1em;
    display: inline-block;
  }
</style>
