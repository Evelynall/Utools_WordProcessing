// 创建一个全局变量
let pluginPayload = null;

utools.onPluginEnter(({ payload }) => {
    // 将payload值存储在全局变量中
    pluginPayload = payload;

    // 调用index.html中的setInputValue函数，并传递payload值
    if (typeof window.setInputValue === 'function') {
        window.setInputValue(payload);
    }
});
