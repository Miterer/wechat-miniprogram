Page({
  data: {
    userInfo: {
      avatarUrl: '/assets/images/default-avatar.png',  // 默认头像
      nickname: '用户昵称',
      username: '用户123',
      description: '这里是个人简介'
    },
    authentication: '未认证', // 认证信息
  },

  // 点击头像修改
  handleChangeAvatar() {
    wx.chooseImage({
      success: (res) => {
        // 上传头像并更新
        this.setData({
          'userInfo.avatarUrl': res.tempFilePaths[0]
        });
      }
    });
  },

  // 点击昵称修改
  handleChangeNickname() {
    wx.showModal({
      title: '修改昵称',
      content: '请输入新的昵称',
      editable: true,
      success: (res) => {
        if (res.confirm) {
          this.setData({
            'userInfo.nickname': res.content
          });
        }
      }
    });
  },

  // 点击实名认证跳转
  handleRealNameVerification() {
    wx.showToast({
      title: '实名认证功能暂未开放',
      icon: 'none'
    });
  },

  // 点击退出登录
  handleLogout() {
    wx.showModal({
      title: '确认退出',
      content: '您确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 实际应用中可以调用退出登录的接口
          wx.showToast({
            title: '退出成功',
            icon: 'success'
          });
        }
      }
    });
  }
});
