Page({
  data: {
    addressList: []  // 存储收货地址列表
  },

  onLoad() {
    this.loadAddressList();
  },

  // 从后台加载收货地址列表
  loadAddressList() {
    wx.request({
      url: 'https://your-api-endpoint.com/getAddressList',  // 替换为实际的API接口地址
      method: 'GET',
      success: (res) => {
        if (res.data && res.data.length > 0) {
          this.setData({
            addressList: res.data
          });
        } else {
          wx.showToast({
            title: '没有收货地址',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '加载地址失败',
          icon: 'none'
        });
      }
    });
  },

  // 跳转到添加收货地址页面
  navigateToAddAddress() {
    wx.navigateTo({
      url: '/pages/address/add/add',
    });
  }
});
