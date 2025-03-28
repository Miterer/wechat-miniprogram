Component({
  properties: {
    goodItem: {
      type: Object,
      value: {
        id: 0,
        name: "",
        marketPrice: 0,
        originalPrice: 0,
        description: "",
        imageUrl: "",
        viewCount: 0,
        wishCount: 0,
        timeStamp: 0
      }
    }
  },
  methods: {
    navigateToDetail(e) {
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/goods/detail/detail?id=${id}`
      });
    }
  }
});
