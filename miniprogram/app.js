App({
  globalData: {
    goodsList: [
      {
        id: 1,
        name: "小米14ultra",
        type: "electronics",
        marketPrice: 4999,
        originalPrice: 6499,
        description: "小米14ultra 99新，女生自用",
        imageUrl: "/assets/images/phone_xiaomi14ultra.jpg",
        viewCount: 1024,
        wishCount: 230,
        timeStamp: 1615287342000,
        publisherId: "user666"
      },
      {
        id: 2,
        name: "考研张宇高数18讲",
        type: "books",
        marketPrice: 149,
        originalPrice: 199,
        description: "考研数学复习资料",
        imageUrl: "/assets/images/book_zhangyu18.jpg",
        viewCount: 789,
        wishCount: 120,
        timeStamp: 1615288342000,
        publisherId: "user666"
      },
      {
        id: 3,
        name: "米家台灯2Lite",
        type: "daily",
        marketPrice: 33,
        originalPrice: 66,
        description: "毕业了，台灯半价出，校园自提，可小刀",
        imageUrl: "/assets/images/lamp_mijia2lite.jpg",
        viewCount: 333,
        wishCount: 122,
        timeStamp: 1743171259726,
        publisherId: "user666"
      },
      {
        id: 4,
        name: "YSL圣罗兰CASSANDRE_ENVELOPE皮革链条包",
        type: "clothes",
        marketPrice: 8888,
        originalPrice: 12200,
        description: "毕业懒得回家寄，随缘出给姐妹们，99新，支持专柜验货",
        imageUrl: "/assets/images/bag_YSL_CASSANDRE_ENVELOPE.jpeg",
        viewCount: 1000,
        wishCount: 99,
        timeStamp: 1743172145748,
        publisherId: "user666"
      }
    ],
    userInfo: {
      "user666": {
        avatar: "/assets/avatars/user666.jpg",
        nickname: "AAA数码哥全国可飞",
        location: "长春"
      }
    }
  },
  
  onLaunch() {
    // 启动时尝试从本地存储加载用户信息
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.globalData.userInfo = userInfo
    }
  }
})