import mySvg from '@/components/my-svg/index.vue'

// assets/icons下面的svg图标
export default (app: any) => {
  app.component('my-svg', mySvg)
}
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
const req = require.context('@/assets/icons', false, /\.svg$/)
requireAll(req)
