var $html = document.getElementById('html')
var $css = document.getElementById('css')
var $js = document.getElementById('js')

var $iframe = document.getElementsByClassName('show')

function run() {
  $iframe[0].srcdoc = tmpl($html.value, $css.value, $js.value)
}

function tmpl(html, css, js) {
  return `
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