Component({
	/**
	 * 组件的初始数据
	*/
	properties: {
    visible: {
      type: Boolean,
      value: false,
    }
  },
	data: {},

	methods: {
		onVisibleChange: function (e) {
			this.triggerEvent('onVisibleChange', { visible: e.detail.visible });
		}
	}
})
