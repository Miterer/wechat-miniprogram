Page({
  data: {
    goodsItem: {}
  },

  onLoad(options) {
    const goodsId = options.goodsId; // 获取商品ID
    this.loadGoodsDetail(goodsId);
  },

  loadGoodsDetail(goodsId) {
    // 模拟从数据库或后端获取商品详情数据，这里使用之前的goodsList来模拟数据
    const goodsList = [
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
    ];

    // 通过商品ID获取具体商品数据
    const goodsItem = goodsList.find(item => item.id === parseInt(goodsId));

    // 设置商品数据到页面
    this.setData({
      goodsItem
    });
  }
});
