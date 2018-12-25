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
  // 自带的tabBar的样式不灵活，需要自己封装tabBar组件
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

## 小程序的页面生命周期

```js
page({
  //页面初始化的数据
  data:{},
  // 生命周期函数：
  // 页面加载的时候触发一次，参数为打开页面路径中的参数
  onLoad:function(Object query){},
  // 在页面显示/切入的时候触发
  onShow:function(){},
  // 页面初次渲染完成时触发,一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
  onReady(){}

})
```

## 封装 tabBar 组件（缺点在点击页面跳转的时候会闪白）

### tabBar 需求

- 1.position 设置为 top 时，icon 不显示，
- 2.tabBar 的数组 list 最少为 2 个，最多为 5 个还需要按照数组的顺序排序

### 开发

- 1.新建一个 template.wxml(写 tabBar 的结构)
- 2.在 app.wxss 里写 tabBar 写样式
- 3.在 app.js 里 自定义 tabBar 的一些配置，默认是选中第一个
- 4.在需要的页面调用
- 5.需要在点击 tabBar 的时候获取 pagePath 然后跳转到对应的页面，需要通过 getCurrentPages()得到当前点击的 tabbar 的路径

## 逻辑层

- 1.App({obj}),是用来注册微信小程序的，只有在app.js里调用，且只调用一次
- 2.在App中指定微信小程序的`生命周期`，也可以自定义函数到object中，但是官方说用this可以调用，但是实际上不可以，需要获取App实例`getApp()`,然后调用App中的函数

```js
obj参数说明：
App({
  onLaunch(){},//生命周期回调——监听小程序初始化 ，小程序初始化完成时触发（全局只触发一次）
  onShow(){},//生命周期回调——监听小程序的显示，小程序显示或者重后台进入前台显示时触发
  onHide(){},//生命周期回调——监听小程序的隐藏，小程序重前台进入后台时
  onError(){},//错误监听函数——小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息
  onPagenotFound(){}//页面不存在监听函数，小程序打开页面不存在时触发会带上页面信息回调该函数

})

```
