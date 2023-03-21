let app = getApp();


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    imgSrc: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    navHeight: app.globalData.navHeight,
    navTop: app.globalData.navTop,
    navButtonHeight: app.globalData.navButtonHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function () {//返回上一页
      wx.navigateBack({
        delta: 1
      })  
    }
  }
})
