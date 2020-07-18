// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      {text:"热门推荐",isActive:true},
      {text:"手机数码",isActive:false},
      {text:"电脑办公",isActive:false},
      {text:"美妆护肤",isActive:false},
      {text:"个护清洁",isActive:false},
      {text:"汽车生活",isActive:false},
      {text:"男装",isActive:false},
      {text:"女装",isActive:false},
      {text:"男鞋",isActive:false},
      {text:"女鞋",isActive:false},
      {text:"母婴童装",isActive:false},
      {text:"图书影像",isActive:false},
      {text:"户外运动",isActive:false},
      {text:"食品生鲜",isActive:false},
      {text:"酒水饮料",isActive:false},
      {text:"家具厨具",isActive:false},
      {text:"玩具乐器",isActive:false},
      {text:"医药保健",isActive:false}
    ],
    title:"热门推荐",
    cateArr:[
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",name:"手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",name:"全面屏手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",name:"游戏手机"},
      {img:"https://img30.360buyimg.com/focus/s140x140_jfs/t1/134182/23/366/16758/5eccb3caE2b8d0c6d/7ab40f9d9441a2a5.jpg",name:"保健品"},
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t1/114862/21/8081/13361/5ecb398fEc7c98869/4b4101d0acbf4ced.jpg",name:"口罩"},
      {img:"https://img13.360buyimg.com/focus/s140x140_jfs/t1/136893/38/305/31308/5ecb84dcE410bc59a/36568e70a84f8807.jpg",name:"驱蚊用品"},
      {img:"https://img13.360buyimg.com/focus/s140x140_jfs/t1/120301/21/3027/11815/5ecb80a8Ed94ec15d/c20f3541c5618e17.jpg",name:"电磁炉"},
      {img:"https://img10.360buyimg.com/focus/s140x140_jfs/t1/111738/8/8168/9785/5ecb40ccE19924aec/1a1a91827d0f07ba.jpg",name:"电热水壶"},
      {img:"https://img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg",name:"数据线"},
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t1/131006/3/360/19831/5eccb047E2e95a92e/b425dc4923a20c15.jpg",name:"图书"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/104017/10/11956/27906/5e3e8936E54437217/e5905d3b63d5f6fb.jpg",name:"除菌液"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/129461/33/2827/16392/5ecb3dd2E2d178436/c4cd36d661e91665.jpg",name:"休闲食品"},
      {img:"https://img10.360buyimg.com/focus/s140x140_jfs/t1/106781/8/11928/23561/5e3e833fE92c281f5/72b834ead18b6462.jpg",name:"充电宝"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/96627/6/11719/15770/5e3e83b6E05b80eea/76b39555bc2d2a89.jpg",name:"体温计"},
      {img:"https://img11.360buyimg.com/focus/s140x140_jfs/t1/97873/26/11984/16170/5e3e878eE3d6f29d8/820c61d6be7faf12.jpg",name:"投影仪"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg",name:"游戏机"},
      {img:"https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",name:"空调"},
      {img:"https://img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg",name:"冰箱"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",name:"家庭清洁"}
    ],
    cateArr0:[
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",name:"手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",name:"全面屏手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",name:"游戏手机"},
      {img:"https://img30.360buyimg.com/focus/s140x140_jfs/t1/134182/23/366/16758/5eccb3caE2b8d0c6d/7ab40f9d9441a2a5.jpg",name:"保健品"},
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t1/114862/21/8081/13361/5ecb398fEc7c98869/4b4101d0acbf4ced.jpg",name:"口罩"},
      {img:"https://img13.360buyimg.com/focus/s140x140_jfs/t1/136893/38/305/31308/5ecb84dcE410bc59a/36568e70a84f8807.jpg",name:"驱蚊用品"},
      {img:"https://img13.360buyimg.com/focus/s140x140_jfs/t1/120301/21/3027/11815/5ecb80a8Ed94ec15d/c20f3541c5618e17.jpg",name:"电磁炉"},
      {img:"https://img10.360buyimg.com/focus/s140x140_jfs/t1/111738/8/8168/9785/5ecb40ccE19924aec/1a1a91827d0f07ba.jpg",name:"电热水壶"},
      {img:"https://img11.360buyimg.com/focus/s140x140_jfs/t1/113143/20/8135/9835/5ecb81ccE22407538/e9a80b7af28e83a6.jpg",name:"数据线"},
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t1/131006/3/360/19831/5eccb047E2e95a92e/b425dc4923a20c15.jpg",name:"图书"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/104017/10/11956/27906/5e3e8936E54437217/e5905d3b63d5f6fb.jpg",name:"除菌液"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/129461/33/2827/16392/5ecb3dd2E2d178436/c4cd36d661e91665.jpg",name:"休闲食品"},
      {img:"https://img10.360buyimg.com/focus/s140x140_jfs/t1/106781/8/11928/23561/5e3e833fE92c281f5/72b834ead18b6462.jpg",name:"充电宝"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/96627/6/11719/15770/5e3e83b6E05b80eea/76b39555bc2d2a89.jpg",name:"体温计"},
      {img:"https://img11.360buyimg.com/focus/s140x140_jfs/t1/97873/26/11984/16170/5e3e878eE3d6f29d8/820c61d6be7faf12.jpg",name:"投影仪"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/96008/21/11832/14563/5e3e883fE941b27f7/e073dd6dd02ecd02.jpg",name:"游戏机"},
      {img:"https://img11.360buyimg.com/focus/s140x140_jfs/t1/117080/5/10502/18158/5ef0103eE416ae569/898a7ac882ba6c63.jpg",name:"空调"},
      {img:"https://img10.360buyimg.com/focus/s140x140_jfs/t1/119891/13/5448/24096/5ef01048E096cfd33/260803efca5e8a73.jpg",name:"冰箱"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg",name:"家庭清洁"}
    ],
    cateArr1:[
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",name:"手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",name:"全面屏手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",name:"游戏手机"},
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",name:"手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",name:"全面屏手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",name:"游戏手机"},
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",name:"手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",name:"全面屏手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",name:"游戏手机"},
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",name:"手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",name:"全面屏手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",name:"游戏手机"},
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",name:"手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",name:"全面屏手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",name:"游戏手机"},
      {img:"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",name:"手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg",name:"全面屏手机"},
      {img:"https://img20.360buyimg.com/focus/s140x140_jfs/t1/102972/19/11837/14987/5e3d8bdaEc8ffe21e/6119d3f773fcdacd.jpg",name:"游戏手机"},
    ],
    cateArr2:
    [
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png",name:"电脑"},
    ],
    cateArr3:[
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},
      {img:"https://img12.360buyimg.com/focus/s140x140_jfs/t1/116006/32/8107/3290/5ecb3fb1Eaf924484/552f5b1d08d42fee.jpg",name:"美妆护肤"},

    ]
  },

  click:function(e){

    console.log(e.currentTarget.dataset.text);
    var click =  e.currentTarget.dataset.text;
    var newCategory = this.__data__.category;
    var no;

    // 修改title
    this.setData({
      
    })
    console.log(this)  

    // 修改click的属性
    for(var i = 0;i < newCategory.length;i++){
      if(newCategory[i].isActive === true&&newCategory[i].text !== click){
        newCategory[i].isActive = false;
      }
      if(newCategory[i].text === click){
        newCategory[i].isActive = true;
        no = i;
      }
    }
    this.setData({
      
    })

    // 修改页面显示内容
    var reCateArr;
    switch(no){
      case 0 : reCateArr=this.__data__.cateArr0;break;
      case 1 : reCateArr=this.__data__.cateArr1;break;
      case 2 : reCateArr=this.__data__.cateArr2;break;
      case 3 : reCateArr=this.__data__.cateArr3;break;
      case 4 : reCateArr=this.__data__.cateArr0;break;
      case 5 : reCateArr=this.__data__.cateArr1;break;
      case 6 : reCateArr=this.__data__.cateArr2;break;
      case 6 : reCateArr=this.__data__.cateArr3;break;
      case 7 : reCateArr=this.__data__.cateArr0;break;
      case 8 : reCateArr=this.__data__.cateArr1;break;
      case 9 : reCateArr=this.__data__.cateArr2;break;
      case 10 : reCateArr=this.__data__.cateArr3;break;
      case 11 : reCateArr=this.__data__.cateArr0;break;
      case 12 : reCateArr=this.__data__.cateArr1;break;
      case 13 : reCateArr=this.__data__.cateArr2;break;
      case 14 : reCateArr=this.__data__.cateArr3;break;
      case 15 : reCateArr=this.__data__.cateArr0;break;
      case 16 : reCateArr=this.__data__.cateArr1;break;
      case 17 : reCateArr=this.__data__.cateArr2;break;
    }
    console.log(reCateArr)
    this.setData({
      title:click,
      category:newCategory,
      cateArr:reCateArr,
    })
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