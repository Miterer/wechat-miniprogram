Page({
  data: {
    favoritesList: []  // 存储用户收藏的商品列表
  },

  onLoad() {
    // 页面加载时调用后台接口获取用户收藏的商品
    this.loadFavorites();
  },

  // 获取用户收藏的商品列表
  loadFavorites() {
    wx.request({
      url: 'https://your-api-endpoint.com/getFavorites',  // 替换为你真实的API接口地址
      method: 'GET',
      success: (res) => {
        if (res.data && res.data.length > 0) {
          // 将返回的收藏商品列表设置到 favoritesList
          this.setData({
            favoritesList: res.data
          });
        } else {
          // 如果没有收藏的商品，显示提示信息
          wx.showToast({
            title: '您没有收藏的商品',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        console.log(err);
        wx.showToast({
          title: '加载收藏商品失败',
          icon: 'none'
        });
      }
    });
  }
});
