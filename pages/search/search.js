// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:"小米空气净化器",
    hotSearc:["华为手环","剃须刀电动","桂花茶","篮球鞋","烧水壶","地中海窗帘","华为手环","茶叶","破壁机","容声冰箱","自动吸尘器","防护眼镜"]
  },
  click:function(e){
    console.log(e.target.dataset.text);
    this.setData({
      search:e.target.dataset.text,
    })
  }
})