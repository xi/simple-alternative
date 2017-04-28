(function() {
	"use strict";

	var lang = document.documentElement.lang;
	var selector = '[rel="alternate"][hreflang="' + lang + '-simple"][href]'
	var link = document.querySelector(selector);

	if (link) {
		chrome.runtime.sendMessage('showPageAction');
	}

	chrome.runtime.onMessage.addListener(function(request) {
		if (request === 'simplify') {
			document.location.href = link.href;
		}
	});
})();
