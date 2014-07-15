chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    var url = location.href;
    window.rss_link = url;
    response(url);
});
