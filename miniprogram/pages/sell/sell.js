Page({
  data: {
    name: "", 
    // 闲置物品信息
    categoryOptions: ["电子产品", "书籍教材", "日用品", "服饰鞋包"],
    typeIndex: 0, // 对应 categoryOptions 的下标
    description: "",        // 文本描述
    images: [],             // 图片数组
    price: "",              // 价格
    shippingMethod: "邮寄（运费未填）" // 也可以改成其他默认值
  },
  //输入名称
  handleNameInput(e) {
    this.setData({
      name: e.detail.value
    });
  },
  //输入类型
  handleTypeChange(e) {
    const index = e.detail.value;
    this.setData({
      typeIndex: index
    });
  },
  // 输入描述
  handleDescInput(e) {
    this.setData({
      description: e.detail.value
    });
  },

  // 添加图片
  handleAddImage() {
    const that = this;
    wx.chooseImage({
      count: 9, // 可一次性选多张
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        // 将选中的图片路径合并到 images 数组中
        that.setData({
          images: that.data.images.concat(tempFilePaths)
        });
      }
    });
  },

  // 删除已选图片
  handleRemoveImage(e) {
    const { index } = e.currentTarget.dataset;
    const { images } = this.data;
    images.splice(index, 1);
    this.setData({ images });
  },

  // 输入价格
  handlePriceInput(e) {
    this.setData({
      price: e.detail.value
    });
  },

  // 切换发货方式（可自行扩展，如弹出 ActionSheet 等）
  handleChangeShipping() {
    const currentMethod = this.data.shippingMethod;
    const newMethod = currentMethod === "邮寄（运费未填）" ? "同城自提" : "邮寄（运费未填）";
    this.setData({
      shippingMethod: newMethod
    });
  },

  // 点击发布
  handlePublish() {
    const { description, images, price, shippingMethod } = this.data;

    // 简单校验
    if (!description.trim()) {
      wx.showToast({ title: "请填写宝贝描述", icon: "none" });
      return;
    }
    if (!price) {
      wx.showToast({ title: "请填写价格", icon: "none" });
      return;
    }

    // 发布逻辑（示例：打印到控制台或对接后端）
    console.log("发布闲置：", {
      description,
      images,
      price,
      shippingMethod
    });

    // 发布成功提示
    wx.showToast({
      title: "发布成功",
      icon: "success"
    });

    // 可以在这里跳转到其他页面或清空数据
    // wx.navigateBack(); // 返回上一页
  }
});
