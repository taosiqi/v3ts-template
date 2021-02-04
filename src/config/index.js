//开发环境
const devState = {
  domain: 'http://192.168.1.189:3000/',
  userServer: 'http://192.168.1.94:19105/',
}

//测试环境
const testState = {
  domain: 'http://121.201.107.118:18012/',
  userServer: 'http://121.201.107.118:19105/',
}

//线上环境
const prodState = {
  domain: 'https://msvc.szkedun.cn/authApi/',
  userServer: 'https://msvc.szkedun.cn/userApi/',
}

module.exports = {
  projectState: devState ,
  name: 'Vue Element Template',
  port: 8888,
  isProduction: process.env.ENV === 'production',
}
