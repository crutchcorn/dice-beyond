const el = document.createElement('script')
el.src = chrome.extension.getURL('web-accessible-resources/color-dice-xhr-intercept.js')
document.body.appendChild(el)
