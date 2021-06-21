// 基础功能：运行代码、分享代码
import { $, sharedData } from './util.js'
import blockList from './collapse.js'

const $html = $('html')
const $css = $('css')
const $js = $('js')

$html.value = sharedData().html || ''
$css.value = sharedData().css || ''
$js.value = sharedData().js || ''
run()

// 点击“运行”按钮
function run() {
  __run($html.value, $css.value, $js.value)
}
window.run = run

// 点击“分享”按钮
window.share = function() {
  navigator.clipboard.writeText(
    location.href.split('?')[0] +
      `?html=${escape($html.value)}&css=${escape($css.value)}&js=${escape($js.value)
      }&oHtml=${blockList[0].opened}&oCss=${blockList[1].opened}&oJs=${blockList[2].opened}`
  )
  alert('链接已复制到剪切板')
}

// 运行各 textarea 代码
function __run(html, css, js) {
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