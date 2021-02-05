import Clipboard from 'clipboard'

if (!Clipboard) {
  throw new Error('you should npm install `clipboard` --save at first ')
}
let successCallback: Function | null
let errorCallback: Function | null
let clipboardInstance: Clipboard | null

export default {
  name: 'clipboard',
  mounted(el: any, binding: any) {
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
      clipboardInstance.on('success', (e: any) => {
        const callback = successCallback
        callback && callback(e)
      })
      clipboardInstance.on('error', (e: any) => {
        const callback = errorCallback
        callback && callback(e)
      })
    }
  },
  update(el: any, binding: any) {
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
  unmounted(_: any, binding: any) {
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
