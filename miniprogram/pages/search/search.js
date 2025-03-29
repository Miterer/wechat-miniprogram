Page({
  data: {
    searchResults: [],
    allGoods: [],
    searchKeyword: "" // 新增搜索关键词存储
  },

  onLoad() {
    const app = getApp();
    this.setData({
      allGoods: app.globalData.goodsList || [...你的默认数据]
    });
  },

  // 输入时实时搜索
  onSearchInput(e) {
    const keyword = e.detail.value;
    this.setData({ searchKeyword: keyword });
    this.searchGoods(keyword);
  },

  // 回车键触发
  onSearchConfirm(e) {
    this.searchGoods(e.detail.value);
  },

  // 封装搜索方法
  searchGoods(keyword) {
    if (!keyword.trim()) {
      this.setData({ searchResults: [] });
      return;
    }

    const results = this.data.allGoods
      .filter(item => item.name.includes(keyword))
      .sort((a, b) => b.name === keyword - a.name === keyword);

    this.setData({ searchResults: results });
  },

  navigateBack() {
    wx.navigateBack();
  }
});