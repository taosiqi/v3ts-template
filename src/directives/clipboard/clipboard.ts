// <el-button type="primary" v-clipboard:copy="123" v-clipboard:success="setLog" v-clipboard:error="setLog">主要按钮</el-button>
import Clipboard from 'clipboard'
import { DirectiveBinding } from 'vue'
if (!Clipboard) {
  throw new Error('you should npm install `clipboard` --save at first ')
}
let successCallback: Function | null
let errorCallback: Function | null
let clipboardInstance: Clipboard | null

export default {
  name: 'clipboard',
  mounted(el: Element, binding: DirectiveBinding) {
    if (binding.arg === 'success') {
      successCallback = binding.value
    } else if (binding.arg === 'error') {
      errorCallback = binding.value
    } else {
      clipboardInstance = new Clipboard(el, {
        text() {
          return binding.value
        },
        action() {
          return binding.arg === 'cut' ? 'cut' : 'copy'
        }
      })
      clipboardInstance.on('success', (e: Clipboard.Event) => {
        const callback = successCallback
        callback && callback(e)
      })
      clipboardInstance.on('error', (e: Clipboard.Event) => {
        const callback = errorCallback
        callback && callback(e)
      })
    }
  },
  update(el: Element, binding: DirectiveBinding) {
    if (binding.arg === 'success') {
      successCallback = binding.value
    } else if (binding.arg === 'error') {
      errorCallback = binding.value
    } else {
      clipboardInstance = new Clipboard(el, {
        text() {
          return binding.value
        },
        action() {
          return binding.arg === 'cut' ? 'cut' : 'copy'
        }
      })
    }
  },
  unmounted(_: Element, binding: DirectiveBinding) {
    if (binding.arg === 'success') {
      successCallback = null
    } else if (binding.arg === 'error') {
      errorCallback = null
    } else {
      if (clipboardInstance) {
        clipboardInstance.destroy()
      }
      clipboardInstance = null
    }
  }
}
