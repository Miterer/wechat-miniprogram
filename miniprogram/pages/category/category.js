Page({
  data: {
    categoryType: '',  // 当前类别
    goodsList: []  // 商品列表
  },

  onLoad(options) {
    // console.log('Received type:', options.type); // 调试输出
    this.setData({
      categoryType: options.type  // 获取传递的 type 参数
    });
    
    this.loadGoods(options.type);  // 加载商品数据

      const app = getApp();
      // console.log('Global goodsList:', app.globalData.goodsList); // 检查数据
    
  },

  loadGoods(type) {
    const app = getApp();
    const allGoods = app.globalData.goodsList;
    // console.log('全局数据 allGoods:', allGoods); // 1. 检查全局数据
    const filteredGoods = allGoods.filter(item => item.type === type);
    // console.log('过滤后的数据 filteredGoods:', filteredGoods); // 2. 检查过滤结果
    
    this.setData({
      goodsList: filteredGoods
    }, () => {
      // console.log('setData 后的页面数据:', this.data.goodsList); // 3. 确认数据已更新
    });
  }
});
