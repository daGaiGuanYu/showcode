var $html = document.getElementById('html')
var $css = document.getElementById('css')
var $js = document.getElementById('js')

function run() {
  sync($html.value, $css.value, $js.value)
}

function sync(html, css, js) {
  document.querySelector('.show').srcdoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script type="text/javascript">${js}<\/script>
      </body>
    </html>
  `
}

function share() {
  navigator.clipboard.writeText(
    location.href.split('?')[0] +
      `?html=${escape($html.value)
      }&css=${escape($css.value)
      }&js=${escape($js.value)}`
  )
  alert('链接已复制到剪切板')
}

// 读取分享的内容
let search = location.search
search = search.split('&js=')
let js = uuuunescape(search[1] || '')
search = search[0].split('&css=')
let css = uuuunescape(search[1] || '')
search = search[0].split('?html=')
let html = uuuunescape(search[1] || '')
if(html || css || js) {
  $html.value = html
  $css.value = css
  $js.value = js
  sync(html, css, js)
}

// 工具
function uuuunescape(str) { // 有些网站会对链接的参数值进行 escape
  let result = unescape(str)
  return result == str
    ? result
    : uuuunescape(result)
}