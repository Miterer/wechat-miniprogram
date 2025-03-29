// pages/goods/detail/detail.js
const app = getApp();

Page({
  data: {
    goodsItem: null
  },

  onLoad(options) {
    const goodsId = parseInt(options.goodsId); // 确保转换为数字
    this.loadGoodsDetail(goodsId);
  },

  loadGoodsDetail(goodsId) {
    // 从全局数据获取商品列表
    const goodsItem = app.globalData.goodsList.find(
      item => item.id === goodsId
    );
    
    if (!goodsItem) {
      wx.showToast({ title: '商品不存在', icon: 'none' });
      return;
    }

    this.setData({ goodsItem });
  }
});