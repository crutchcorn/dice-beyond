const dataEl = document.createElement('meta');
dataEl.name = "DiceBGHex";
dataEl.content = `#000000`;
document.body.appendChild(dataEl)

const el = document.createElement('script')
el.src = chrome.extension.getURL('web-accessible-resources/color-dice-xhr-intercept.js')
document.body.appendChild(el)
