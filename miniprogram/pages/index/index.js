const app = getApp();


Page({
  offsetTopList: [],
  data: {
    // 导航高度信息
    navHeight: app.globalData.navHeight,
		navTop: app.globalData.navTop,
    // 是否展示店铺信息浮层
    isShowShopInfo: false,
    // 是否展示购物车图标
    isShowAddCart: false,
    // 是否展示产品卡片
    isShowProductInfo: false,
    categories: [
      {
        label: '选项一',
        title: '标题一',
        icon: 'app',
        badgeProps: {}
      },
      {
        label: '选项二',
        title: '标题二',
        icon: 'app',
        badgeProps: {},
      },
      {
        label: '选项三',
        title: '标题三',
        icon: 'app',
        badgeProps: {},
      },
      {
        label: '选项三',
        title: '标题三',
        icon: 'app',
        badgeProps: {},
      },
      {
        label: '选项三',
        title: '标题三',
        icon: 'app',
        badgeProps: {},
      },
      {
        label: '选项三',
        title: '标题三',
        icon: 'app',
        badgeProps: {},
      },
      {
        label: '选项三',
        title: '标题三',
        icon: 'app',
        badgeProps: {},
      },
      {
        label: '选项三',
        title: '标题三',
        icon: 'app',
        badgeProps: {},
      },
      {
        label: '选项三',
        title: '标题三',
        icon: 'app',
        badgeProps: {},
      },
      {
        label: '选项三',
        title: '标题三',
        icon: 'app',
        badgeProps: {},
      },
      {
        label: '选项三',
        title: '标题三',
        icon: 'app',
        badgeProps: {},
      }
    ],
  },
  onLoad() {

  },
  // 点击了头像，展示店铺信息
  onShowShopName() {
    this.setData({
      isShowShopInfo: true
    });
  },
  // 关闭店铺信息
  onShopInfoVisibleChange(e) {
    this.setData({
      isShowShopInfo: e.detail.visible,
    });
  },
  // 点击产品项，展示具体的产品细节
  onShowProductDetail() {
    this.setData({
      isShowProductInfo: true
    });
  },
  // 关闭产品卡片
  onProductVisibleChange(e) {
    this.setData({
      isShowProductInfo: e.detail.visible,
    });
  },
  // TODO 后期再重构，这里的交互逻辑不一样
  onShowAddCart() {
    console.log('isShowAddCart')
    this.setData({
      isShowAddCart: true
    });
  },
  onAddCartVisibleChange(e) {
    this.setData({
      isShowAddCart: e.detail.visible,
    });
  },
});
