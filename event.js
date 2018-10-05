vipUrls = {
    "云解析" : ["http://jiexi.92fz.cn/player/vip.php?url=", "http://jiexi.92fz.cn/player/jiexi.php?url=视频地址&ad=广告地址"]
}

// 添加右键菜单
chrome.contextMenus.create({
    "id" : "vip video parser",
    "title" : "vip视频解析",
})

// 单击右键菜单时执行解析操作，并发送url到内容脚本
chrome.contextMenus.onClicked.addListener(function (menuItem) {
    var videoUrl = menuItem.pageUrl;
    for (var vipUrlsKey in vipUrls) {
        var parseUrls = vipUrls[vipUrlsKey];
        var parseUrl = parseUrls[0] + videoUrl;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"url": parseUrl});
        });
    }
});