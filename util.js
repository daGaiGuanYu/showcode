let __sharedData = null
export function sharedData() {
  if(__sharedData) return __sharedData

  __sharedData = {}
  location.search.slice(1).split('&').forEach( kv => {
    const [k, v] = kv.split('=')
    __sharedData[k] = uuuunescape(v)
  })
  return __sharedData
}
// 无限层级的 unescape（有些网站会对链接的参数值进行 escape）
function uuuunescape(str) {
  let result = unescape(str)
  return result == str ? result : uuuunescape(result)
}

// 按 id 获取原生 dom
export function $(id) {
  return document.getElementById(id)
}