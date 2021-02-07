// <el-button type="primary" v-permission="{ action: 'create', effect: 'disabled' }" @click="setLog">主要按钮</el-button>
import { DirectiveBinding } from 'vue'

export default {
  name: 'permission',
  mounted(el: HTMLButtonElement, binding: DirectiveBinding) {
    if (binding.value == undefined) return
    const { action, effect } = binding.value
    // 如果action不传，则认为不需要授权认证
    if (action == undefined) {
      return
    }
    if (!hasPermission(action)) {
      if (effect == 'disabled') {
        el.disabled = true
        el.setAttribute('title', '没有权限')
      } else {
        el.remove()
      }
    }
  }
}

function hasPermission(action: string) {
  // 判断是否拥有权限
  return 1 !== 1
}
