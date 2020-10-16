const dataEl = document.createElement('meta');
dataEl.name = "DiceBGHex";
dataEl.content = `#000000`;
document.body.appendChild(dataEl)

chrome.storage.sync.get(['backgroundHex'], function(result) {
    dataEl.content = result.backgroundHex;
});

const el = document.createElement('script')
el.src = chrome.extension.getURL('web-accessible-resources/color-dice-xhr-intercept.js')
document.body.appendChild(el)
