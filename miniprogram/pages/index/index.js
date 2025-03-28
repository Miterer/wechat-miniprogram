Page({
  data: {
    bannerList: [
      "/assets/banner/banner-1.png",
      "/assets/banner/banner-2.png",
      "/assets/banner/banner-3.png"
    ],
    categoryList: [
      { id: 1, name: "电子产品", type: "electronics", icon: "/assets/images/electronics.png" },
      { id: 2, name: "书籍教材", type: "books", icon: "/assets/images/books.png" },
      { id: 3, name: "日用品", type: "daily", icon: "/assets/images/daily.png" },
      { id: 4, name: "服饰鞋包", type: "clothes", icon: "/assets/images/clothes.png" }
    ],
    goodsList: []  // 商品列表
  },

  onLoad() {
    this.loadGoods();
  },

  loadGoods() {
    // 先打印日志确认数据是否被加载
    console.log('Loading goods...');
    
    this.setData({
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
          timeStamp: 1615287342000
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
          timeStamp: 1615288342000
        }
      ]
    });

    // 再打印，确保数据被正确更新
    console.log(this.data.goodsList);
  },
  navigateToSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  }
});
