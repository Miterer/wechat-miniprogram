 // pages/goods/detail/detail.js
const app = getApp();

Page({
  data: {
    goodsItem: null,
    publisherInfo: {},
    isFavorite: false,
    messages: [],            // 所有留言
    displayMessages: [],     // 初始显示3条留言
    newMessage: "",          // 当前输入的留言
    showAllMessagesPopup: false // 控制是否显示全部留言弹窗
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
  },

   // 留言模块逻辑

  // 模拟加载留言数据，实际应从后台获取
  loadMessages(goodsId) {
    // 模拟留言数据（实际根据 goodsId 获取）
    const simulatedMessages = [
      { id: 1, content: "这个商品不错！", timestamp: 1615290000000 },
      { id: 2, content: "还可以再便宜点吗？", timestamp: 1615293600000 },
      { id: 3, content: "请问包邮吗？", timestamp: 1615297200000 },
      { id: 4, content: "我想要，请联系我。", timestamp: 1615300800000 }
    ];
    // 假设所有留言都属于当前商品
    const displayMessages = simulatedMessages.slice(0, 3);
    this.setData({ messages: simulatedMessages, displayMessages });
  },

  // 处理留言输入
  handleMessageInput(e) {
    this.setData({ newMessage: e.detail.value });
  },

  // 发送留言
  sendMessage() {
    const { newMessage, messages } = this.data;
    if (!newMessage.trim()) {
      wx.showToast({ title: "留言不能为空", icon: "none" });
      return;
    }
    // 模拟添加留言，实际开发中调用后端接口
    const newMsgObj = {
      id: messages.length + 1,
      content: newMessage,
      timestamp: Date.now()
    };
    const updatedMessages = [newMsgObj, ...messages];
    this.setData({
      messages: updatedMessages,
      displayMessages: updatedMessages.slice(0, 3),
      newMessage: ""
    });
    wx.showToast({ title: "留言成功", icon: "success" });
  },

  // 显示全部留言弹窗
  showAllMessages() {
    this.setData({ showAllMessagesPopup: true });
  },

  // 关闭留言弹窗
  closeMessagesPopup() {
    this.setData({ showAllMessagesPopup: false });
  }
});