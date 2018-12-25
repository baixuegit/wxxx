//app.js
App({
  // 微信小程序初始化完成时触发，在事件参数e中可以获取小程序的启动参数与wx.getLaunchOptionsSync()一致
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 从后台进入前台的时候触发，事件参数获取到小程序的启动参数，wx.onAppShow()一致
  onShow(e){
    // console.log('onshow',e)
  },
  // 从前台进入后台时触发，和wx.onApphide()一致
  onHide(e){
  },
  
  globalData: {
    userInfo: null
  },
  // 自定义tarbar
  tabbar: {
    color: '#242424',
    selectedColor: '#fa8582',
    backgroundColor: 'pink',
    borderStyle: '#ccc',
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        iconPath: '/static/icon/ai.png',
        selectedIconPath: '/static/icon/ai2.png',
        selected: true
      },
      {
        pagePath: '/pages/logs/logs',
        text: '发布',
        iconPath: '/static/icon/ai.png',
        selectedIconPath: '/static/icon/ai2.png',
        selected: false
      },
      {
        pagePath: '/pages/logs/logs1',
        text: '我的',
        iconPath: '/static/icon/ai.png',
        selectedIconPath: '/static/icon/ai2.png',
        selected: false
      }
    ],
    position: 'bottom'
  },
  changeTabBar: function() {
    var _curPageArr = getCurrentPages()
    var _curPage = _curPageArr[_curPageArr.length - 1]
    var _pagePath = _curPage.__route__
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath
    }
    console.log(_curPageArr)
    var tabBar = this.tabbar
    for (var i = 0; i < tabBar.list.length; i++) {
      console.log(_pagePath + '--' + tabBar.list[i].pagePath)
      tabBar.list[i].selected = false
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].selected = true //根据页面地址设置当前页面状态
      }
    }
    _curPage.setData({
      tabbar: tabBar
    })
  },
})
