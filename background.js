function clickHandler() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {"message": "eiz_redirect"});
	});
}

chrome.browserAction.onClicked.addListener(clickHandler);
