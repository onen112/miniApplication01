// components/commodity/commodity.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commodity:{
      type:Array,
      value:[],
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
 
  methods: {
    showCommodity:function(e){
      console.log("000000000000");     
      console.log(e.currentTarget.dataset.index);
      app.data.index = e.currentTarget.dataset.index;
      console.log(app.data.index);    
    }
    }
})
