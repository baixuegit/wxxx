//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lunboData: [
      { id: 'b1', imgUrl: '../../static/banner/1.png' },
      { id: 'b2', imgUrl: '../../static/banner/2.jpg' },
      { id: 'b3', imgUrl: '../../static/banner/3.jpg' }
    ],
    indicatorDots: true, //是否显示小圆点
    circular: true, //是否是无缝轮播
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    indicatorColor:'rgba(251,45,180,.3)',//小圆点的颜色
    indicatorActiveColor:'#e20000',//小圆点的选中的颜色
    inputShowed: false,
    inputVal: '',
    motto: '小程序你好！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabbar: {},
    navMenuList:[//配置菜单导航
      {id:'item1',text:'服装'},
      {id:'item2',text:'护肤'},
      {id:'item3',text:'美妆'},
      {id:'item4',text:'食品'},
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 加载页面
  onLoad: function() {
    //调用app.js中的函数
    app.changeTabBar()
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  upper(e) {
    // console.log('向上滚动' + e)
  },
  lower(e) {
    // console.log('向下滚动' + e)
  },
  scroll(e) {
    // console.log('滚动事件' + e)
  },
  // 点击banner触发的事件
  swipertap(e) {
    let _id = e.target.id
    console.log(_id)
    if(_id == 'b1'){
      console.log('这是第一张海报')
    }else if(_id == 'b2'){
      console.log('这是第二张海报')
    }else if (_id == 'b3') {
      console.log('这是第三张海报')
      // 跳转到自定义页面
      wx.navigateTo({
        url: '../logs/logs'
      })
      
    }
  }
})
