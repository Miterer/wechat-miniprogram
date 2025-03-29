// components/goods-card/goods-card.js
Component({
  properties: {
    goodItem: {
      type: Object,
      value: {}
    }
  },

  methods: {
    navigateToDetail(e) {
      const goodsId = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/goods/detail/detail?goodsId=${goodsId}`
      });
    }
  }
});