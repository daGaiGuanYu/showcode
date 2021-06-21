import { sharedData } from "./util.js"

// 三个 textarea 的 dom 及开闭状态
const list = Array.from(document.querySelectorAll('.block')).map( el => ({
  el,
  opened: 1
}))
list[0].opened = sharedData().oHtml == 0? 0:1
list[1].opened = sharedData().oCss == 0? 0:1
list[2].opened = sharedData().oJs == 0? 0:1

list.forEach( item => {
  // 按分享数据，旋转
  if(item.opened) rotate(item)
  // 添加点击 textarea 头部事件（开、合）
  item.el.addEventListener('click', function(event) {
    if(event.target instanceof HTMLTextAreaElement) return

    item.opened = item.opened ? 0:1
    rotate(item) // 旋转当前 header
    toggleTextarea() // textarea 展开与隐藏
  })
})

toggleTextarea()

function rotate(item) { // 旋转“展开按钮”
  item.el.querySelector('label div').classList.toggle('collapse')
}
function openedSum() { // 当前 textarea 展开的数量
  let sum = 0
  for(let item of list)
    if(item.opened) sum ++
  return sum
}
function toggleTextarea() { // 展开\闭合 textarea
  const sum = openedSum()
  const openedHeight = sum != 0
    && `calc(${(100 / sum).toFixed(2)}% - ${(3-sum) / sum * 2.5}rem)`
  for(let item of list)
    item.el.style.height = item.opened ? openedHeight : '2.5rem'
}

export default list