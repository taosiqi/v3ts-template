import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 第三方库 element iconPark均为按需引入
import element from './plugin/element'
import iconPark from './plugin/icon-park'
import mySvg from './plugin/my-svg'
import mitt from 'mitt' //组件通信
import nprogress from './plugin/nprogress'
// 创建App实例
const app = createApp(App)

// 调用
element(app)
iconPark(app)
mySvg(app)
nprogress(router)
// 挂载全局
app.config.globalProperties.$emitter = mitt() //挂载到全局

app.use(store).use(router).mount('#app')
