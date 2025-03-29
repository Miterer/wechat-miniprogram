// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {
//     goodsList: {
//       type: Array,
//       value: []  // 默认值为空数组
//     },
//     title: {
//       type: String,
//       value: ''
//     }
//   },

//   observers: {
//     'goodsList'(val) {
//       // console.log('goodsList 变化:', val); // 监听数据变化
//     }
//   },

//   lifetimes: {
//     attached() {
//       // console.log('组件接收到的 goodsList:', this.properties.goodsList);
//       // console.log('组件接收到的 title:', this.properties.title);
//     }
//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {},

//   /**
//    * 组件的方法列表
//    */
//   methods: {
//     // 点击商品跳转到商品详情页
//     handleGoodsTap(e) {
//       const goodsId = e.currentTarget.dataset.id;
//       wx.navigateTo({
//         url: `/pages/goods/detail/detail?goodsId=${goodsId}`
//       });
//     }
//   }
// });

// components/goods-list/goods-list.js
Component({
  properties: {
    goodsList: {
      type: Array,
      value: []
    }
  },

  methods: {
    handleGoodsTap(e) {
      const goodsId = e.detail.goodsId;
      wx.navigateTo({
        url: `/pages/goods/detail/detail?goodsId=${goodsId}`
      });
    }
  }
});