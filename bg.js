(function() {
	"use strict";

	chrome.runtime.onMessage.addListener(function(request, sender) {
		if (request === 'showPageAction' && sender) {
			chrome.pageAction.show(sender.tab.id);
		}
	});

	chrome.pageAction.onClicked.addListener(function(tab) {
		chrome.tabs.sendMessage(tab.id, 'simplify');
	});
})();
