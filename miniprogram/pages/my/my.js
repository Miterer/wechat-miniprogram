Page({
  data: {
    // 用户信息
    user: {
      avatar: "/assets/images/avatar-default.png", // 默认头像
      name: "未登录",
      account: "点击登录"
    },

    // 顶部的三个菜单
    topMenus: [
      {
        id: 1,
        text: "我发布的",
        icon: "/assets/images/publish.png",
        route: "/pages/my/publish/publish"
      },
      {
        id: 2,
        text: "我卖出的",
        icon: "/assets/images/sell.png",
        route: "/pages/my/sell/sell"
      },
      {
        id: 3,
        text: "我买到的",
        icon: "/assets/images/buy.png",
        route: "/pages/my/buy/buy"
      }
    ],

    // 下方的四个菜单
    bottomMenus: [
      {
        id: 4,
        text: "我的收藏",
        icon: "/assets/images/fav.png",
        route: "/pages/my/favorites/favorites"
      },
      {
        id: 5,
        text: "收货地址",
        icon: "/assets/images/address.png",
        route: "/pages/address/list/list"
      },
      {
        id: 6,
        text: "联系客服",
        icon: "/assets/images/service.png",
        route: "/pages/my/service/service"
      },
      {
        id: 7,
        text: "关于校园旧宝集",
        icon: "/assets/images/about.png",
        route: "/pages/my/about/about"
      }
    ],

    menuList: [
      {
        id: 8,
        text: "设置",
        icon: "/assets/images/settings.png",
        route: "/pages/my/settings/settings"  // 设置页面的路径
      }
    ]
  },

  onLoad() {
    // 这里可以请求后端接口，获取最新的用户信息
    // wx.request(...) => setData({ user: {...} })
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        user: {
          avatar: userInfo.avatarUrl || "/assets/images/avatar-default.png",
          name: userInfo.nickName || "微信用户",
          account: userInfo.account || "已登录"
        }
      })
    }
  },
  
  // 点击用户信息区域跳转到登录页
  navigateToLogin() {
    const userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.navigateTo({
        url: '/pages/login/login'
      })
    }
  },

  // 点击任意菜单项时跳转
  handleMenuTap(e) {
    const { route } = e.currentTarget.dataset;
    if (route) {
      wx.navigateTo({ url: route });
    }
  },

  // 点击设置
  navigateToSettings() {
    wx.navigateTo({
      url: "/pages/my/settings/settings"
    });
  },

  // 处理“联系客服”按钮点击事件
  handleMenuItemClick(e) {
    const { route } = e.currentTarget.dataset;
    wx.navigateTo({
      url: route // 跳转到客服页面
    });
  }
});
