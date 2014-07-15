function showUrl(url) {
    var id = url.split('=')[1].split('PL');
    id = id[id.length-1];
    url = 'http://gdata.youtube.com/feeds/api/playlists/' + id;
    document.getElementById('url').textContent = url;
}
var rss_link = window.rss_link;
if (rss_link === null || rss_link === undefined) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                from: 'popup',
                subject: 'url'
            },
            showUrl
        );
    });
}
else showUrl(rss_link);
