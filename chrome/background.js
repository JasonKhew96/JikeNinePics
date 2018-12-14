chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'loading') {
        chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
            for (var i = 0; i < details.requestHeaders.length; ++i) {
                if (details.requestHeaders[i].name === 'App-Version') {
                    details.requestHeaders[i].value = '4.4.0'
                }
            }
            return {
                requestHeaders: details.requestHeaders
            }
        }, {
            urls: ['https://app.jike.ruguoapp.com/1.0/*']
        }, ['blocking', 'requestHeaders'])
    }
})