// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add:[
      {name:"韦奕铭",pNumber:"15094086320",add:"陕西西安市周至县九峰镇集贤镇胡下路北50米魏家庄村村委会"},
      {name:"韦奕铭",pNumber:"15094086320",add:"陕西西安市临潼区斜口镇陕鼓大道58号西安工程大学临潼校区"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    for(var i = 0;i < this.__data__.add.length;i++){
      console.log(this.__data__.add[i].pNumber);
      var number = this.__data__.add[i].pNumber.match(/./g);
      
      for(var j = 3;j < 7;j++){
        number[j] = '*';
      }
      number = number.join("");
      console.log(number)
      this.__data__.add[i].pNumber=number;
      console.log(this.__data__.add[i].pNumber); 
    }
    this.setData({
      add:this.__data__.add,
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})