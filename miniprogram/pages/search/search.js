Page({
  data: {
    searchResults: [],
    allGoods: [] // 所有商品数据
  },

  onLoad() {
    // 获取全局商品数据（需在主页加载后传递或从服务端获取）
    const app = getApp();
    this.setData({
      allGoods: app.globalData.goodsList || []
    });
  },

  // 输入时触发搜索
  onSearchInput(e) {
    const keyword = e.detail.value.trim();
    if (!keyword) {
      this.setData({ searchResults: [] });
      return;
    }

    // 匹配逻辑：完全匹配优先 > 部分匹配
    const results = this.data.allGoods
      .filter(item => item.name.includes(keyword))
      .sort((a, b) => {
        const aExact = a.name === keyword;
        const bExact = b.name === keyword;
        return bExact - aExact; // 完全匹配排前面
      });

    this.setData({ searchResults: results });
  },

  // 返回主页
  navigateBack() {
    wx.navigateBack();
  }
});
