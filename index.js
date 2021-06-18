var $html = document.getElementById('html')
var $css = document.getElementById('css')
var $js = document.getElementById('js')

var $iframe = document.getElementsByClassName('show')

function run() {
  sync($html.value, $css.value, $js.value)
}

function sync(html, css, js) {
  $iframe[0].srcdoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `
}

function share() {
  navigator.clipboard.writeText(
    location.href.split('?')[0]
      + `?html=${escape($html.value)
      }&css=${escape($css.value)
      }&js=${escape($js.value)}`
  )
}


// 读取分享的内容
let search = location.search
search = search.split('&js=')
let js = unescape(search[1])
search = search[0].split('&css=')
let css = unescape(search[1])
search = search[0].split('?html=')
let html = unescape(search[1])
if(html || css || js) {
  $html.value = html
  $css.value = css
  $js.value = js
  sync(html, css, js)
}