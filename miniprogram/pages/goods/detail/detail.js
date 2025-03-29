 // pages/goods/detail/detail.js
const app = getApp();

Page({
  data: {
    goodsItem: null,
    publisherInfo: {},
    isFavorite: false
  },

  // 时间格式化方法（直接挂载到Page对象）
  formatTime(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 补零
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  onLoad(options) {
    const goodsId = parseInt(options.goodsId);
    this.loadGoodsDetail(goodsId);
  },

  loadGoodsDetail(goodsId) {
    const goodsItem = app.globalData.goodsList.find(item => item.id === goodsId);
    const publisherInfo = app.globalData.userInfo[goodsItem.publisherId];

    // 图片处理：优先使用images字段，无则用imageUrl创建数组
    if (goodsItem) {
      goodsItem.images = goodsItem.images || [goodsItem.imageUrl];
    }

    this.setData({
      goodsItem: {
        ...goodsItem,
        formattedTime: this.formatTime(goodsItem.timeStamp) // 预格式化时间
      },
      publisherInfo,
      isFavorite: this.checkFavorite(goodsId)
    });
  },

  checkFavorite(goodsId) {
    // 从缓存或云数据库检查是否收藏
    return wx.getStorageSync('favorites')?.includes(goodsId) || false;
  },

  toggleFavorite() {
    const { goodsItem, isFavorite } = this.data;
    // 更新本地缓存
    let favorites = wx.getStorageSync('favorites') || [];
    if (isFavorite) {
      favorites = favorites.filter(id => id !== goodsItem.id);
    } else {
      favorites.push(goodsItem.id);
    }
    wx.setStorageSync('favorites', favorites);
    
    this.setData({ isFavorite: !isFavorite });
  },

  navigateToMessage() {
    wx.navigateTo({
      url: `/pages/message/chat?sellerId=${this.data.goodsItem.publisherId}&goodsId=${this.data.goodsItem.id}`
    });
  },

  onShareAppMessage() {
    return {
      title: this.data.goodsItem.name,
      path: `/pages/goods/detail/detail?goodsId=${this.data.goodsItem.id}`
    }
  }
});