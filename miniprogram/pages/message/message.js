Page({
  data: {
    // 消息列表数据示例
    messageList: [
      {
        id: 1,
        avatar: "/assets/images/notice.png", // 系统通知头像
        title: "通知消息",
        lastMsg: "见面签到了老朋友，邀请您回来领现金",
        time: "03-04",
        unreadCount: 0
      },
      {
        id: 2,
        avatar: "/assets/images/seller.png", // 卖家头像
        title: "吉林大学第一深情",
        lastMsg: "等待买家支付货款",
        time: "昨天",
        unreadCount: 2
      },
      {
        id: 3,
        avatar: "/assets/images/buyer.png", // 买家头像
        title: "Rosan_Ferrenschmidt",
        lastMsg: "给给~ 评价你啦",
        time: "2024-10-03",
        unreadCount: 0
      },
      {
        id: 4,
        avatar: "/assets/images/seller.png",
        title: "QTCZZ",
        lastMsg: "交易待评价",
        time: "2024-10-03",
        unreadCount: 5
      }
    ]
  },

  // 点击某条消息，跳转到聊天详情或其他页面
  handleMessageTap(e) {
    const { id } = e.currentTarget.dataset;
    // 这里可以根据 id 区分系统通知/聊天对话
    // 跳转到聊天详情
    wx.navigateTo({
      url: `/pages/chat/chat?id=${id}`
    });
  }
});
