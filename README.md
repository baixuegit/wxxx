# 微信小程序学习笔记

## 目录结构

- 1.在小程序中包含一个描述整体程序的 APP 和 描述各自页面的 page
- 2.一个小程序主要有 3 个文件组成 app.js(小程序的页面逻辑) app.json(小程序的公共配置)app.wxss(小程序的页面公共样式)
- 3.一个页面由 js wxml json wxss 组成（为了方便开发者减少配置项，描述页面的四个文件必须具有相同的路径与文件名）

## 配置

- app.json 配置小程序的全局配置，文件路径，窗口表现，设置网络超时时间，设置多 tab 等

  ```js
  {
  "pages": ["pages/index/index", "pages/logs/index"],//配置页面路径
  "window": {//全局的默认窗口表现
    "navigationBarTitleText": "柏雪的小程序"// 小程序名
    "navigationBarBackgroundColor": "#ab3eb7",// 小程序title背景色
    "navigationBarTextStyle": "white",// 小程序title的文字颜色 white/black
    "backgroundColor": "#eeeeee"// 窗口的背景色
  },
  "tabBar": { // 底部tab栏那你的表现，配置最少2项
    "color":"#f00",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/logs/logs",
        "text": "日志"
      }
    ]
  },
  "networkTimeout": {// 超时时间
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true,
  "navigateToMiniProgramAppIdList": ["wxe5f52902cf4de896"]
  }
  ```
