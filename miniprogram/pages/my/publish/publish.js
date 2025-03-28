Page({
  data: {
    goodsList: []  // 存储从后台获取的商品列表
  },

  onLoad() {
    // 页面加载时，调用后台接口获取个人发布的商品
    this.getPublishedGoods();
  },

  // 获取个人发布的商品列表
  getPublishedGoods() {
    // 模拟后端数据请求
    wx.request({
      url: 'https://your-api-endpoint.com/getPublishedGoods', // 待替换为真实接口地址
      method: 'GET',
      success: (res) => {
        // 假设返回的数据格式为 { data: [...] }
        if (res.data && res.data.length > 0) {
          this.setData({
            goodsList: res.data  // 将返回的商品数据设置到 goodsList
          });
        } else {
          // 如果没有数据，则提示用户
          wx.showToast({
            title: '没有发布商品',
            icon: 'none',
          });
        }
      },
      fail: (err) => {
        console.log(err);
        wx.showToast({
          title: '获取商品列表失败',
          icon: 'none',
        });
      }
    });
  }
});
