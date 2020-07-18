// pages/user/user.js
Page({

  data:{
    isShow:true,
    isLogin:false,
    userInfo:{},
    toolList01:[
      {img:"https://image.suning.cn/uimg/ZR/share_order/159488417468624461.jpg",name:"待付款"},{img:"https://image.suning.cn/uimg/ZR/share_order/159488422842203686.jpg",name:"代发货"},{img:"https://image.suning.cn/uimg/ZR/share_order/159488423853914386.jpg",name:"售后退款"},{img:"https://image.suning.cn/uimg/ZR/share_order/159488424876411635.jpg",name:"全部订单"}
    ],
    toolList02:[
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_dbf6176cb8516049e3471e40fd947df1.png",name:"我的预约"},
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_31793d76485c7428c9b03a27e805931c.png",name:"高价回收"},
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_a88720ea7d4a312d525cf56e46665129.png",name:"火车票"},
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_37c74b4de77405d5222cb3273d3babd1.png",name:"飞机票"},
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_af6de65e4d50eebc19e2c5d574553569.png",name:"酒店预定"},
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_a66705db8c3bef82144cd0ade16236e5.png",name:"闲置换钱"},
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_6b7cf180fbafe36e4594393c88efec47.png",name:"应用推荐"},
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_cec89c96620cc9e5afde1e34ba863f2b.png",name:"我的快递"},
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_86c641dba5348876c3dc467978797c97.png",name:"我的客服"},
      {img:"https://shop.io.mi-img.com/app/shop/img?id=shop_4dc7e7a158693d8d34528455032ddb32.png",name:"领卷中心"}
    ],
    shop_mind:[
      {num:0,name:"收藏商品"},
      {num:0,name:"收藏店铺"},
      {num:0,name:"我的足迹"}
    ]
  },
  getUserInfo(e){
    console.log(e);
    console.log(e.detail.userInfo.avatarUrl);
    console.log(e.detail.userInfo.nickName);
    
    this.setData({
      isShow: false,
      isLogin:true,
      userInfo:
        {avatar:e.detail.userInfo.avatarUrl,name:e.detail.userInfo.nickName},
    }),
    console.log(this.data.userInfo)
    console.log(this.data.userInfo.avatar)
  },
})