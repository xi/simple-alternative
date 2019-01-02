(function() {
	"use strict";
	chrome.browserAction.disable();

	chrome.runtime.onMessage.addListener(function(request, sender) {
		if (request === 'showPageAction' && sender) {
			chrome.browserAction.enable(sender.tab.id);
		}
	});

	chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.sendMessage(tab.id, 'simplify');
	});
})();
