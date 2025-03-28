Component({
  properties: {
    cateList: {
      type: Array,
      value: []
    }
  },
  methods: {
    navigateToCategory(e) {
      // 获取分类项中的 type 属性
      const categoryType = e.currentTarget.dataset.type;
      wx.navigateTo({
        url: `/pages/goods/list/list?type=${categoryType}`
      });
    }
  }
});
