import mySvg from '@/components/my-svg/index.vue'

//字节第三方图标库
export default (app: any) => {
  app.component('my-svg', mySvg)
}
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
const req = require.context('@/assets/icons', false, /\.svg$/)
requireAll(req)
