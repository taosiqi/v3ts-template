/**
 * 格式化时间-年月日 时分秒
 * @param date 时间字符串
 * @return 格式化的后时间
 */
function formatTime(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 格式化时间-年月日
 * @param date 时间字符串
 * @return 格式化后的年月日
 */
function year(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}

/**
 * 格式化时间-时分
 * @param date 时间字符串
 * @return  格式化后的时间
 */
function hour(date: Date): string {
  const hour = date.getHours()
  const minute = date.getMinutes()
  return [hour, minute].map(formatNumber).join(':')
}

function formatNumber(n: string | number) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 去掉字符串中所有空格
 * @param str 字符串
 * @param isGlobal 是否去掉中间空格
 * @return 去掉空格后的str
 */
function Trim(str: string, isGlobal = 'g'): string {
  let result = str.replace(/(^\s+)|(\s+$)/g, '')
  if (isGlobal == 'g') {
    result = result.replace(/\s/g, '')
  }
  return result
}

/**
 * 在js中if条件为null/undefined/0/NaN/""表达式时，统统被解释为false,此外均为true .
 * @param arg1 参数
 */
function isNull(arg: any): boolean {
  return !arg && arg !== 0 && typeof arg !== 'boolean' ? true : false
}

/**
 * 生成guid
 * @return guid
 */
function guid(): string {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}

/**
 * 获取localStorage
 * @param key localStorage的key
 * @return  格式化之后的localStorage
 */
function getItem(key: string): any {
  const local = localStorage.getItem(key)
  if (local) {
    return JSON.parse(local)
  }
  return ''
}

/**
 * 设置localStorage，会进行JSON.stringify
 * @param key localStorage的key
 * @param obj localStorage的value
 */
function setItem(key: string, obj: any) {
  localStorage.setItem(key, JSON.stringify(obj))
}

/**
 * 删除指定key的localStorage
 * @param key localStorage的key
 */
function removeItem(key: string) {
  localStorage.removeItem(key)
}

/**
 * url编码
 * @param str url
 * @return
 */
function urlEncode(str = ''): string {
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/%20/g, '+')
}

/**
 * url解码
 * @param str url
 * @return
 */
function urlDecode(str = '') {
  return decodeURIComponent(str.replace(/\+/g, '%20'))
}

/**
 * url参数提取
 * @param value
 * @return json {}
 */
function formatUrlData(value: string) {
  // 1. 监测是否传递参数
  if (value.indexOf('?') === -1) {
    return {}
  }
  const str = value.split('?')[1]

  const attr: any = {}
  // 空值检测 错误检测
  if (!str || str.indexOf('=') === -1) {
    return attr
  }
  // 1. 首先检测是否存在 & 符号 如果没有
  if (str.indexOf('&') === -1) {
    attr[str.split('=')[0]] = str.replace(/\s*/g, '').split('=')[1]
  } else {
    const arr = str.split('&')
    arr.forEach((v) => {
      attr[v.split('=')[0]] = v.replace(/\s*/g, '').split('=')[1]
    })
  }
  return attr
}

export { formatTime, hour, year, isNull, Trim, guid, getItem, setItem, removeItem, urlDecode, urlEncode, formatUrlData }
