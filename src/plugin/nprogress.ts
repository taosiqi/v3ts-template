// 页面加载进度条
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

export default (router: any) => {
  router.beforeEach(() => {
    NProgress.start()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
