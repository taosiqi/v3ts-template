import clipboard from '@/directives/clipboard/clipboard'

// 注册全局自定义指令
const directive = [clipboard]

export default (app: any) => {
  directive.forEach((directive) => {
    app.directive(directive.name, directive)
  })
}
