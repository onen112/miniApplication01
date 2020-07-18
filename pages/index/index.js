
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toolList:[
      {img:"https://ae01.alicdn.com/kf/H978301d692a848429233eeb8f1392698S.jpg",name:"超市"},
      {img:"https://ae01.alicdn.com/kf/Hbb66e6ba800f4940a03aa61443079a8ce.jpg",name:"数码"},
      {img:"https://ae01.alicdn.com/kf/Hb33e5d70875244e0ae2cd1a79bdacdb2I.jpg",name:"服饰"},
      {img:"https://ae01.alicdn.com/kf/Ha5616901cd6642f2bdab85a42646d2f5c.jpg",name:"生鲜"},
      {img:"https://ae01.alicdn.com/kf/He48142d4f93947bc83f10449ddc2bd63m.jpg",name:"送货到家"},
      {img:"https://ae01.alicdn.com/kf/H94083b966a3c4478bd49f3614ae4c2e0K.jpg",name:"充值缴费"},
      {img:"https://ae01.alicdn.com/kf/H5086c7a1eddf47189af7803a9eb61139p.jpg",name:"9.9包邮"},
      {img:"https://ae01.alicdn.com/kf/Hb2626d6e4bea41ea8fb1f26f508bc331m.jpg",name:"领卷"},
      {img:"https://pics.images.ac.cn/image/5f0fa3e44a6b6.html",name:"领津贴"},
      {img:"https://ae01.alicdn.com/kf/H0970209880284323b487bef8a470af33l.jpg",name:"会员"}
      ],
      inf_xiaoyuan01:[{
        head:"户外出行",
        expl:"户外出行正当时",
        imag:"https://shop.io.mi-img.com/app/shop/img?id=shop_f7e8775541d52581552f566cb1172080.png",
        imag1:"https://shop.io.mi-img.com/app/shop/img?id=shop_9415e5292b344d97477f561956f7c506.png",
        head2:"烘培用油",
        expl2:"尝新烘培油",
        imag2:"//m.360buyimg.com/mobilecms/s150x150_jfs/t1/93032/30/15361/159645/5e71c5eeEdb81f3ea/cc8b120e2918928a.jpg!q70.jpg",
        head3:"4K高清",
        expl3:"品质电视",
        imag3:"https://shop.io.mi-img.com/app/shop/img?id=shop_e3377a2a88a08afcd184d1ae0a5f6e69.png"
      }],
      inf_xiaoyuan02:[{
        head:"品质潮童",
        expl:"辣妈就爱潮宝宝",
        imag:"https://shop.io.mi-img.com/app/shop/img?id=shop_328ec0d4d28c2cfcdfc4e966e4b23332.png",
        imag1:"https://shop.io.mi-img.com/app/shop/img?id=shop_5456a55a946108433b77294de8b30ad4.png",
        head2:"棉麻夏装",
        expl2:"居家必备",
        imag2:"https://shop.io.mi-img.com/app/shop/img?id=shop_97914fef87f0619ec3a7caff05fbbd4a.png",
        head3:"时尚男鞋",
        expl3:"舒适男鞋",
        imag3:"https://shop.io.mi-img.com/app/shop/img?id=shop_5747015a88027001ecf1ed411726dbc8.png"
      }],
      everyshopArr:[
        {head:"免息星球",expl:"12期免息购",image:"https://shop.io.mi-img.com/app/shop/img?id=shop_18cdccabcc0a9a80d6609981ce87dd2b.png"},
        {head:"每日特价",expl:"9块9疯抢",image:"https://yanxuan.nosdn.127.net/37f6af960158fc225e1a6ba60ccba9ea.jpg"},
        {head:"品牌闪购",expl:"汇大牌好货",image:"https://yanxuan.nosdn.127.net/413ac38c6afc18e187448e7f768d4475.jpg"},
        {head:"京东直播",expl:"边看边买",image:"https://yanxuan.nosdn.127.net/e4f09ffe66f5bc709b5c6fdd3d425498.jpg"},
        {head:"排行榜",expl:"销量排行",image:"https://yanxuan.nosdn.127.net/15911c403f6f090ef88c679cf538fe1b.jpg"},
        {head:"拍拍好物",expl:"二手优品",image:"https://shop.io.mi-img.com/app/shop/img?id=shop_324d0525fa325e2c18fddee0a7ddccb7.png"},
        {head:"新品首发",expl:"购物小魔方",image:"https://shop.io.mi-img.com/app/shop/img?id=shop_b5e7a866a5e82b300051f67c9f2f731a.png"},
        {head:"发现好货",expl:"品质生活",image:"https://shop.io.mi-img.com/app/shop/img?id=shop_fab62f5f3e365754631807a469ce3328.png"}
      ],
      comArr:[
        {image:"https://yanxuan.nosdn.127.net/e4b5c07178a7afc0b62e313df156fd26.png",image2:"https://yanxuan.nosdn.127.net/2056d10dfb5c20c93de9c2ba179ba058.png",inf:"Beats Powerbeats3 By Dr. Dre Wireless入耳耳机 - 黑红",
        price:"￥899"},
        {
          image:"https://yanxuan.nosdn.127.net/8793b2fa6eb2e94f0e5534cd3310d3f0.jpg",image2:"https://yanxuan.nosdn.127.net/2056d10dfb5c20c93de9c2ba179ba058.png",inf:"摩天手(Mofii)X910无线笔记本数字小键盘 USB无线键盘",price:"￥79.9"
        },
        {
          image:"https://yanxuan.nosdn.127.net/99e45eb1da423c7200e5d350ad13efb8.png",image2:"https://yanxuan.nosdn.127.net/f4f9e4e3ead913cf87d4d0d303c7d98f.png",inf:"联想ThinkPad 10代 X1 Carbon 2019 英特尔酷睿i5 14英寸轻薄笔记本电脑 十代酷睿i5 8G 512G 4G版【03CD】",price:"￥6789"
        },
        {
          image:"https://yanxuan.nosdn.127.net/ac76447866e5611856e762715ada11aa.jpg",image2:"https://yanxuan.nosdn.127.net/2056d10dfb5c20c93de9c2ba179ba058.png",inf:"Reebok锐步男子复古篮球鞋BB4500HI2潮流高帮休闲鞋CN6856 CN6856-白色/蓝色 40.5",price:"￥499"
        },
        {
          image:"https://yanxuan.nosdn.127.net/1dcaf5acbd5df7b537beb2ea3f527ba0.jpg",image2:"https://yanxuan.nosdn.127.net/f4f9e4e3ead913cf87d4d0d303c7d98f.png",inf:"Vans范斯 经典系列 板鞋运动鞋 Style 29低帮男女姜黄色官方 黄色 41",price:"￥665"
        },
        {
          image:"https://yanxuan.nosdn.127.net/b8dff980682ba9354679a8aea2d1a72a.jpg",image2:"https://yanxuan.nosdn.127.net/3045e782835f4729428878dceffdff20.png",inf:"【二手95新】索尼（SONY）WH-1000XM3 无线蓝牙耳机 降噪耳机 头戴式 1000xm3黑色/95新",price:"￥1198"
        },
        // {
        //   image:"",image2:"",inf:"",price:""
        // },
      ]

  },
  cominf:function(e){
    console.log(e.currentTarget);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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