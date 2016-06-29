var settings = new Store("settings", {
    "isAuto": true,
    "prefillText": ""
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (settings.get('isAuto') === "true" && request.initialize === true) {
    chrome.tabs.sendMessage(sender.tab.id, {action: "fill_comment", prefillText: settings.get('prefillText')}, function(response) {
      // console.log(response);
    });
  }
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  if (settings.get('isAuto') === "true" && /app.asana.com\/\d\/\d+\/\d+/.test(details.url)) {
    chrome.tabs.sendMessage(details.tabId, {action: "fill_comment", prefillText: settings.get('prefillText')}, function(response) {
      // console.log(response);
    });
  }
});

// chrome.browserAction.onClicked.addListener(goToInbox);
chrome.pageAction.onClicked.addListener(function() {
    if (settings.get('isAuto') === "false") {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabArray){
        chrome.tabs.sendMessage(tabArray[0].id, {action: "fill_comment", prefillText: settings.get('prefillText')}, function(response) {
          // console.log(response);
        });
      });
    }
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { urlContains: 'app.asana.com' },
        })
      ],
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});
