Page({
  data: {
    name: '',
    phone: '',
    address: '',  // 选中的地区
    detailedAddress: '', // 详细地址
    region: [] // 存储选择的地区
  },

  // 保存收货地址
  saveAddress() {
    const { name, phone, address, detailedAddress } = this.data;

    // 数据校验
    if (!name || !phone || !address || !detailedAddress) {
      wx.showToast({
        title: '请完整填写地址信息',
        icon: 'none'
      });
      return;
    }

    wx.request({
      url: 'https://your-api-endpoint.com/saveAddress',  // 替换为实际的API接口地址
      method: 'POST',
      data: { name, phone, address: `${address} ${detailedAddress}` },
      success: (res) => {
        wx.showToast({
          title: '保存成功',
          icon: 'success'
        });
        wx.navigateBack();  // 返回到上一个页面
      },
      fail: (err) => {
        wx.showToast({
          title: '保存失败',
          icon: 'none'
        });
      }
    });
  },

  // 处理选择地区的变化
  handleRegionChange(e) {
    const region = e.detail.value;  // 获取选择的地区
    this.setData({
      address: region.join(' '),  // 将选择的地区合并为字符串
      region: region // 存储地区
    });
  },

  // 处理详细地址输入
  handleDetailedAddressInput(e) {
    this.setData({
      detailedAddress: e.detail.value  // 设置详细地址
    });
  },

  // 处理联系人输入
  handleNameInput(e) {
    this.setData({
      name: e.detail.value  // 设置联系人姓名
    });
  },

  // 处理手机号码输入
  handlePhoneInput(e) {
    this.setData({
      phone: e.detail.value  // 设置手机号码
    });
  }
});
