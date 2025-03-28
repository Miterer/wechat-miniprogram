Page({
  data: {},

  onLoad() {
    // 这里可以用来初始化页面的任何内容
  },

  // 这里是处理点击客服按钮的方法，启动与客服的聊天
  handleContactService() {
    wx.openCustomerServiceChat({
      extInfo: { // 这里可以传递一些附加信息（可选）
        kf_account: "your_kf_account", // 填写你的客服账号
      },
      success(res) {
        console.log("客服聊天打开成功", res);
      },
      fail(err) {
        console.log("客服聊天打开失败", err);
      }
    });
  }
});
