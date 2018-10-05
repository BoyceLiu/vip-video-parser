chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ? "来自内容脚本：" + sender.tab.url : "来自扩展程序");
    layer.open({
        type: 2,
        title: false, // 不显示title文本,
        closeBtn: 0,
        shade: 0.7,
        shadeClose: true,
        anim: 2,
        area: ['80%', '90%'],
        content: request["url"]
    });
});