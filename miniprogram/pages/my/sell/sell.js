Page({
  data: {
    sellGoodsList: []  // 存储卖出的商品列表
  },

  onLoad() {
    // 页面加载时，调用后台接口获取卖出的商品
    this.getSellGoods();
  },

  // 获取卖出的商品列表
  getSellGoods() {
    // 模拟请求后台接口，这里需要替换为真实的 API 地址
    wx.request({
      url: 'https://your-api-endpoint.com/getSellGoods', // 替换为真实接口地址
      method: 'GET',
      success: (res) => {
        // 假设返回的数据格式为 { data: [...] }
        if (res.data && res.data.length > 0) {
          this.setData({
            sellGoodsList: res.data  // 将返回的商品数据设置到 sellGoodsList
          });
        } else {
          // 如果没有数据，则提示用户
          wx.showToast({
            title: '没有卖出的商品',
            icon: 'none',
          });
        }
      },
      fail: (err) => {
        console.log(err);
        wx.showToast({
          title: '获取卖出的商品失败',
          icon: 'none',
        });
      }
    });
  }
});
