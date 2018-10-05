vipUrls = {
    "云解析" : ["http://jiexi.92fz.cn/player/vip.php?url=", "http://jiexi.92fz.cn/player/jiexi.php?url=视频地址&ad=广告地址"]
};

const readMeUrl = "https://github.com/BoyceLiu/vip-video-parser/blob/master/README.md";

// 添加视频解析菜单
chrome.contextMenus.create({
    "id" : "vip video parser",
    "title" : "vip视频解析",
})

// 添加help菜单
chrome.contextMenus.create({
    "id" : "help menu",
    "title" : "如何使用"
});

// 单击右键菜单时执行下列操作
chrome.contextMenus.onClicked.addListener(function (menuItem) {
    if (menuItem.menuItemId == "vip video parser") {
        // 发送url到内容脚本
        var videoUrl = menuItem.pageUrl;
        for (var vipUrlsKey in vipUrls) {
            var parseUrls = vipUrls[vipUrlsKey];
            var parseUrl = parseUrls[0] + videoUrl;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {"url": parseUrl});
            });
        }
    } else if (menuItem.menuItemId == "help menu") {
        // 打开使用手册
        chrome.tabs.create({url: readMeUrl})
    }
});