Page({
  data: {
    buyGoodsList: []  // 存储买到的商品列表
  },

  onLoad() {
    // 页面加载时，调用后台接口获取买到的商品
    this.getBuyGoods();
  },

  // 获取买到的商品列表
  getBuyGoods() {
    // 模拟请求后台接口，这里需要替换为真实的 API 地址
    wx.request({
      url: 'https://your-api-endpoint.com/getBuyGoods', // 替换为真实接口地址
      method: 'GET',
      success: (res) => {
        // 假设返回的数据格式为 { data: [...] }
        if (res.data && res.data.length > 0) {
          this.setData({
            buyGoodsList: res.data  // 将返回的商品数据设置到 buyGoodsList
          });
        } else {
          // 如果没有数据，则提示用户
          wx.showToast({
            title: '没有买到的商品',
            icon: 'none',
          });
        }
      },
      fail: (err) => {
        console.log(err);
        wx.showToast({
          title: '获取买到的商品失败',
          icon: 'none',
        });
      }
    });
  }
});
