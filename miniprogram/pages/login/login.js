Page({
  onLoad() {
    // 隐藏警告的变通方案
    if (typeof SharedArrayBuffer === 'undefined') {
      globalThis.SharedArrayBuffer = ArrayBuffer;
    }
  },

  onGetUserInfo(e) {
    wx.showLoading({ title: '登录中...', mask: true });
    
    if (e.detail.userInfo) {
      const { nickName, avatarUrl } = e.detail.userInfo;
      wx.login({
        success: (res) => {
          wx.request({
            url: 'https://your-api-domain.com/login',
            method: 'POST',
            data: { code: res.code, nickName, avatarUrl },
            success: (res) => {
              wx.hideLoading();
              if (res.data.code === 200) {
                wx.setStorageSync('token', res.data.token);
                wx.navigateBack();
              }
            },
            fail: () => {
              wx.hideLoading();
              wx.showToast({ title: '网络错误', icon: 'none' });
            }
          });
        },
        fail: () => {
          wx.hideLoading();
          wx.showToast({ title: '微信登录失败', icon: 'none' });
        }
      });
    } else {
      wx.hideLoading();
      wx.showToast({ title: '需要授权才能登录', icon: 'none' });
    }
  },

  navigateBack() {
    wx.navigateBack()
  },
  
  // 跳转手机号登录
  navigateToPhoneLogin() {
    wx.navigateTo({
      url: '/pages/login/phone-login'
    })
  }
});