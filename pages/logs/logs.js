//logs.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    tabbar: {}
  },
  onLoad: function () {
    //调用app.js中的函数
    app.changeTabBar()
    
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
