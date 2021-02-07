import clipboard from '@/directives/clipboard/clipboard'
import permission from '@/directives/permission/permission'
import elDrag from '@/directives/el-drag/el-drag'
import waves from '@/directives/waves/waves'
// 注册全局自定义指令
const directive = [clipboard, permission, elDrag, waves]

export default (app: any) => {
  directive.forEach((directive) => {
    app.directive(directive.name, directive)
  })
}
