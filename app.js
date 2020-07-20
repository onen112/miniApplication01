App({
  onLaunch(options) {},
  onShow(options) {},
  onHide() {},
  onError(msg) {},
  onPageNotFound(options) {},
  globalData: {},

  data:{
    index:0,
    comArr:[
      {
        image:"https://yanxuan.nosdn.127.net/e4b5c07178a7afc0b62e313df156fd26.png",
        image2:"https://yanxuan.nosdn.127.net/2056d10dfb5c20c93de9c2ba179ba058.png",inf:"Beats Powerbeats3 By Dr. Dre Wireless入耳耳机 - 黑红",
      price:"￥899",
      image_1:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t22054/111/863763286/309402/b673cf26/5b1a417bNfce7fc82.jpg!q70.dpg.webp",
      image_2:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t21463/240/866390628/296839/72ed81cc/5b1a417aNcb81f568.jpg!q70.dpg.webp",
      image_3:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t20887/53/863413418/305015/b3f9fdf9/5b1a417aN8cac7ab2.jpg!q70.dpg.webp",
      image_4:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t21775/272/835309565/293973/60323563/5b1a417bN9443436c.jpg!q70.dpg.webp",
      discount:"【颈挂式耳机·6期免息】Apple_W1芯片,iPhone开机秒连,iOS系统间无缝切换.苹果运动耳机,稳定耳挂.助力飞跃~点击了解更多 ",
      click:"桀骜黑红，1个",
    },
      {
        image:"https://yanxuan.nosdn.127.net/8793b2fa6eb2e94f0e5534cd3310d3f0.jpg",
        image2:"https://yanxuan.nosdn.127.net/2056d10dfb5c20c93de9c2ba179ba058.png",
        image_1:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/50251/4/7226/277583/5d4e84e8E687774bf/6dde202beb5e9f1e.jpg!q70.dpg.webp",
        image_2:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/55213/24/7281/238436/5d4e8500E7aae1f4b/8d59e548d7f5cd44.jpg!q70.dpg.webp",
        image_3:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/36750/4/13932/126353/5d4e8503E41379ed4/282b38ec046912b3.jpg!q70.dpg.webp",
        image_4:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/73402/6/6791/207136/5d4e84f8E7c873bcd/b959688f30eb4a71.jpg!q70.dpg.webp",
        discount:"摩天手(Mofii) X910 无线笔记本数字小键盘 USB无线键盘 迷你财务会计键盘 银行键盘 蓝色混彩 自营",
        click:"X910 蓝色混彩，1个",
        inf:"摩天手(Mofii)X910无线笔记本数字小键盘 USB无线键盘",
        price:"￥79.9"
      },
      {
        image:"https://yanxuan.nosdn.127.net/99e45eb1da423c7200e5d350ad13efb8.png",
        image2:"https://yanxuan.nosdn.127.net/f4f9e4e3ead913cf87d4d0d303c7d98f.png",
        inf:"联想ThinkPad 10代 X1 Carbon 2019 英特尔酷睿i5 14英寸轻薄笔记本电脑 十代酷睿i5 8G 512G 4G版【03CD】",
        price:"￥6789",
        image_1:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/90091/38/2650/169561/5dd5e149Eae1b493f/f5be668b1957a9f0.jpg!q70.dpg.webp",
        image_2:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/85797/10/2762/208520/5dd5e149E825d99d4/e2d71ff48793b956.jpg!q70.dpg.webp",
        image_3:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/56962/38/16265/194817/5dd5e149E4b1ec410/ed2734b94990e0d6.jpg!q70.dpg.webp",
        image_4:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/73654/34/15727/76532/5dd5e149Edddf1948/f0b6ea8cc6a4a3a9.jpg!q70.dpg.webp",
        discount:"联想ThinkPad X1 Carbon（01CD）英特尔酷睿i5 14英寸高性能 全面屏 超轻薄 高端商务 联想电脑 笔记本电脑(十代i5 8G 512GSSD FHD)黑",
        click:"爆品 i5 8G+512GB 全面屏指纹 黑，1个",
      },
      {
        image:"https://yanxuan.nosdn.127.net/ac76447866e5611856e762715ada11aa.jpg",
        image_1:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/26152/22/11602/57056/5c90e2e3E1237295f/d728fd54a0b444ac.jpg!q70.dpg.webp",
        image_2:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/27980/38/11622/53802/5c90e2e3E0d39791e/c130974fded81ddc.jpg!q70.dpg.webp",
        image_3:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/30321/22/6772/38047/5c90e2e4E1491cfe4/e81a9ca73c37c076.jpg!q70.dpg.webp",
        image_4:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/16061/1/11556/72672/5c90e2e4Eb4ed1f2d/e314072e8c845091.jpg!q70.dpg.webp",
        image2:"https://yanxuan.nosdn.127.net/2056d10dfb5c20c93de9c2ba179ba058.png",inf:"Reebok锐步男子复古篮球鞋BB4500HI2潮流高帮休闲鞋CN6856 CN6856-白色/蓝色 40.5",price:"￥499",
        click:"CN6856-白色/蓝色，40.5，1个",
        discount:"7.19-7.21限时折上85折，领券满300-30，满499-70，首页更有大额券可领取，部分单品可用。进首页领券 ",
      },
      {
        image:"https://yanxuan.nosdn.127.net/1dcaf5acbd5df7b537beb2ea3f527ba0.jpg",
        image_1:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/130358/19/1505/69092/5ed9f39bEbf9fcd1a/1eca20a9ca306ffe.jpg!q70.dpg.webp",
        image_2:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/117619/7/9289/59783/5ed9f39bE6914ad8d/04839567bf528340.jpg!q70.dpg.webp",
        image_3:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/133577/6/1522/97286/5ed9f39cE5d791a3f/88c7d5ba36862fbd.jpg!q70.dpg.webp",
        image_4:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/122505/22/4173/105123/5ed9f39cEea61b1d3/d7ba9289f62c2ca9.jpg!q70.dpg.webp",
        discount:"购买1-5件时享受单件价￥458，超出数量以结算价为准，仅限购买一次",
        click:"橙色，41，1个",
        image2:"https://yanxuan.nosdn.127.net/f4f9e4e3ead913cf87d4d0d303c7d98f.png",inf:"Vans范斯 经典系列 板鞋运动鞋 Style 29低帮男女姜黄色官方 黄色 41",price:"￥665"
      },
      {
        image:"https://yanxuan.nosdn.127.net/b8dff980682ba9354679a8aea2d1a72a.jpg",
        image_1:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/150036/30/2387/252469/5f05a26eE8008a8b5/78cb1e8f014d89b5.jpg!q70.dpg.webp",
        image_2:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/140366/16/2458/318625/5f05a26eE38b84818/d06b5b95028a3c8c.jpg!q70.dpg.webp",
        image_3:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/136359/3/3953/338655/5f05a26eEbbf30b28/144c1d747cb77d31.jpg!q70.dpg.webp",
        image_4:"https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/22559/32/11839/165345/5c932bffE5143f416/e834fda555f9a167.jpg!q70.dpg.webp",
        discount:"无线智能降噪耳机，下单赠送无损煲机资源，6期免息",
        click:"xm3黑色-拆封款，1个",
        image2:"https://yanxuan.nosdn.127.net/3045e782835f4729428878dceffdff20.png",inf:"【二手95新】索尼（SONY）WH-1000XM3 无线蓝牙耳机 降噪耳机 头戴式 1000xm3黑色/95新",price:"￥1198"
      },
      // {
      //   image:"",image2:"",inf:"",price:""
      // },
    ]
  },
  methods:{
    
  }
});
