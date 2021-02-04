import { Alarm } from '@icon-park/vue-next'

const components = [Alarm]
//字节第三方图标库
export default (app: any) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
