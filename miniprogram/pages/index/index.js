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
    goodsList: [] , // 商品列表
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight + 'px'
  },

  onLoad() {
    this.loadGoods();
  },

  loadGoods() {
    const app = getApp();  // 获取全局应用实例
    this.setData({
      goodsList: app.globalData.goodsList  // 从全局数据中获取商品数据
    });
  },

  navigateToSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },

  // 分类点击事件
  navigateToCategory(e) {
    const type = e.currentTarget.dataset.type;
    console.log('Clicked type:', type); // 调试输出
    wx.navigateTo({
      url: `/pages/category/category?type=${type}`
    });
  }
});
