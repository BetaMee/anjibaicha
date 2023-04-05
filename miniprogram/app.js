App({
  onLaunch: function () {
    //获取胶囊按钮的信息  {高度，距离头部高度，距离底部高度}
    const { height, top } = wx.getMenuButtonBoundingClientRect();
    //  获取手机系统信息
    wx.getSystemInfo({
      success: res => {
        // 参考：https://blog.csdn.net/qq_48085286/article/details/120982572
        //手机状态栏高度
        const statusBarHeight  = res.statusBarHeight;
        //导航高度
        this.globalData.navHeight =  statusBarHeight +  height  + (top -  statusBarHeight)*2;
        this.globalData.navTop  = top; // 胶囊距离顶部距离
        this.globalData.navButtonHeight =  height; // 胶囊本身的高度
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {  // 设置全局变量
    navHeight: 0, // 导航栏高度
    navTop: 0, // 胶囊距顶部的高度
    navButtonHeight: 0, //胶囊的高度
  }
})