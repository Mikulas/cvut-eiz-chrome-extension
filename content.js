function handleEizRedirect() {
	console.debug('handleEizRedirect');

	var wl = window.location;
	var port = wl.port;
	var eizDomain = (port != '' ? port : 80) + '.' + wl.hostname + '.dialog.cvut.cz';

	var target = wl.protocol + "//" + eizDomain + wl.pathname + wl.search;
	window.location.assign(target);
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.message === "eiz_redirect") {
			handleEizRedirect();
		}
	}
);
