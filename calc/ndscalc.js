let body = window.document.getElementsByTagName('body')[0]
let head = window.document.getElementsByTagName('head')[0]

// Подключение скриптов в основной проект
function includesript(aFile){
  let script = window.document.createElement('script')
  script.src = aFile
  script.id = 'ltest'
  body.appendChild(script)
}
// Подключение стилей в основной проект
function includestyle(aFile, aRel, aAs){
  let style = window.document.createElement('link')
  style.href = aFile
  style.rel = aRel
  style.as = aAs 
  head.appendChild(style)
}

includestyle('https://online.business.ru/brucalc/css/app.194cb20d.css', 'stylesheet')
includestyle('https://online.business.ru/brucalc/css/app.194cb20d.css', 'preload', 'style')
includestyle('https://online.business.ru/brucalc/js/app.e77d08ba.js', 'preload', 'script')
includestyle('https://online.business.ru/brucalc/js/chunk-vendors.6233729f.js', 'preload', 'script')

includesript('https://online.business.ru/brucalc/js/chunk-vendors.6233729f.js')
includesript('https://online.business.ru/brucalc/js/app.e77d08ba.js')