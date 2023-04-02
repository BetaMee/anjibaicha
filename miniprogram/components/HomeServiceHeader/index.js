let app = getApp();

Component({
	/**
	 * 组件的初始数据
	*/
	data: {
		navHeight: app.globalData.navHeight,
		navTop: app.globalData.navTop,
		navButtonHeight: app.globalData.navButtonHeight
	},

	methods: {
		onTap: function () { //返回上一页
			wx.navigateBack({ delta: 1 })
		}
	}
})
